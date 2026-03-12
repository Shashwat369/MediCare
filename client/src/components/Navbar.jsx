import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  const [open, setOpen] = useState(false);

  return (
    <nav className="shadow-md bg-white">

      {/* Top Navbar */}
      <div className="flex items-center justify-between px-6 py-3">

        {/* Logo */}
        <h1 className="text-3xl font-bold text-green-600">
          Medicare
        </h1>

        {/* Search bar */}
        <div className="hidden md:flex w-1/3">
          <input
            type="text"
            placeholder="Search medicines..."
            className="w-full border border-gray-400 px-4 py-2 rounded-l-full outline-none"
          />
          <button className="bg-green-600 text-white px-5 py-2 rounded-r-full cursor-pointer rounded-l-none">
            Search
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-6">

          <ul className="flex gap-6 text-gray-600 font-medium">
            <li className="hover:text-green-600 cursor-pointer">Home</li>
            <li className="hover:text-green-600 cursor-pointer">Medicines</li>
            <li className="hover:text-green-600 cursor-pointer">Upload</li>
          </ul>

          {/* Cart */}
          <span className="text-xl cursor-pointer">
            🛒
          </span>

          {/* Login */}
          <button className="bg-green-600 text-white px-4 py-1 rounded-md">
            Login
          </button>

        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
        {open ? "X" : "☰"}
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col items-center gap-4 pb-4 text-gray-700">

          <input
            type="text"
            placeholder="Search medicines..."
            className="border px-4 py-1 rounded-md w-4/5"
          />

          <ul className="flex flex-col gap-4 text-center font-medium">
            <li className="hover:text-green-600 cursor-pointer">Home</li>
            <li className="hover:text-green-600 cursor-pointer">Medicines</li>
            <li className="hover:text-green-600 cursor-pointer">Upload</li>
            <li className="hover:text-green-600 cursor-pointer">Cart</li>
          </ul>

          <Link to="/login" className="bg-green-600 text-white px-4 py-2 rounded-md">
            Login
          </Link>

        </div>
      )}

    </nav>
  );
};

export default Navbar;
