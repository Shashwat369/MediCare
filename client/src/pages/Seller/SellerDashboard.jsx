import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SellerDashboard = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  // --- FORM STATE ---
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    category: "Prescription", // Default value
    price: "",
    oldPrice: "",
    stock: "",
    image: "",
  });

  // 1. Check Auth & Get Seller Details on Load
  useEffect(() => {
    const storedUser = localStorage.getItem("userInfo");
    if (!storedUser) {
      navigate("/login");
      return;
    }
    const parsedUser = JSON.parse(storedUser);
    
    // Security check: Kick them out if they aren't a seller
    if (parsedUser.role !== "seller") {
      navigate("/dashboard");
      return;
    }
    setUserInfo(parsedUser);
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      localStorage.removeItem("token");
      localStorage.removeItem("userInfo");
      navigate("/login");
    }
  };

  // 2. Submit New Medicine to MongoDB
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // We grab the token to prove we are logged in (if your backend requires it later)
      const token = localStorage.getItem("token");

      // We combine the form data with the seller's hidden details
      const medicineData = {
        ...formData,
        price: Number(formData.price),
        oldPrice: formData.oldPrice ? Number(formData.oldPrice) : undefined,
        stock: Number(formData.stock),
        // These come securely from localStorage, not from the user typing them!
        shopName: userInfo.shopName, 
        sellerId: userInfo._id, 
      };

      const response = await fetch("http://localhost:5000/api/medicines", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Good practice to include
        },
        body: JSON.stringify(medicineData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Medicine added successfully!");
        // Clear the form
        setFormData({
          name: "", company: "", category: "Prescription", price: "", oldPrice: "", stock: "", image: "",
        });
      } else {
        alert(data.message || "Failed to add medicine");
      }
    } catch (error) {
      console.error("Error adding medicine:", error);
      alert("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!userInfo) return null; // Prevent flicker while checking auth

  return (
    <div className="flex h-screen bg-[#F8FAFC] font-sans">
      {/* --- SELLER SIDEBAR --- */}
      <aside className="w-72 bg-white border-r border-gray-100 hidden md:flex flex-col shadow-sm z-10">
        <div className="p-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-blue-600 flex items-baseline">
            Medicare
            <span className="text-[11px] font-bold text-gray-400 ml-1 tracking-widest">
              SELLER
            </span>
          </h2>
          <p className="text-sm text-gray-500 mt-2 font-medium truncate">
            {userInfo.shopName}
          </p>
        </div>

        <nav className="flex-1 px-4 overflow-y-auto">
          <ul className="space-y-1.5">
            <li>
              <button className="w-full flex items-center gap-3 p-3.5 bg-blue-50 text-blue-700 rounded-xl font-semibold transition-all">
                {/* Plus Icon */}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                Add Medicine
              </button>
            </li>
            <li>
              <button className="w-full flex items-center gap-3 p-3.5 text-gray-500 hover:bg-gray-50 hover:text-gray-900 rounded-xl font-medium transition-all">
                {/* Inventory Icon */}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
                My Inventory
              </button>
            </li>
          </ul>
        </nav>

        <div className="p-4 border-t border-gray-100">
          <button onClick={handleLogout} className="w-full flex items-center justify-center gap-2 py-3 bg-red-50 text-red-600 rounded-xl font-semibold hover:bg-red-100 transition-colors">
             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
            Logout
          </button>
        </div>
      </aside>

      {/* --- MAIN CONTENT (ADD MEDICINE FORM) --- */}
      <main className="flex-1 overflow-y-auto p-8">
        <div className="max-w-3xl mx-auto">
          
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-800">Add New Product</h1>
            <p className="text-gray-500">List a new medicine or health product in your pharmacy.</p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 space-y-6">
            
            {/* Row 1: Name & Company */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Medicine Name *</label>
                <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="e.g. Paracetamol 500mg" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Manufacturer/Company *</label>
                <input type="text" name="company" required value={formData.company} onChange={handleChange} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="e.g. GSK, Cipla" />
              </div>
            </div>

            {/* Row 2: Category & Stock */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Category *</label>
                <select name="category" value={formData.category} onChange={handleChange} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all bg-white">
                  <option value="Prescription">Prescription</option>
                  <option value="Pain Relief">Pain Relief</option>
                  <option value="Antibiotic">Antibiotic</option>
                  <option value="Vitamins">Vitamins & Supplements</option>
                  <option value="First Aid">First Aid</option>
                  <option value="Personal Care">Personal Care</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Stock Quantity *</label>
                <input type="number" name="stock" required min="1" value={formData.stock} onChange={handleChange} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="e.g. 50" />
              </div>
            </div>

            {/* Row 3: Pricing */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5 bg-blue-50/50 rounded-2xl border border-blue-100">
              <div>
                <label className="block text-sm font-semibold text-blue-900 mb-2">Selling Price (₹) *</label>
                <input type="number" name="price" required min="1" value={formData.price} onChange={handleChange} className="w-full px-4 py-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="e.g. 45" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">MRP / Old Price (₹)</label>
                <input type="number" name="oldPrice" min="1" value={formData.oldPrice} onChange={handleChange} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-300 outline-none transition-all" placeholder="e.g. 60 (Optional)" />
              </div>
            </div>

            {/* Row 4: Image URL */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Image URL</label>
              <input type="url" name="image" value={formData.image} onChange={handleChange} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="https://example.com/image.jpg" />
              <p className="text-xs text-gray-400 mt-2">Paste a link to the medicine image. Leave blank to use a default placeholder.</p>
            </div>

            {/* Submit Button */}
            <button type="submit" disabled={loading} className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold shadow-md transition-colors disabled:bg-blue-300 flex justify-center items-center">
              {loading ? "Saving to Database..." : "Add Medicine to Store"}
            </button>

          </form>
        </div>
      </main>
    </div>
  );
};

export default SellerDashboard;