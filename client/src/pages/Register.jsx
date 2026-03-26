import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "user",
    // --- NEW: Seller-specific fields ---
    shopName: "",
    shopLicense: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      return alert("Please fill all required fields");
    }
    
    // --- FRONTEND VALIDATION FOR SELLER ---
    if (formData.role === "seller" && (!formData.shopName || !formData.shopLicense)) {
        return alert("Shop Name and License are required for Sellers");
    }
    // --------------------------------------

    if (formData.password !== formData.confirmPassword) {
      return alert("Passwords do not match");
    }

    try {
      // Send data to backend (excluding confirmPassword)
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          role: formData.role,
          // --- SENDING CONDITIONAL SELLER DATA ---
          ...(formData.role === "seller" && {
            shopName: formData.shopName,
            shopLicense: formData.shopLicense,
          }),
          // ---------------------------------------
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Updated alert to handle the seller verification message
        alert(data.message); 
        navigate("/login");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error registering:", error);
      alert("Server error. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* LEFT SIDE: Image Container */}
      <div
        className="hidden lg:flex lg:w-1/2 bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=2079&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-green-900/40"></div>

        <div className="relative z-10 flex flex-col justify-center items-start p-16 text-white w-full">
          <h2 className="text-5xl font-bold mb-6">
            Join the Future <br />
            of Healthcare.
          </h2>
          <p className="text-lg max-w-md">
            Create an account to track your orders, manage your prescriptions,
            and experience seamless delivery.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE: Form Container */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-linear-to-br from-blue-50 to-green-50 p-6">
        <div className="w-full max-w-md bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-5 border border-gray-200">
          <h1 className="text-3xl font-bold text-center text-green-600 ">
            Medicare
          </h1>
          <p className="text-center text-gray-500 ">Create your account</p>

          <form onSubmit={handleSubmit} className="space-y-4 ">
            {/* Name */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Create password"
                value={formData.password}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
            </div>

            {/* Role */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Register as
              </label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full mt-1 text-gray-700 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              >
                <option value="user">User</option>
                <option value="seller">Seller</option>
              </select>
            </div>

            {/* --- CONDITIONAL SELLER FIELDS --- */}
            {formData.role === "seller" && (
              <div className="space-y-4 p-4 bg-green-50 rounded-xl border border-green-100 animate-fade-in">
                <div>
                  <label className="text-sm font-semibold text-green-800">
                    Pharmacy/Shop Name
                  </label>
                  <input
                    type="text"
                    name="shopName"
                    placeholder="e.g., Apollo Pharmacy"
                    value={formData.shopName}
                    onChange={handleChange}
                    className="w-full mt-1 px-4 py-2 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-green-800">
                    License Number
                  </label>
                  <input
                    type="text"
                    name="shopLicense"
                    placeholder="Enter valid license code"
                    value={formData.shopLicense}
                    onChange={handleChange}
                    className="w-full mt-1 px-4 py-2 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <p className="text-xs text-green-700 italic">
                  Note: Your account will require admin verification before you can list products.
                </p>
              </div>
            )}
            {/* ----------------------------------- */}

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-green-500 cursor-pointer hover:bg-green-600 text-white py-2 rounded-lg font-semibold transition duration-200 mt-2"
            >
              Register
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-green-600 font-medium hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;