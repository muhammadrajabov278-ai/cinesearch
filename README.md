# CineSearch

A responsive movie and TV discovery app built with Next.js App Router, TypeScript, and TMDB. Includes Home, Search, Discover, Watchlist, Favorites, title detail pages, trailer modal, genre filters, sorting, hover states, and localStorage-based saved lists.

## 1. Requirements
- Node.js 20.9 or newer
- A free TMDB API key: https://www.themoviedb.org/settings/api

## 2. Install and run
Open this folder in VS Code, then run in the terminal:

```bash
npm install
```

Copy `.env.example` to `.env.local`, then open `.env.local` and replace the placeholder with your TMDB API key:

```env
NEXT_PUBLIC_TMDB_API_KEY=your_actual_tmdb_api_key
```

Then start the app:

```bash
npm run dev
```

Open http://localhost:3000.

## 3. Pages
- `/` — Home, trending, popular, top-rated, now playing, action and comedy sections
- `/search` — live search for movies and TV shows
- `/discover` — browse, filter by genre, choose Movies/TV Shows and sort
- `/watchlist` — locally saved watchlist
- `/favorites` — locally saved favorites
- `/movies/ID?type=movie` or `/movies/ID?type=tv` — details, cast, and YouTube trailer when available

## 4. Deploy to Vercel
Push this project to GitHub, import the repository into Vercel, and add `NEXT_PUBLIC_TMDB_API_KEY` in Project Settings → Environment Variables. Redeploy after adding the variable.

## Notes
- Watchlist and favorites are saved in this browser's localStorage; they are not synced between devices.
- TMDB API and artwork are subject to TMDB's terms. This product uses the TMDB API but is not endorsed or certified by TMDB.
- This is a fresh implementation based on the reference site's visible features, not the original site's source code.
