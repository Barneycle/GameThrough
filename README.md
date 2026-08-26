# GameThrough

A playthrough tracker for **God of War (2018)**, **God of War Ragnarok**, and **Breath of the Wild**.

Chapter checklists and progress live here. Full walkthroughs stay on [IGN](https://www.ign.com). This started as Integrative Programming and Technologies 1.

## Features

- Accounts (sign up, sign in, log out)
- 47 chapter checklists across three games
- Progress saved to MongoDB Atlas
- Links out to IGN walkthroughs

## How to run

You need **two terminals**. Node 18+ (this project was run on Node 26).

### 1. Atlas

1. Open [MongoDB Atlas](https://cloud.mongodb.com) → **Network Access**
2. Add your current IP, or `0.0.0.0/0` (Allow access from anywhere)
3. Confirm the cluster is **running**, not paused
4. Put your connection string in `integrative-project-backend/.env` as `MONGODB_URI`

If Atlas blocks your IP, the app looks like it “is not saving.” That is Network Access, not the checklists.

### 2. Backend

```powershell
cd integrative-project-backend
copy .env.example .env
# Edit .env: MONGODB_URI, JWT_SECRET, PORT=3000
npm install
npm run dev
```

API: http://localhost:3000

### 3. Frontend

```powershell
cd integrative-project
npm install
npm run dev
```

App: http://localhost:3001

Optional: copy `integrative-project/.env.example` to `.env` if the API is not on port 3000.

### Demo

Open http://localhost:3001 → Sign up → Track progress → tick a chapter.

## Project layout

| Folder | What |
|---|---|
| `integrative-project` | React + Vite UI (port 3001) |
| `integrative-project-backend` | Express + MongoDB API (port 3000) |

## Environment

Backend (`integrative-project-backend/.env`):

- `MONGODB_URI` — Atlas connection string
- `JWT_SECRET` — long random string (do not use the default)
- `PORT` — `3000` (local only; Vercel sets this)
- `FRONTEND_ORIGIN` — optional. Live frontend URL after Vercel deploy

Frontend (`integrative-project/.env`, optional):

- `VITE_API_URL` — `http://localhost:3000`

Never commit `.env` or `atlas-credentials.env`.

## Deploy on Vercel

Vercel hosts this as **two projects** from the same GitHub repo. The React app is static. The Express API runs as a Vercel Function.

Atlas Network Access must already allow `0.0.0.0/0`. Do not put `MONGODB_URI` or `JWT_SECRET` in any `VITE_` variable.

### 1. Push this repo to GitHub

If git has no commit yet:

```powershell
cd C:\Users\Admin\Documents\Coding\GameThrough
git add .
git status
git commit -m "Prepare GameThrough for Vercel deploy."
```

Create a GitHub repo (empty, no README), then:

```powershell
git remote add origin https://github.com/YOUR_USER/YOUR_REPO.git
git branch -M main
git push -u origin main
```

### 2. Deploy the API first

1. Open [vercel.com](https://vercel.com) → **Add New** → **Project** → import the GitHub repo
2. **Root Directory** → `integrative-project-backend` (this is required)
3. Framework should be **Express** / **Other**. Do not set a Vite build command
4. **Environment Variables** (Production + Preview):

| Name | Value |
|---|---|
| `MONGODB_URI` | Same Atlas URI as local `.env` |
| `JWT_SECRET` | Same long secret as local `.env` |
| `FRONTEND_ORIGIN` | Leave empty for the first deploy |

5. Deploy. Copy the URL, for example `https://gamethrough-api.vercel.app`
6. Open `https://YOUR-API.vercel.app/api/health` — you should see `{"ok":true}`

### 3. Deploy the frontend

1. **Add New** → **Project** → import the **same** GitHub repo again
2. **Root Directory** → `integrative-project`
3. Framework: **Vite**. Build: `npm run build`. Output: `dist`
4. **Environment Variables** (must be available at **Build** time):

| Name | Value |
|---|---|
| `VITE_API_URL` | The API URL from step 2, no trailing slash |

5. Deploy. Copy the URL, for example `https://gamethrough.vercel.app`

### 4. Lock CORS to the live site

Back on the **API** project → Settings → Environment Variables:

- Set `FRONTEND_ORIGIN` to the frontend URL (`https://gamethrough.vercel.app`)
- Redeploy the API (Deployments → … → Redeploy)

### 5. Smoke test

1. Open the frontend URL
2. Sign up
3. Open a game, tick a checklist item, refresh — it should stay saved
4. Direct chapter URLs like `/gow` should load (SPA rewrite), not a Vercel 404

If sign-up fails, check the API deployment logs and Atlas (cluster running, `0.0.0.0/0`). If the UI loads but never saves, `VITE_API_URL` was missing at build time — set it and redeploy the frontend.

Changing `VITE_API_URL` later always requires a new frontend deploy. It is baked into the JS bundle.

## Team

Irish Kim Avila, Alvin Pulla, Mac John Frey Nebran, Alec Campana
