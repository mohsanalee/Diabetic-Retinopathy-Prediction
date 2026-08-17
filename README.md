# RetinaCare AI --- Diabetic Retinopathy Screening System

> **Project Status: UI & Architecture Locked --- Ready for Integration
> and Final Development**

RetinaCare AI is an AI-assisted diabetic retinopathy screening
application designed to analyze retinal/fundus images and classify them
into five diabetic-retinopathy severity categories.

The project combines an existing, tested Flask + deep-learning
prediction backend with a newly designed Next.js/React
medical-health-tech frontend.

------------------------------------------------------------------------

## 1. Current Project Status

The project has now reached the **baseline-complete /
architecture-locked stage**.

### Completed and Locked

-   [x] Existing diabetic-retinopathy ML model available
-   [x] Existing Flask backend implemented
-   [x] Backend image-upload and prediction flow tested successfully
-   [x] Five-class diabetic-retinopathy prediction implemented
-   [x] Git repository initialized
-   [x] Project pushed successfully to GitHub
-   [x] Public GitHub repository created
-   [x] `.gitignore` configured
-   [x] Python virtual environment excluded from Git
-   [x] Existing backend project preserved as the working ML source
-   [x] New professional RetinaCare AI frontend generated
-   [x] Frontend visual design reviewed and approved
-   [x] Frontend architecture/design direction locked
-   [x] Medical/health-tech color palette selected
-   [x] Typography and visual language selected
-   [x] Dashboard direction selected
-   [x] Retinal image upload UI designed
-   [x] Professional result UI designed
-   [x] Guest-mode concept defined
-   [x] Google-login concept defined
-   [x] About section concept defined
-   [x] Three-member team section concept defined
-   [x] How-It-Works section concept defined
-   [x] Medical disclaimer concept defined
-   [x] Responsive UI direction defined

### Important

The frontend generated from v0 is currently a **UI prototype**. Its
upload/result interaction contains demo behavior and is **not yet
connected to the real Flask prediction API**.

The existing Flask backend remains the source of truth for ML inference.

------------------------------------------------------------------------

# 2. Final Product Vision

The final application will provide this user journey:

``` text
Landing Page
      ↓
Continue as Guest / Continue with Google
      ↓
Professional Dashboard
      ↓
New Retinal Screening
      ↓
Upload Retinal / Fundus Image
      ↓
Image Preview
      ↓
Analyze Retina
      ↓
Flask Backend
      ↓
Deep-Learning Model
      ↓
Five-Class Prediction
      ↓
Professional Results Page
      ↓
Educational Interpretation
      ↓
Screening History (authenticated users)
```

The product should feel like a **modern medical AI / health-tech SaaS
platform**, not a basic student ML interface.

------------------------------------------------------------------------

# 3. Locked UI Design Direction

The UI is now **locked** and should not be redesigned unless a future
requirement explicitly requires a change.

## Visual Style

The approved design direction is:

-   Minimal
-   Professional
-   Medical
-   Modern
-   Calm
-   Trustworthy
-   Premium SaaS-inspired
-   Spacious
-   Responsive

The visual language is inspired by the provided reference designs, but
the application uses its own RetinaCare AI identity and medical context.

## Color Direction

Primary palette:

-   Medical green / emerald
-   Muted teal
-   Warm white / very light gray
-   White surfaces
-   Charcoal text
-   Muted gray secondary text
-   Very light borders

Avoid:

-   Neon colors
-   Gaming-style interfaces
-   Excessive red/black combinations
-   Purple-heavy AI gradients
-   Excessive cyan/blue gradients
-   Excessive glassmorphism
-   Overly decorative visual effects

## Typography

Preferred modern sans-serif typography:

-   Inter
-   Geist
-   Manrope
-   Plus Jakarta Sans

The final UI should prioritize readability and a clear medical-product
hierarchy.

------------------------------------------------------------------------

# 4. Locked Frontend Architecture

The approved frontend is based on:

``` text
Next.js
React
TypeScript
Tailwind CSS
Lucide Icons
```

The generated frontend currently contains:

``` text
app/
├── globals.css
├── layout.tsx
└── page.tsx

components/
└── ui/
    └── button.tsx

lib/
└── utils.ts

public/
├── retina-scan.png
├── icon.svg
└── supporting assets

components.json
next.config.mjs
package.json
postcss.config.mjs
pnpm-lock.yaml
tsconfig.json
```

This generated structure is a starting point. During integration, the
frontend may be separated into reusable feature components and
application routes without changing the approved visual design.

------------------------------------------------------------------------

# 5. Existing Backend Architecture

The existing working backend is Flask-based.

Current core flow:

``` text
User Image
    ↓
Flask Application
    ↓
Image Validation
    ↓
Image Resize / Preprocessing
    ↓
DR_version1.h5
    ↓
Deep-Learning Prediction
    ↓
Five-Class Classification
    ↓
Result
```

