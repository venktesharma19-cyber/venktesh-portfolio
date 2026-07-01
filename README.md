# Venktesh ProofOS Portfolio

A full-stack portfolio system designed for the 2026 job market. It presents Venktesh Sharma as a high-signal Full Stack Software Engineer through a modern frontend, resume-driven data layer, interactive skill dashboard, AI-era proof section, role matching, and a backend API for profile/contact workflows.

## Monorepo structure

```txt
venktesh-proofos-fullstack/
├── frontend/        # React + TypeScript + Vite portfolio UI
├── backend/         # Node + Express API
├── docs/            # deployment and commit notes
├── .github/         # GitHub Pages workflow
└── README.md
```

## Deployment model

GitHub Pages can host the frontend for free. It cannot run the backend. The backend can be deployed separately on Render, Railway, Fly.io, or another Node hosting service.

The frontend works in two modes:

1. **Static mode** for GitHub Pages using local resume data.
2. **API mode** when `VITE_API_BASE_URL` points to the deployed backend.

## Local development

```bash
cd backend
npm install
npm run dev
```

```bash
cd frontend
npm install
npm run dev
```

Frontend: http://localhost:5173  
Backend: http://localhost:8080
