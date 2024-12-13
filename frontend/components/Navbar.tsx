import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Change navbar background color on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`w-full fixed top-0 z-[999] transition-all ${scrolling ? "bg-white bg-opacity-70 backdrop-blur-sm border-none" : "bg-white border-gray-300"}`}>
      <div className="navbar px-4 lg:px-8 w-[90%] mx-auto flex justify-between items-center">
        {/* Logo and Text on the Left */}
        <div className="navbar-start flex items-center">
          <a className="select-none normal-case text-[30px] font-bold mr-6 text-black">Logo</a>
          <h2 className="hidden lg:flex text-[16px] text-gray-600 font-medium space-x-6">
            <a href="#home" className="hover:text-black transition-all">
              Bosh sahifa
            </a>
            <a href="#about" className="hover:text-black transition-all">
              Biz haqimizda
            </a>
          </h2>
        </div>

        {/* Actions */}
        <div className="navbar-end flex items-center">
          {/* Select + Buttons (Desktop Only) */}
          <div className="hidden lg:flex items-center">
            <select className="select select-bordered mr-4 border-gray-400">
              <option disabled>Tilni tanlang</option>
              <option value="uz">O‘zbek (UZ)</option>
              <option value="en">English (EN)</option>
              <option value="ru">Русский (RU)</option>
            </select>
            <button className="btn btn-outline border-gray-400 text-gray-600 hover:bg-gray-200 mr-4">Kirish</button>
            <button className="btn btn-primary bg-blue-500 text-white hover:bg-blue-600">Ro‘yxatdan o‘tish</button>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <button className="btn btn-ghost p-2" onClick={toggleMenu}>
              <FaBars size={24} className="text-gray-600" />
            </button>
            {menuOpen && (
              <div className="menu menu-compact absolute right-4 top-16 bg-white shadow-lg rounded-md w-64 z-[999]">
                <h2 className="text-[16px] text-gray-600 font-medium mb-4 mt-4 px-4">
                  <a href="#home" className="block mb-2 hover:text-black">
                    Bosh sahifa
                  </a>
                  <a href="#about" className="block hover:text-black">
                    Biz haqimizda
                  </a>
                </h2>
                <select className="select select-bordered w-[90%] mx-auto mb-4 border-gray-400">
                  <option disabled>Tilni tanlang</option>
                  <option value="uz">O‘zbek (UZ)</option>
                  <option value="en">English (EN)</option>
                  <option value="ru">Русский (RU)</option>
                </select>
                <button className="btn btn-outline w-[90%] mx-auto mb-2 border-gray-400 text-gray-600 hover:bg-gray-200">Kirish</button>
                <button className="btn btn-primary w-[90%] mx-auto bg-blue-500 text-white hover:bg-blue-600">Ro‘yxatdan o‘tish</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
