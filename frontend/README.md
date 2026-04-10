# Lazy Brew's Frontend

React + Vite frontend for Lazy Brew's coffee shop.

## Features

- 🛒 Shopping cart with local storage
- 📱 Responsive design
- 💬 WhatsApp order integration
- 🎨 Beautiful UI inspired by your design

## Setup

1. Install dependencies:
```bash
npm install
```

2. Update `.env` file with your backend URL and WhatsApp number:
```
VITE_API_URL=http://localhost:5000/api
VITE_WHATSAPP_NUMBER=919876543210
```

3. Start development server:
```bash
npm run dev
```

The app will run on http://localhost:3000

## Build for Production

```bash
npm run build
```

This creates optimized files in the `dist` folder.

## Deployment

This frontend can be deployed to:
- Vercel (recommended for Vite)
- Netlify
- GitHub Pages
- Cloudflare Pages

### Environment Variables for Production

Make sure to set these on your hosting platform:
- `VITE_API_URL` - Your backend API URL
- `VITE_WHATSAPP_NUMBER` - Your WhatsApp business number (with country code, e.g., 919876543210)

## How It Works

1. Users browse coffee flavors
2. Add items to cart
3. Enter WhatsApp number
4. Click "Order on WhatsApp" - opens WhatsApp with order details
5. Complete order via WhatsApp chat
