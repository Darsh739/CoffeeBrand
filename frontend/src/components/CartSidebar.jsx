import React, { useState } from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartSidebar = ({ isOpen, onClose }) => {
  const { cart, updateQuantity, removeFromCart, getCartTotal, generateWhatsAppMessage } = useCart();
  const [whatsappNumber, setWhatsappNumber] = useState('');

  const handleCheckout = () => {
    if (!whatsappNumber || whatsappNumber.length < 10) {
      alert('Please enter a valid WhatsApp number (10 digits)');
      return;
    }

    // Add country code if not present
    const formattedNumber = whatsappNumber.startsWith('+91') 
      ? whatsappNumber.substring(3) 
      : whatsappNumber;
    
    const fullNumber = `91${formattedNumber}`;
    const whatsappUrl = generateWhatsAppMessage(fullNumber);
    
    if (whatsappUrl) {
      window.open(whatsappUrl, '_blank');
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40 transition-opacity"
        onClick={onClose}
      />

      {/* Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full sm:w-96 bg-white z-50 shadow-2xl transform transition-transform flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-brown/10">
          <h2 className="text-2xl font-display font-bold text-brown">Your Cart</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-cream rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-brown" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-20 h-20 text-brown/20 mb-4" />
              <p className="text-brown/60 text-lg">Your cart is empty</p>
              <p className="text-brown/40 text-sm mt-2">Add some delicious cold brew!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="bg-cream rounded-2xl p-4 flex gap-4"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-xl"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-brown">{item.name}</h3>
                    <p className="text-brown/60 text-sm">₹{item.price}/100ml</p>
                    
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-2 bg-white rounded-full p-1">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:bg-cream rounded-full transition-colors"
                        >
                          <Minus className="w-4 h-4 text-brown" />
                        </button>
                        <span className="w-8 text-center font-medium text-brown">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-cream rounded-full transition-colors"
                        >
                          <Plus className="w-4 h-4 text-brown" />
                        </button>
                      </div>
                      
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-2 hover:bg-red-50 rounded-full transition-colors"
                      >
                        <Trash2 className="w-4 h-4 text-red-500" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <p className="font-bold text-brown">
                      ₹{item.price * item.quantity}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="border-t border-brown/10 p-6 space-y-4 bg-cream/50">
            <div className="flex justify-between items-center text-lg">
              <span className="font-semibold text-brown">Total:</span>
              <span className="font-bold text-brown text-2xl">
                ₹{getCartTotal()}
              </span>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-brown mb-2">
                WhatsApp Number
              </label>
              <input
                type="tel"
                placeholder="Enter 10-digit number"
                value={whatsappNumber}
                onChange={(e) => setWhatsappNumber(e.target.value.replace(/\D/g, '').slice(0, 10))}
                className="w-full px-4 py-3 rounded-full border-2 border-brown/20 focus:border-primary outline-none transition-colors"
              />
            </div>
            
            <button
              onClick={handleCheckout}
              className="w-full btn-primary justify-center text-lg"
            >
              Order on WhatsApp
            </button>
            
            <p className="text-xs text-brown/60 text-center">
              Your order details will be sent via WhatsApp
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;
