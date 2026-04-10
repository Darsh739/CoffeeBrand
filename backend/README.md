# Lazy Brew's Backend

Node.js + Express backend for Lazy Brew's coffee shop.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file (already provided) or configure:
```
PORT=5000
NODE_ENV=development
```

3. Start the server:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

## API Endpoints

- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product
- `GET /api/health` - Health check

## Deployment

This backend can be deployed to:
- Heroku
- Railway
- Render
- Vercel (serverless)
- DigitalOcean App Platform

Make sure to set environment variables on your hosting platform.