The trained model currently available is:

``` text
DR_version1.h5
```

The model file is approximately 10.6 MB and is small enough for normal
GitHub repository storage.

------------------------------------------------------------------------

# 6. Current Prediction Classes

The existing backend supports five diabetic-retinopathy classes:

1.  **No Diabetic Retinopathy**
2.  **Mild Diabetic Retinopathy**
3.  **Moderate Diabetic Retinopathy**
4.  **Severe Diabetic Retinopathy**
5.  **Proliferative Diabetic Retinopathy**

The final frontend must use the **real backend prediction** rather than
hard-coded or simulated results.

------------------------------------------------------------------------

# 7. Existing Backend Files

The original backend project currently contains the main application
files:

``` text
app.py
DR_version1.h5
requirement.txt
TOTAL LIBRARIES.txt
templates/
static/
```

The backend has already been tested manually and confirmed to return
prediction results.

The existing backend must be preserved while the new frontend is
integrated.

------------------------------------------------------------------------

# 8. Locked Frontend Features

The final frontend direction includes:

## Landing Page

-   RetinaCare AI branding
-   Navigation
-   Hero section
-   Medical/retinal visual
-   Start Screening CTA
-   How It Works CTA
-   Guest access
-   Google authentication entry point

## Authentication Entry

Users will eventually have:

-   Continue as Guest
-   Continue with Google

Guest access must not require account creation before basic screening.

------------------------------------------------------------------------

## Dashboard

Planned dashboard areas:

-   Overview
-   New Screening
-   Screening History
-   Education / How It Works
-   About
-   Team
-   Settings / account area
-   Help

The dashboard must remain clean and medical-product oriented.

------------------------------------------------------------------------

## New Screening

The screening workspace will provide:

-   Drag-and-drop upload
-   Image selection
-   Image preview
-   File information
-   Remove image
-   Analyze Retina button
-   Loading/analyzing state
-   Validation errors
-   Backend error handling

------------------------------------------------------------------------

## Results

The final result screen will display:

-   Uploaded retinal image
-   AI screening result
-   Detected diabetic-retinopathy class
-   Severity indicator
-   Confidence/probabilities only when returned by the real backend
-   Educational interpretation
-   Recommended professional follow-up wording
-   Medical disclaimer

No fake confidence values or fabricated medical statistics are
permitted.

------------------------------------------------------------------------

# 9. History

Authenticated users are planned to have screening history containing
information such as:

-   Screening date
-   Image thumbnail
-   Prediction
-   Confidence/probabilities when available
-   Result status
-   View result

Guest users may have limited or session-only access depending on the
final authentication/database implementation.

------------------------------------------------------------------------

# 10. About Section

The final application will include an About section explaining:

-   What RetinaCare AI is
-   Project purpose
-   AI-assisted retinal screening
-   Five-class classification
-   Research/screening-support nature of the system
-   Medical limitations

The About section must avoid unsupported medical claims.

------------------------------------------------------------------------

# 11. Team Section

The application will contain exactly **three team-member profile
cards**.

Each profile will support:

-   Profile image/avatar
-   Name
-   Role
-   Short biography
-   Optional contact/social links

Names and professional details will be supplied later and must not be
invented.

------------------------------------------------------------------------

# 12. How It Works

The planned workflow explanation is:

### Step 01 --- Upload

Upload a retinal/fundus image.

### Step 02 --- AI Analysis

The deep-learning model processes the image.

### Step 03 --- Classification

The model classifies the image into one of five diabetic-retinopathy
categories.

### Step 04 --- Review Result

The application presents the screening result in a clear professional
format.

------------------------------------------------------------------------

# 13. Medical Disclaimer

The final application must clearly communicate that:

> The AI result is intended for screening/research support and does not
> replace examination or diagnosis by a qualified medical professional.

The system should not present itself as a definitive clinical diagnostic
system unless the project is formally validated and approved for such
use.

------------------------------------------------------------------------

# 14. Current Limitations / Pending Work

The following items are **not yet completed** and must be handled during
the next development phases:

-   [ ] Connect Next.js frontend to Flask backend
-   [ ] Replace demo upload delay with real API request
-   [ ] Connect real model prediction to result UI
-   [ ] Verify frontend class labels against backend output
-   [ ] Add real confidence/probability display if supported by model
    output
-   [ ] Implement Google authentication
-   [ ] Implement guest-user state
-   [ ] Decide and implement persistent user/database architecture if
    required
-   [ ] Implement real screening history
-   [ ] Replace all demo dashboard statistics with real data
-   [ ] Replace demo history records with real records
-   [ ] Add About page/section
-   [ ] Add three real team members
-   [ ] Add How It Works/Education content
-   [ ] Add robust API error handling
-   [ ] Improve upload validation
-   [ ] Review image-storage/cleanup strategy
-   [ ] Move secrets/configuration to environment variables
-   [ ] Review CORS configuration
-   [ ] Verify model preprocessing against the original training
    pipeline
