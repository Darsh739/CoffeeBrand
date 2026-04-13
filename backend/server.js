const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Product data
const products = [
  {
    id: 1,
    name: 'Classic Cold Coffee',
    description: 'Our signature blend. Bold, smooth, and perfectly balanced for the purist.',
    price: 59,
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400',
    tags: ['Zero Preservatives', 'Zero Sugar'],
    featured: true
  },
  {
    id: 2,
    name: 'Hazelnut Cold Coffee',
    description: 'Rich roasted hazelnut notes perfectly complement our smooth cold brew.',
    price: 89,
    image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=400',
    tags: ['Natural Flavor'],
    featured: true
  },
  {
    id: 3,
    name: 'Vanilla Cold Coffee',
    description: 'Smooth vanilla essence meets bold coffee for a delightful morning ritual.',
    price: 79,
    image: 'https://images.unsplash.com/photo-1578374173703-26bf93fb87b7?w=400',
    tags: ['Fan Favorite'],
    featured: true
  },
  {
    id: 4,
    name: 'Caramel Cold Coffee',
    description: 'Sweet caramel swirls dancing with rich coffee notes.',
    price: 89,
    image: 'https://images.unsplash.com/photo-1593450001028-6d04b90fc0a0?w=400',
    tags: ['Sweet Treat'],
    featured: false
  },
  {
    id: 5,
    name: 'Mocha Cold Coffee',
    description: 'Chocolate meets coffee in this indulgent blend.',
    price: 95,
    image: 'https://images.unsplash.com/photo-1542990253-a781e04c0082?w=400',
    tags: ['Chocolate Lover'],
    featured: false
  }
];

// Routes
app.get('/api/products', (req, res) => {
  res.json({ success: true, products });
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (product) {
    res.json({ success: true, product });
  } else {
    res.status(404).json({ success: false, message: 'Product not found' });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ success: true, message: 'Server is running!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});