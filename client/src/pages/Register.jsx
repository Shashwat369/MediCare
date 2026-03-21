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
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      alert("Please fill all fields");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Dummy register logic
    alert("Registered successfully!");

    // Redirect based on role
    if (formData.role === "user") {
      navigate("/"); // Redirecting to landing page for now
    } else if (formData.role === "seller") {
      navigate("/seller/dashboard");
    }
  };

  return (
    /* Main Container */
    <div className="min-h-screen flex">
      
      {/* LEFT SIDE: Image Container */}
      <div 
        className="hidden lg:flex lg:w-1/2 bg-cover bg-center relative"
        /* Different medical image for Register page */
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=2079&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-green-900/40"></div>
        
        <div className="relative z-10 flex flex-col justify-center items-start p-16 text-white w-full">
          <h2 className="text-5xl font-bold mb-6">Join the Future <br/>of Healthcare.</h2>
          <p className="text-lg max-w-md">
            Create an account to track your orders, manage your prescriptions, and experience seamless delivery.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE: Form Container */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-linear-to-br from-blue-50 to-green-50 p-6">
        
        <div className="w-full max-w-md bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-5 border border-gray-200">
          
          <h1 className="text-3xl font-bold text-center text-green-600 ">
            Medicare
          </h1>
          <p className="text-center text-gray-500 ">
            Create your account
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 ">
            {/* Name */}
            <div>
              <label className="text-sm font-medium text-gray-700">Full Name</label>
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
              <label className="text-sm font-medium text-gray-700">Password</label>
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
              <label className="text-sm font-medium text-gray-700">Confirm Password</label>
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
              <label className="text-sm font-medium text-gray-700">Register as</label>
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