# Backend Deployment on Render

1. Push this repo to GitHub.
2. Create a new Render Web Service.
3. Select this repository.
4. Set root directory:

```txt
backend
```

5. Build command:

```bash
npm install
```

6. Start command:

```bash
npm start
```

7. Add environment variables:

```txt
PORT=8080
FRONTEND_ORIGIN=https://YOUR_USERNAME.github.io
CONTACT_RECEIVER_EMAIL=venktesharma.19@gmail.com
```

8. Copy the Render URL and use it as `VITE_API_BASE_URL` for the frontend build.
