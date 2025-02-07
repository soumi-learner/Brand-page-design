// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import brandlogo from "../assets/brand_logo.png";
import "../App.css"

const Navbar = () => {
  return (
    <div className="navbar fw-full h-[72px] bg-white flex items-center justify-between px-10 z-50 shadow-md mb-7">
      {/* Image */}
      <div>
        <img src={brandlogo} alt="Brand Logo" />
      </div>

      {/* Navigation Links */}
      <ul className="flex justify-between items-center gap-3">
         <li><Link to="/" className="hover:text-gray-600">HOME</Link></li>
        <li><Link to="/menu" className="hover:text-gray-600">MENU</Link></li>
        <li><Link to="/location" className="hover:text-gray-600">LOCATION</Link></li>
        <li><Link to="/about" className="hover:text-gray-600">ABOUT</Link></li>
        <li><Link to="/contact" className="hover:text-gray-600">CONTACT</Link></li>
      </ul>

      {/* Login Button */}
      <button className="bg-[#D01C28] text-white px-5 py-2">LOGIN</button>
    </div>
  );
};

export default Navbar;
