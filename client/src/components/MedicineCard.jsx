import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Make sure to import the new decreaseCart action
import { addToCart, decreaseCart } from '../redux/slices/cartSlice'; 

const MedicineCard = ({ medicine }) => {
  const dispatch = useDispatch();

  // 1. Grab the whole cart array from Redux
  const cartItems = useSelector((state) => state.cart.cartItems);

  // 2. Check if THIS specific medicine is already in the cart
  const cartItem = cartItems.find((item) => item.id === medicine.id);
  
  // 3. If it is, get its quantity. If not, quantity is 0.
  const quantity = cartItem ? cartItem.cartQuantity : 0;

  const handleAddToCart = () => {
    dispatch(addToCart(medicine));
  };

  const handleDecreaseFromCart = () => {
    dispatch(decreaseCart(medicine));
  };

  return (
    <div className="bg-white rounded-3xl border border-gray-100 p-6 flex flex-col items-center shadow-sm group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      {/* Product Image Container */}
      <div className="h-44 w-full bg-gray-50 rounded-2xl flex items-center justify-center p-4 mb-5 overflow-hidden border border-gray-100/50">
        <img 
          src={medicine.image || 'https://via.placeholder.com/150'} 
          alt={medicine.name} 
          className="object-contain h-36 w-36 group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Product Details */}
      <div className="text-center w-full space-y-1.5 flex-1 flex flex-col">
        <p className="text-xs text-gray-500 font-medium uppercase tracking-widest">{medicine.category}</p>
        <h4 className="text-lg font-bold text-gray-900 truncate px-1">{medicine.name}</h4>
        
        <div className="flex items-center justify-center gap-2 mt-4 pt-4 border-t border-gray-100 w-full">
          <div>
            <span className="text-2xl font-extrabold text-green-600">₹{medicine.price}</span>
            {medicine.oldPrice && (
              <span className="text-sm text-gray-400 line-through ml-2 font-medium">₹{medicine.oldPrice}</span>
            )}
          </div>
        </div>
      </div>

      {/* --- CONDITIONAL UI: Counter vs Add Button --- */}
      <div className="w-full mt-6 h-12"> 
        {quantity > 0 ? (
          // The Counter UI (Shown if item is in cart)
          <div className="flex items-center justify-between bg-green-50 border border-green-200 rounded-2xl h-full p-1 shadow-inner">
            <button 
              onClick={handleDecreaseFromCart}
              className="w-10 h-full flex items-center justify-center bg-white text-green-600 rounded-xl font-bold shadow-sm hover:bg-red-50 hover:text-red-500 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M20 12H4"></path></svg>
            </button>
            
            <span className="font-bold text-gray-800 text-lg w-8 text-center">
              {quantity}
            </span>
            
            <button 
              onClick={handleAddToCart}
              className="w-10 h-full flex items-center justify-center bg-green-600 text-white rounded-xl font-bold shadow-sm hover:bg-green-700 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 4v16m8-8H4"></path></svg>
            </button>
          </div>
        ) : (
          // The Standard Button (Shown if item is NOT in cart)
          <button 
            onClick={handleAddToCart}
            className="w-full h-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center gap-2.5 rounded-2xl font-bold shadow-sm transition-colors hover:shadow-md active:scale-95"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add to Cart
          </button>
        )}
      </div>
      {/* --------------------------------------------- */}

    </div>
  );
};

export default MedicineCard;