import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X, Coffee } from 'lucide-react';
import { useCart } from '../context/CartContext';
import CartSidebar from './CartSidebar';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  return (
    <>
      <header className="bg-cream/95 backdrop-blur-sm sticky top-0 z-40 border-b border-brown/10">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Coffee className="w-6 h-6 text-brown" />
              </div>
              <span className="text-2xl font-display font-bold text-brown">
                Lazy Brew's
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#how-it-works" className="text-brown/80 hover:text-brown transition-colors">
                How It Works
              </a>
              <a href="#flavours" className="text-brown/80 hover:text-brown transition-colors">
                Flavours
              </a>
              <a href="#why-us" className="text-brown/80 hover:text-brown transition-colors">
                Why Us
              </a>
              <button
                onClick={() => setCartOpen(true)}
                className="relative btn-primary"
              >
                <ShoppingCart className="w-5 h-5" />
                Cart
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-brown text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-bold">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-4 md:hidden">
              <button
                onClick={() => setCartOpen(true)}
                className="relative p-2"
              >
                <ShoppingCart className="w-6 h-6 text-brown" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-brown text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                    {cartCount}
                  </span>
                )}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-brown" />
                ) : (
                  <Menu className="w-6 h-6 text-brown" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-brown/10">
              <div className="flex flex-col gap-4">
                <a
                  href="#how-it-works"
                  className="text-brown/80 hover:text-brown transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  How It Works
                </a>
                <a
                  href="#flavours"
                  className="text-brown/80 hover:text-brown transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Flavours
                </a>
                <a
                  href="#why-us"
                  className="text-brown/80 hover:text-brown transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Why Us
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>

      <CartSidebar isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
};

export default Header;
