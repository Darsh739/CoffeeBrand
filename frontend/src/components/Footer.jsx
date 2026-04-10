import React from 'react';
import { Coffee, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brown text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <Coffee className="w-6 h-6 text-brown" />
              </div>
              <span className="text-2xl font-display font-bold">
                Lazy Brew's
              </span>
            </div>
            <p className="text-cream/80 leading-relaxed">
              Cold brew concentrate that mixes 1:1 with water or milk. 
              Perfect iced coffee, ready in minutes.
            </p>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="text-xl font-display font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <a href="#flavours" className="text-cream/80 hover:text-primary transition-colors">
                  Classic Cold Coffee
                </a>
              </li>
              <li>
                <a href="#flavours" className="text-cream/80 hover:text-primary transition-colors">
                  Hazelnut Flavor
                </a>
              </li>
              <li>
                <a href="#flavours" className="text-cream/80 hover:text-primary transition-colors">
                  Vanilla Cold Coffee
                </a>
              </li>
              <li>
                <a href="#flavours" className="text-cream/80 hover:text-primary transition-colors">
                  Variety Pack
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-xl font-display font-semibold mb-4">Company</h3>
            <ul className="space-y-2 mb-6">
              <li>
                <a href="#why-us" className="text-cream/80 hover:text-primary transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="text-cream/80 hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-cream/80 hover:text-primary transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-cream/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-cream/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-cream/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/20 mt-8 pt-8 text-center text-cream/60">
          <p>&copy; 2024 Lazy Brew's. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
