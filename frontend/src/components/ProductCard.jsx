import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="product-card group">
      {/* Product Image */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Tags */}
        {product.tags && product.tags.length > 0 && (
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {product.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-white px-3 py-1 rounded-full text-xs font-medium text-brown shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-6">
        <h3 className="text-2xl font-display font-semibold text-brown mb-2">
          {product.name}
        </h3>
        <p className="text-brown/70 mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Price and Add to Cart */}
        <div className="flex items-center justify-between mt-6">
          <div>
            <p className="text-3xl font-bold text-brown">
              ₹{product.price}
              <span className="text-sm font-normal text-brown/60">/100ml</span>
            </p>
          </div>
          <button
            onClick={handleAddToCart}
            className="btn-secondary"
          >
            <ShoppingCart className="w-5 h-5" />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
