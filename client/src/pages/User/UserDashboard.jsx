import React from "react";
// --- REDUX IMPORTS ADDED HERE ---
import { useSelector } from "react-redux";
// --------------------------------
import MedicineCard from "../../components/MedicineCard";
import Paracetamol from "../../assets/Images/MedImages/Paracetamol.jpg";
import Azithromycin from "../../assets/Images/MedImages/Azithromycin.jpg";
import Cetirizine from "../../assets/Images/MedImages/Cetirizine.jpg";
import VitaminC from "../../assets/Images/MedImages/VitaminC.jpg";

const UserDashboard = () => {
  // --- REDUX HOOK ADDED HERE ---
  // We extract cartTotalQuantity from our Redux state
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  // -----------------------------

  const dummyMedicines = [
    {
      id: 1,
      name: "Paracetamol 500mg",
      image: Paracetamol,
      category: "Pain Relief",
      price: 40,
      oldPrice: 60,
    },
    {
      id: 2,
      name: "Amoxicillin Capsule",
      image: Azithromycin,
      category: "Antibiotic",
      price: 120,
      oldPrice: 150,
    },
    {
      id: 3,
      name: "Cetirizine Tablet",
      image: Cetirizine,
      category: "Allergy",
      price: 25,
      oldPrice: 30,
    },
    {
      id: 4,
      name: "Vitamin C (Limcee)",
      image: VitaminC,
      category: "Supplements",
      price: 55,
      oldPrice: 70,
    },
  ];

  return (
    <div className="flex h-screen bg-[#F8FAFC] font-sans">
      {/* Sidebar - Modernized with icons */}
      <aside className="w-72 bg-white border-r border-gray-100 hidden md:flex flex-col shadow-sm z-10">
        <div className="p-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-green-600 flex items-baseline">
            Medicare
            <span className="text-[11px] font-bold text-gray-400 ml-1 tracking-widest">
              IN
            </span>
          </h2>
        </div>
        
        <nav className="flex-1 px-4 overflow-y-auto">
          <ul className="space-y-1.5">
            <li>
              <button className="w-full flex items-center gap-3 p-3.5 bg-green-50 text-green-700 rounded-xl font-semibold transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                Dashboard
              </button>
            </li>
            <li>
              <button className="w-full flex items-center gap-3 p-3.5 text-gray-500 hover:bg-gray-50 hover:text-gray-900 rounded-xl font-medium transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
                My Orders
              </button>
            </li>
            <li>
              <button className="w-full flex items-center gap-3 p-3.5 text-gray-500 hover:bg-gray-50 hover:text-gray-900 rounded-xl font-medium transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                Prescriptions
              </button>
            </li>
            <div className="pt-4 pb-2">
              <p className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Account</p>
            </div>
            <li>
              <button className="w-full flex items-center gap-3 p-3.5 text-gray-500 hover:bg-gray-50 hover:text-gray-900 rounded-xl font-medium transition-all">
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                Settings
              </button>
            </li>
          </ul>
        </nav>
        
        <div className="p-4 border-t border-gray-100">
          <button className="w-full flex items-center justify-center gap-2 py-3 bg-red-50 text-red-600 rounded-xl font-semibold hover:bg-red-100 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        
        {/* Top Header */}
        <header className="h-20 bg-white/80 backdrop-blur-md border-b border-gray-100 flex items-center justify-between px-8 z-10 sticky top-0">
          
          {/* Search Bar */}
          <div className="w-full max-w-xl relative">
            <svg className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            <input
              type="text"
              placeholder="Search for medicines, health products, or pharmacies..."
              className="w-full bg-gray-50 border border-gray-200 rounded-full pl-12 pr-5 py-3 focus:bg-white focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none transition-all text-sm shadow-sm"
            />
          </div>

          {/* User Profile Area */}
          <div className="flex items-center gap-6 ml-4">
            
            {/* --- NEW: SHOPPING CART ICON --- */}
            <button className="relative p-2 text-gray-400 hover:text-green-600 transition-colors group">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
              {/* The dynamic badge */}
              {cartTotalQuantity > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-500 text-[10px] font-bold text-white border-2 border-white group-hover:scale-110 transition-transform">
                  {cartTotalQuantity}
                </span>
              )}
            </button>
            {/* ------------------------------- */}

            <button className="relative p-2 text-gray-400 hover:text-gray-600 transition-colors">
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
               <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="h-8 w-px bg-gray-200"></div>
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-gray-800">John Doe</p>
                <p className="text-xs text-gray-500 font-medium">Gorakhpur, UP</p>
              </div>
              <img src="https://ui-avatars.com/api/?name=John+Doe&background=22c55e&color=fff" alt="User" className="h-10 w-10 rounded-full shadow-sm border-2 border-white" />
            </div>
          </div>
        </header>

        {/* Scrollable Body */}
        <section className="flex-1 overflow-y-auto p-8 scroll-smooth">
          <div className="max-w-7xl mx-auto space-y-8">
            
            {/* Welcome Banner */}
            <div className="bg-gradient-to-r from-green-600 to-green-400 rounded-3xl p-8 text-white shadow-lg shadow-green-200 flex justify-between items-center">
              <div className="max-w-md">
                <h1 className="text-3xl font-bold mb-2">Need a refill?</h1>
                <p className="text-green-50 mb-6">Upload your prescription and get medicines delivered from nearby pharmacies in minutes.</p>
                <button className="bg-white text-green-600 px-6 py-2.5 rounded-full font-bold shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
                  Upload Prescription
                </button>
              </div>
              <div className="hidden md:block">
                {/* Placeholder for an illustration */}
                <svg className="w-32 h-32 text-green-100 opacity-50" fill="currentColor" viewBox="0 0 20 20"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"></path></svg>
              </div>
            </div>

            {/* Quick Categories */}
            <div>
               <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Categories</h3>
               <div className="flex gap-4 overflow-x-auto pb-2">
                  {['Prescription', 'Pain Relief', 'Vitamins', 'First Aid', 'Personal Care'].map((cat, idx) => (
                    <button key={idx} className="whitespace-nowrap bg-white border border-gray-100 px-5 py-2.5 rounded-xl text-sm font-semibold text-gray-600 hover:border-green-300 hover:text-green-600 hover:shadow-sm transition-all">
                      {cat}
                    </button>
                  ))}
               </div>
            </div>

            {/* Medicine Grid Section */}
            <div>
              <div className="flex justify-between items-end mb-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Medicines Near You</h3>
                  <p className="text-sm text-gray-500 mt-1">Sourced from top pharmacies in Gorakhpur</p>
                </div>
                <button className="text-green-600 text-sm font-bold hover:text-green-700 transition-colors flex items-center gap-1">
                  View All <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {dummyMedicines.length > 0 ? (
                  dummyMedicines.map((med) => (
                    <MedicineCard key={med.id} medicine={med} />
                  ))
                ) : (
                  [1, 2, 3, 4].map((i) => (
                    <div key={i} className="animate-pulse bg-white border border-gray-100 h-72 rounded-2xl"></div>
                  ))
                )}
              </div>
            </div>

          </div>
        </section>
      </main>
    </div>
  );
};

export default UserDashboard;