import React from 'react';

const MedicineCard = ({ medicine }) => {
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
        
        {/* Price and Action Row */}
        <div className="flex items-center justify-center gap-2 mt-4 pt-4 border-t border-gray-100 w-full">
          <div>
            <span className="text-2xl font-extrabold text-green-600">₹{medicine.price}</span>
            {medicine.oldPrice && (
              <span className="text-sm text-gray-400 line-through ml-2 font-medium">₹{medicine.oldPrice}</span>
            )}
          </div>
        </div>
      </div>

      {/* Modern Add to Cart Button */}
      <button className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white flex items-center justify-center gap-2.5 py-3.5 rounded-2xl font-bold shadow-sm transition-colors hover:shadow-md">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
        Add to Cart
      </button>
    </div>
  );
};

export default MedicineCard;