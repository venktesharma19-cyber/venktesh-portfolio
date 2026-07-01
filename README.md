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


## Push existing commit history

This ZIP already includes a real Git history with seven clean commits. After extracting:

```bash
cd venktesh-proofos-fullstack
git log --oneline
```

Then push to your GitHub repository:

```bash
git remote add origin https://github.com/YOUR_USERNAME/venktesh-portfolio.git
git push -u origin main
```

## Enable GitHub Pages

Use GitHub Actions as the Pages source:

```txt
Settings → Pages → Source → GitHub Actions
```

The workflow builds the React frontend and deploys it to GitHub Pages.

## Backend

The backend is included because this is a full-stack project. GitHub Pages cannot run Node/Express, so deploy the backend separately if you want real contact form/API mode. The frontend works in static mode even without backend deployment.
