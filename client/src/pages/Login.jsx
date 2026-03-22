import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "user",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

 const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.email && formData.password) {
      try {
        const response = await fetch("http://localhost:5000/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (response.ok) {
          alert("Login Successful!");
          
          localStorage.setItem("token", data.token); 
          
          if (data.role === "user") navigate("/dashboard");
          else if (data.role === "seller") navigate("/seller/dashboard");
        } else {
          alert(data.message); 
        }
      } catch (error) {
        console.error("Error logging in:", error);
        alert("Server error. Please try again later.");
      }
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    /* Main Container: Flexbox handles the side-by-side layout */
    <div className="min-h-screen  flex">
      
      
      <div 
        className="hidden lg:flex lg:w-3/4 bg-cover bg-center relative"
        /* Using a placeholder medical image from Unsplash. You can replace this URL! */
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=2069&auto=format&fit=crop')" }}
      >
        {/* Subtle green overlay to make text readable and match your branding */}
        <div className="absolute inset-0 bg-green-900/40"></div>
        
        {/* Promotional Text over the image */}
        <div className="relative z-10 flex flex-col justify-center items-start p-16 text-white w-full">
          <h2 className="text-5xl font-bold mb-6">Your Health,<br/>Delivered.</h2>
          <p className="text-lg max-w-md">
            Join Medicare to easily order medicines, manage your health records, and connect with trusted local pharmacies.
          </p>
        </div>
      </div>


      <div className="w-full lg:w-1/2 flex items-center justify-center bg-linear-to-br from-blue-50 to-green-50 p-6">
        
        {/* Your Original Form Card */}
        <div className="w-full max-w-md bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-8 border border-gray-200">
          
          <h1 className="text-3xl font-bold text-center text-green-600 mb-2">
            Medicare
          </h1>
          <p className="text-center text-gray-500 mb-6">
            Login to your account
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
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
              <label className="text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
            </div>

            {/* Role Select */}
            <div>
              <label className="text-sm font-medium text-gray-700">Login as</label>
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

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-semibold transition duration-200 mt-2"
            >
              Login
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-sm text-gray-500 mt-6">
            Don’t have an account?{" "}
            <Link to="/register" className="text-green-600 font-medium hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;