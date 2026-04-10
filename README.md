# Lazy Brew's - Full Stack Coffee Shop Website

A complete e-commerce website for a cold brew coffee brand with cart functionality and WhatsApp order integration.

## Project Structure

```
lazy-brews-project/
├── backend/          # Node.js + Express API
│   ├── server.js
│   ├── package.json
│   ├── .env
│   └── README.md
│
└── frontend/         # React + Vite
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── context/
    │   ├── utils/
    │   ├── App.jsx
    │   └── main.jsx
    ├── package.json
    ├── .env
    └── README.md
```

## Features

✨ **Frontend:**
- Responsive design inspired by modern e-commerce
- Shopping cart with localStorage
- WhatsApp order integration
- Smooth animations and transitions
- Product catalog with beautiful cards

🔧 **Backend:**
- RESTful API with Express
- Product management
- CORS enabled for cross-origin requests

## Quick Start

### Backend Setup

```bash
cd backend
npm install
npm start
```

Server runs on http://localhost:5000

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

App runs on http://localhost:3000

## Configuration

### Backend (.env)
```
PORT=5000
NODE_ENV=development
```

### Frontend (.env)
```
VITE_API_URL=http://localhost:5000/api
VITE_WHATSAPP_NUMBER=919876543210
```

**Important:** Replace `919876543210` with your actual WhatsApp business number!

## How the Cart System Works

1. User browses products and adds to cart
2. Cart data is stored in localStorage (persists across sessions)
3. User can adjust quantities or remove items
4. When ready, user enters their WhatsApp number
5. Clicking "Order on WhatsApp" generates a formatted message with:
   - Item names and quantities
   - Individual prices
   - Total amount
6. User is redirected to WhatsApp with pre-filled order details
7. Order is completed via WhatsApp chat

## Deployment

### Backend Hosting Options:
- **Heroku** - Easy deployment with git push
- **Railway** - Modern platform with automatic deployments
- **Render** - Free tier available
- **DigitalOcean App Platform**

### Frontend Hosting Options:
- **Vercel** - Recommended for Vite projects (automatic deployments)
- **Netlify** - Great for static sites
- **Cloudflare Pages** - Fast global CDN

### Deployment Steps:

1. **Deploy Backend First:**
   - Push to your chosen platform
   - Set environment variables
   - Note the deployed URL (e.g., https://your-api.railway.app)

2. **Deploy Frontend:**
   - Update `VITE_API_URL` in environment variables to your backend URL
   - Set your `VITE_WHATSAPP_NUMBER`
   - Deploy to your chosen platform

## WhatsApp Number Format

The WhatsApp number should be in international format without '+':
- ✅ Correct: `919876543210` (India)
- ✅ Correct: `14155552671` (USA)
- ❌ Wrong: `+919876543210`
- ❌ Wrong: `9876543210` (missing country code)

## Customization

### Adding Products
Edit `backend/server.js` and add products to the `products` array:

```javascript
{
  id: 6,
  name: 'New Flavor',
  description: 'Description here',
  price: 99,
  image: 'https://image-url.com',
  tags: ['Tag1', 'Tag2'],
  featured: true
}
```

### Changing Colors
Edit `frontend/tailwind.config.js`:

```javascript
colors: {
  primary: '#7DD3E8',        // Main brand color
  'primary-dark': '#5BB8CE', // Hover state
  cream: '#F5F0E8',          // Background
  brown: '#3D2817',          // Text
}
```

## Tech Stack

**Frontend:**
- React 18
- Vite
- Tailwind CSS
- React Router DOM
- Lucide React (icons)

**Backend:**
- Node.js
- Express
- CORS

## Support

For issues or questions, check the README files in each folder:
- `backend/README.md` - Backend documentation
- `frontend/README.md` - Frontend documentation

## License

This project is ready for commercial use. Customize as needed for your coffee business!

---

Made with ☕ for Lazy Brew's
