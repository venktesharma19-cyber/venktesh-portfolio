# GitHub Pages Deployment

## 1. Push this repo to GitHub

```bash
git remote add origin https://github.com/YOUR_USERNAME/venktesh-portfolio.git
git push -u origin main
```

## 2. Enable GitHub Pages using Actions

Go to:

```txt
Repository Settings → Pages → Build and deployment → Source → GitHub Actions
```

The workflow `.github/workflows/deploy-pages.yml` builds `frontend/` and deploys `frontend/dist`.

## 3. Live URL

```txt
https://YOUR_USERNAME.github.io/venktesh-portfolio/
```

## 4. Backend note

GitHub Pages only hosts static frontend files. Deploy `backend/` separately on Render, Railway, Fly.io, or another Node service. Then set this repository secret or frontend environment variable before building:

```txt
VITE_API_BASE_URL=https://your-backend-url
```

Without this variable, the frontend still works in static mode, but the contact form is demo-only.
