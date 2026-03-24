import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, decreaseCart } from '../redux/slices/cartSlice';

const CartDrawer = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  // Calculate the total price dynamically
  const cartTotalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.cartQuantity,
    0
  );

  // If the drawer is closed, don't render anything
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden font-sans">
      {/* Dark Backdrop */}
      <div 
        className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Slide-out Panel */}
      <div className="absolute inset-y-0 right-0 max-w-md w-full flex">
        <div className="h-full w-full bg-white shadow-2xl flex flex-col animate-slide-in-right">
          
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
            <h2 className="text-xl font-extrabold text-gray-800">Your Cart</h2>
            <button 
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Cart Items (Scrollable) */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center opacity-60">
                <svg className="w-20 h-20 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                <p className="text-gray-500 font-medium">Your cart is empty</p>
                <p className="text-sm text-gray-400 mt-1">Add some medicines to get started.</p>
              </div>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="flex items-center gap-4 bg-white border border-gray-100 p-3 rounded-2xl shadow-sm">
                  {/* Item Image */}
                  <div className="h-20 w-20 bg-gray-50 rounded-xl p-2 flex-shrink-0">
                    <img src={item.image} alt={item.name} className="h-full w-full object-contain" />
                  </div>
                  
                  {/* Item Details */}
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-bold text-gray-900 truncate">{item.name}</h4>
                    <p className="text-xs text-gray-500">{item.category}</p>
                    <p className="text-lg font-extrabold text-green-600 mt-1">₹{item.price}</p>
                  </div>

                  {/* Quantity Counter (Mini Version) */}
                  <div className="flex items-center bg-green-50 rounded-lg border border-green-100 p-0.5">
                    <button 
                      onClick={() => dispatch(decreaseCart(item))}
                      className="w-8 h-8 flex items-center justify-center text-green-600 hover:bg-white rounded-md shadow-sm transition-all"
                    >
                      -
                    </button>
                    <span className="w-6 text-center text-sm font-bold text-gray-800">{item.cartQuantity}</span>
                    <button 
                      onClick={() => dispatch(addToCart(item))}
                      className="w-8 h-8 flex items-center justify-center text-green-600 hover:bg-white rounded-md shadow-sm transition-all"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer (Total & Checkout) */}
          {cartItems.length > 0 && (
            <div className="border-t border-gray-100 p-6 bg-gray-50">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-500 font-medium">Subtotal</span>
                <span className="text-2xl font-extrabold text-gray-900">₹{cartTotalAmount}</span>
              </div>
              <p className="text-xs text-gray-400 mb-4">Delivery charges and taxes calculated at checkout.</p>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-2xl shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2">
                Proceed to Checkout
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
            </div>
          )}
          
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;