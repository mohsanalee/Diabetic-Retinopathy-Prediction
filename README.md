RetinaCare AI — Diabetic Retinopathy Screening System

Status: Backend API Verified + UI/Architecture Locked + Ready for Phase 1 Frontend Integration

RetinaCare AI is an AI-assisted diabetic retinopathy screening application that analyzes retinal/fundus images and classifies them into five diabetic-retinopathy categories.

Current Verified Baseline

Flask backend working

DR_version1.h5 loads successfully

Five-class prediction implemented

/api/health verified

/api/predict verified with a real retinal image

Real prediction and all five probabilities returned

Python 3.10.10

TensorFlow 2.13.0

NumPy 1.24.3

Flask 3.1.3

Pillow 12.2.0

Backend/frontend separation completed

Public GitHub repository updated

Professional RetinaCare AI UI generated and reviewed

UI/UX direction locked

Full-stack architecture locked

Verified API Result

A real test of POST /api/predict returned:

Class: NoDr
Label: No Diabetic Retinopathy
Confidence: 0.9938499927520752
Success: true

The final frontend must always display live backend data, never hard-coded or fabricated predictions.

Locked Architecture

Diabetic perdict_Retinopathy/
│
├── backend/
│   ├── app.py
│   ├── DR_version1.h5
│   ├── README.md
│   ├── requirement.txt
│   ├── TOTAL LIBRARIES.txt
│   ├── static/
│   ├── templates/
│   └── venv/              # local only
│
├── frontend/
│   ├── app/
│   ├── components/
│   ├── lib/
│   ├── public/
│   ├── package.json
│   ├── pnpm-lock.yaml
│   └── ...
│
└── .gitignore

Backend: Flask + TensorFlow + DR_version1.h5

Frontend: Next.js + React + TypeScript + Tailwind CSS

The UI and architecture are LOCKED. Do not restart or redesign them unless a future requirement explicitly requires it.

Backend API

Health

GET /api/health

Verified response:

{
  "status": "ok",
  "service": "RetinaCare AI",
  "model_loaded": true
}

Prediction

POST /api/predict

Request:

multipart/form-data
file=<retinal image>

Response contains:

{
  "success": true,
  "filename": "...",
  "image_url": "...",
  "prediction": {
    "class": "...",
    "label": "...",
    "confidence": 0.0,
    "probabilities": {}
  }
}

Model classes

The existing model mapping is preserved:

Mild dr
moderate
NoDr
severe
proliferative

Professional frontend labels:

Mild dr          → Mild Diabetic Retinopathy
moderate         → Moderate Diabetic Retinopathy
NoDr             → No Diabetic Retinopathy
severe           → Severe Diabetic Retinopathy
proliferative    → Proliferative Diabetic Retinopathy

Do not reorder the model mapping without verifying the original training pipeline.

Locked UI Direction

The approved visual direction is:

Minimal

Professional

Medical

Modern

Calm

Trustworthy

Premium health-tech SaaS

Spacious

Responsive

Palette:

Medical green / emerald

Muted teal

Warm white / light gray

White surfaces

Charcoal text

Muted gray

Very light borders

Avoid neon, gaming UI, excessive gradients, purple-heavy AI styling, and excessive glassmorphism.

Preferred typography direction:

Inter

Geist

Manrope

Plus Jakarta Sans

Frontend Status

The v0 frontend is currently a UI prototype.

Visually implemented:

Professional landing/dashboard direction

Medical palette

Responsive layout direction

Navigation/sidebar

Retinal upload workspace

Drag-and-drop

Image preview

Loading/error states

Professional result-card design

History UI direction

Medical disclaimer direction

Guest-mode UI concept

Google-login UI concept

Not yet integrated:

Real Flask prediction request

Real prediction display

Real confidence/probabilities

Real history

Google authentication

Guest account state

About section content

Three real team members

How It Works/Education

Production security

Deployment

The v0 prediction interaction currently uses demo behavior. It must be replaced with the real Flask API call.

Product Requirements

Authentication

Continue as Guest

Continue with Google

Authenticated user state

Persistent features for signed-in users

Screening

Upload retinal/fundus image

Preview

Analyze Retina

Loading state

Error state

Real five-class prediction

Real confidence/probabilities when supplied by backend

