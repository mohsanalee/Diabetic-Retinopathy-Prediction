
from flask import Flask, request, render_template, flash, redirect, url_for
from werkzeug.utils import secure_filename
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.image import img_to_array
import numpy as np
import os
from PIL import Image

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = 'static/uploads'
app.config['ALLOWED_EXTENSIONS'] = {'png'}

# Set a secret key for the session
app.secret_key = 'your_secret_key_here'

# Load your model
model = load_model('DR_version1.h5')

# Define the labels
labels = ["Mild dr", "moderate", "NoDr", "severe", "proliferative"]

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in app.config['ALLOWED_EXTENSIONS']

def prepare_image(image, target_size):
    if image.mode != "RGB":
        image = image.convert("RGB")
    image = image.resize(target_size)
    image = img_to_array(image)
    image = np.expand_dims(image, axis=0)
    return image

@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        if 'file' not in request.files:
            flash('No file part')
            return redirect(request.url)
        
        file = request.files["file"]
        
        if file.filename == '':
            flash('No selected file')
            return redirect(request.url)
        
        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
            file.save(filepath)

            try:
                # Process the image for prediction
                image = Image.open(filepath)
                processed_image = prepare_image(image, target_size=(224, 224))

                # Make prediction
                prediction = model.predict(processed_image)
                predicted_label = labels[np.argmax(prediction)]

                return render_template("index.html", prediction=predicted_label, image_url=url_for('static', filename='uploads/' + filename))
            
            except Exception as e:
                flash(f'Error processing image: {str(e)}')
                return redirect(request.url)
        
        else:
            flash('Invalid file format. Please upload a PNG image.')
            return redirect(request.url)

    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True)
