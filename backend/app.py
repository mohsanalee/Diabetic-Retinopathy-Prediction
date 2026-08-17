from flask import Flask, request, render_template, flash, redirect, url_for, jsonify
from flask_cors import CORS
from werkzeug.utils import secure_filename
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.image import img_to_array
import numpy as np
import os
from PIL import Image

app = Flask(__name__)

# --------------------------------------------------
# Configuration
# --------------------------------------------------

app.config["UPLOAD_FOLDER"] = "static/uploads"
app.config["ALLOWED_EXTENSIONS"] = {"png"}

# Temporary secret key.
# Move this to an environment variable before production.
app.secret_key = "your_secret_key_here"

# Allow the Next.js frontend to communicate with Flask.
CORS(app)

# Make sure upload directory exists.
os.makedirs(app.config["UPLOAD_FOLDER"], exist_ok=True)

# --------------------------------------------------
# Load Model
# --------------------------------------------------

model = load_model("DR_version1.h5")

# IMPORTANT:
# Keep this order exactly as used by the existing model.
labels = [
    "Mild dr",
    "moderate",
    "NoDr",
    "severe",
    "proliferative",
]

# Professional frontend display names.
display_labels = {
    "Mild dr": "Mild Diabetic Retinopathy",
    "moderate": "Moderate Diabetic Retinopathy",
    "NoDr": "No Diabetic Retinopathy",
    "severe": "Severe Diabetic Retinopathy",
    "proliferative": "Proliferative Diabetic Retinopathy",
}


# --------------------------------------------------
# Helper Functions
# --------------------------------------------------

def allowed_file(filename):
    return (
        "." in filename
        and filename.rsplit(".", 1)[1].lower()
        in app.config["ALLOWED_EXTENSIONS"]
    )


def prepare_image(image, target_size=(224, 224)):
    """
    Prepare an uploaded retinal image using
    the same preprocessing used by the existing backend.
    """
    if image.mode != "RGB":
        image = image.convert("RGB")

    image = image.resize(target_size)
    image = img_to_array(image)
    image = np.expand_dims(image, axis=0)

    return image


def make_prediction(image):
    """
    Run the existing DR model and return:
    - predicted class
    - display label
    - prediction probabilities
    """
    processed_image = prepare_image(image)

    prediction = model.predict(processed_image, verbose=0)

    # Convert TensorFlow output to a clean NumPy array.
    probabilities = np.asarray(prediction)[0]

    predicted_index = int(np.argmax(probabilities))
    predicted_label = labels[predicted_index]
    professional_label = display_labels[predicted_label]

    probability_data = {
        display_labels[label]: float(probabilities[index])
        for index, label in enumerate(labels)
    }

    return {
        "class": predicted_label,
        "label": professional_label,
        "confidence": float(probabilities[predicted_index]),
        "probabilities": probability_data,
    }


# --------------------------------------------------
# Health Check
# --------------------------------------------------

@app.route("/api/health", methods=["GET"])
def health_check():
    return jsonify({
        "status": "ok",
        "service": "RetinaCare AI",
        "model_loaded": model is not None,
    })


# --------------------------------------------------
# API Prediction Endpoint
# --------------------------------------------------

@app.route("/api/predict", methods=["POST"])
def api_predict():

    if "file" not in request.files:
        return jsonify({
            "success": False,
            "error": "No file was provided."
        }), 400

    file = request.files["file"]

    if file.filename == "":
        return jsonify({
            "success": False,
            "error": "No file was selected."
        }), 400

    if not allowed_file(file.filename):
        return jsonify({
            "success": False,
            "error": "Invalid file format. Please upload a PNG image."
        }), 400

    filename = secure_filename(file.filename)

    if not filename:
        return jsonify({
            "success": False,
            "error": "Invalid filename."
        }), 400

    filepath = os.path.join(
        app.config["UPLOAD_FOLDER"],
        filename
    )

    try:
        file.save(filepath)

        image = Image.open(filepath)

        result = make_prediction(image)

        return jsonify({
            "success": True,
            "filename": filename,
            "image_url": url_for(
                "static",
                filename=f"uploads/{filename}"
            ),
            "prediction": result,
        })

    except Exception as e:
        return jsonify({
            "success": False,
            "error": f"Error processing image: {str(e)}"
        }), 500


# --------------------------------------------------
# Existing Flask Web Interface
# --------------------------------------------------

@app.route("/", methods=["GET", "POST"])
def index():

    if request.method == "POST":

        if "file" not in request.files:
            flash("No file part")
            return redirect(request.url)

        file = request.files["file"]

        if file.filename == "":
            flash("No selected file")
            return redirect(request.url)

        if file and allowed_file(file.filename):

            filename = secure_filename(file.filename)

            filepath = os.path.join(
                app.config["UPLOAD_FOLDER"],
                filename
            )

            file.save(filepath)

            try:

                image = Image.open(filepath)

                result = make_prediction(image)

                return render_template(
                    "index.html",
                    prediction=result["label"],
                    image_url=url_for(
                        "static",
                        filename=f"uploads/{filename}"
                    ),
                )

            except Exception as e:

                flash(
                    f"Error processing image: {str(e)}"
                )

                return redirect(request.url)

        else:

            flash(
                "Invalid file format. Please upload a PNG image."
            )

            return redirect(request.url)

    return render_template("index.html")


# --------------------------------------------------
# Application Entry Point
# --------------------------------------------------

if __name__ == "__main__":
    app.run(
        host="127.0.0.1",
        port=5000,
        debug=True
    )