Professional result explanation

Medical disclaimer

About

Explain:

RetinaCare AI

Project purpose

AI-assisted retinal screening

Five-class classification

Research/screening-support nature

Medical limitations

Team

Exactly three team members, each with:

Name

Role

Profile image/avatar

Short biography

Optional links

Real names/details will be supplied later.

History

Persistent screening history may include:

Date

Image thumbnail

Prediction

Confidence/probabilities

View result

Database implementation depends on final project requirements.

Important Rules

Do not redesign the locked UI without a real requirement.

Do not replace the working ML model.

Do not casually upgrade verified TensorFlow/NumPy versions.

Never fabricate predictions or confidence values.

Flask is the source of truth for ML inference.

Next.js is responsible for presentation and interaction.

Keep backend and frontend separated.

Test each integration step before proceeding.

Do not commit secrets, virtual environments, build folders, or dependency caches.

Do not present AI output as a definitive clinical diagnosis.

Required medical disclaimer direction:

The AI result is intended for screening/research support and does not replace examination or diagnosis by a qualified medical professional.

Phase Tracking

Phase 0 — Baseline and Architecture

COMPLETE

Completed:

Backend inspected and preserved

Model verified

API endpoints implemented

Health endpoint verified

Real prediction endpoint verified

v0 frontend generated

UI reviewed and locked

Backend/frontend architecture separated

GitHub structure updated

Gitignore cleaned

Phase 1 — Frontend ↔ Backend Integration

NEXT

Tasks:

Verify Node.js

Verify npm/pnpm

Install frontend dependencies using the existing package manager

Start Next.js locally

Verify locked UI

Locate demo prediction logic

Replace demo behavior with POST /api/predict

Send the selected image to Flask

Parse the real JSON response

Display real prediction

Display real confidence

Display real probabilities

Test multiple retinal images

Test invalid upload

Test backend failure

Commit Phase 1

Target flow:

Next.js
   │
   │ POST multipart/form-data
   ▼
Flask :5000
   │
   ▼
/api/predict
   │
   ▼
DR_version1.h5
   │
   ▼
Real JSON
   │
   ▼
RetinaCare AI Result UI

Phase 2 — Authentication

PENDING

Guest mode

Google login

User state

Account UI

Phase 3 — Data / History

PENDING

Implement database and persistent history only if required.

Phase 4 — Production Hardening

PENDING

Security

Upload restrictions

CORS tightening

Environment variables

Error handling

Storage cleanup

Production server

Deployment configuration

Phase 5 — Final Testing

PENDING

Backend/API testing

Frontend testing

Five-class mapping testing

Authentication testing

History testing

Error states

Responsive testing

Security testing

End-to-end testing

Phase 6 — Deployment and Documentation

PENDING

Production deployment

Final documentation

Installation instructions

Environment configuration

API documentation

Final presentation/demo preparation

Resume Point for the Next Session

Start from: RetinaCare AI — Phase 1: Frontend ↔ Backend Integration

Verified:

Backend:
Python 3.10.10
Flask 3.1.3
TensorFlow 2.13.0
NumPy 1.24.3
Pillow 12.2.0

Model:
backend/DR_version1.h5
Working

API:
GET  /api/health     → verified
POST /api/predict    → verified

Frontend:
frontend/
Next.js + React + TypeScript + Tailwind
UI/UX LOCKED
Prediction integration NOT yet connected

Git:
Public repository
Backend/frontend architecture committed

Next immediate commands:

cd frontend
node --version
npm --version
pnpm --version

Do not install dependencies or modify frontend code until the versions are verified.

Final Architecture Decision

┌─────────────────────────────────────────────┐
│              RetinaCare AI                  │
├──────────────────────┬──────────────────────┤
│      FRONTEND        │       BACKEND        │
│                      │                      │
│ Next.js              │ Flask                │
│ React                │ TensorFlow           │
│ TypeScript           │ DR_version1.h5       │
│ Tailwind CSS         │ REST API             │
│ Professional UI      │ ML inference         │
│                      │                      │
└──────────┬───────────┴──────────┬───────────┘
           │                      │
           └──── HTTP API ────────┘

The next objective is strictly to connect the locked RetinaCare AI frontend to the already-verified Flask diabetic-retinopathy prediction API.