-   [ ] Perform frontend/backend integration testing
-   [ ] Perform security testing
-   [ ] Perform responsive/mobile testing
-   [ ] Prepare production deployment
-   [ ] Final documentation and presentation preparation

------------------------------------------------------------------------

# 15. Important Integration Rule

Do **not** replace the existing working ML backend simply to fit the new
frontend.

The preferred architecture is:

``` text
                 RetinaCare AI
                       │
                       ▼
              Next.js / React UI
                       │
                  HTTP API
                       │
                       ▼
                Flask Backend
                       │
              Image Preprocessing
                       │
                       ▼
                 DR_version1.h5
                       │
                       ▼
               Model Prediction
                       │
                       ▼
                JSON Response
                       │
                       ▼
             Professional Results
```

The frontend and backend should remain logically separated.

------------------------------------------------------------------------

# 16. Data and Security Rules

The final project should follow these rules:

-   Never commit `.env` files.
-   Never expose secret credentials in frontend code.
-   Do not commit the Python virtual environment.
-   Validate uploaded file types.
-   Validate uploaded image size.
-   Avoid permanent storage of unnecessary patient/retinal images.
-   Do not expose private user data.
-   Do not fabricate medical results.
-   Do not fabricate model confidence.
-   Do not present AI output as a definitive diagnosis.
-   Use environment variables for production secrets/configuration.

------------------------------------------------------------------------

# 17. GitHub Status

The original backend project has been successfully initialized as a Git
repository and pushed to the public GitHub repository:

**Diabetic-Retinopathy-Prediction**

The Git repository excludes:

``` text
venv/
.vscode/
__pycache__/
*.pyc
.env
.env.*
```

The trained model is currently included because its size is
approximately 10.6 MB.

The GitHub repository serves as the current project
backup/version-control baseline.

------------------------------------------------------------------------

# 18. Development Strategy From This Point

The project should now move forward in controlled phases.

## Phase 1 --- Frontend + Backend Integration

Priority:

``` text
Next.js
   ↓
Flask API
   ↓
DR_version1.h5
   ↓
Real prediction
   ↓
Result UI
```

## Phase 2 --- Authentication

-   Guest mode
-   Google login
-   User state
-   Protected account functionality

## Phase 3 --- Data Layer

Only implement the database if the final requirements require:

-   User profiles
-   Screening history
-   Saved reports
-   Persistent application data

## Phase 4 --- Production Features

-   Security
-   Validation
-   Error handling
-   Storage management
-   Logging
-   Configuration management

## Phase 5 --- Testing

-   Backend testing
-   API testing
-   Frontend testing
-   Authentication testing
-   Upload testing
-   Model-output testing
-   Responsive testing
-   Security testing

## Phase 6 --- Deployment

Prepare the complete system for deployment only after integration and
testing are complete.

------------------------------------------------------------------------

# 19. Architecture Lock

### UI

**LOCKED**

The current RetinaCare AI visual direction is approved.

### Frontend technology

**LOCKED**

Next.js + React + TypeScript + Tailwind CSS.

### ML backend

**LOCKED**

Existing Flask backend + `DR_version1.h5`.

### Core prediction workflow

**LOCKED**

Retinal image → preprocessing → model → five-class prediction.

### Product identity

**LOCKED**

RetinaCare AI.

### Next major task

**NOT UI REDESIGN**

The next major task is:

> **Integrate the new RetinaCare AI frontend with the existing working
> Flask diabetic-retinopathy prediction backend.**

------------------------------------------------------------------------

# 20. Project Completion Definition

The project will be considered fully complete when:

-   [ ] Frontend and backend are integrated
-   [ ] Real retinal images reach the Flask API
-   [ ] Real model predictions appear in the new UI
-   [ ] Five classes are correctly mapped
-   [ ] Result presentation is professional and accurate
-   [ ] Authentication works
-   [ ] Guest mode works
-   [ ] History works if required
-   [ ] About/team/how-it-works sections are complete
-   [ ] No demo/fake statistics remain
-   [ ] Security requirements are addressed
-   [ ] Responsive design is verified
-   [ ] Full application testing passes
-   [ ] Deployment is completed
-   [ ] Final documentation is complete

------------------------------------------------------------------------

## Final Baseline

**RetinaCare AI is now considered to have a locked UI/UX direction and a
working ML/backend baseline.**

The project should proceed from this point by **integration and feature
implementation**, not by restarting the architecture or redesigning the
frontend.

**Next milestone: Connect the RetinaCare AI Next.js frontend to the
existing Flask diabetic-retinopathy prediction API.**
