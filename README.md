# 📰 Daily News — React + TypeScript

A modular, scalable news feed application built with React and TypeScript. It supports search, category filtering, and pagination, with clean error handling and Tailwind v4 theming.

## 🚀 Tech Stack

- **React 18** + **TypeScript**
- **Tailwind CSS v4** with CSS tokens and layers
- **Axios** for API calls
- **React Router** for navigation
- **Custom Hooks** for search, filter, pagination
- **News API** (e.g., NewsAPI.org or NYT API)

## 📁 Folder Structure

```
src/ ├── components/ # Reusable UI components (Card, Loader, etc.)
     ├── hooks/ # Modular hook (useNews)
     ├── pages/ # Views (Home)
     ├── types/ # TypeScript types
     └── App.tsx # Root component
```

Code

## 🧩 Features

- 🔍 Search news by keyword
- 🗂️ Filter by category (e.g., tech, sports, politics)
- 📄 Paginate through articles
- ⚠️ Centralized error handling with async wrappers
- 🎨 Tailwind v4 theming with light/dark mode
- 🧵 Type-safe API integration with Axios

## 🔐 Environment Variables

Create a `.env` file:

```env
VITE_NEWS_API=your_api_key_here
VITE_NEWS_API_ENDPOINT=https://newsapi.org/v2
```

🛠️ Setup

```bash
npm install
npm run dev
```

## Deployment

```
Supports deployment to Vercel, Netlify, or any static host. Ensure .env is configured.
```
