'use client';

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Explore Activity", path: "/explore" },
    { name: "Write a Review", path: "/review" },
    { name: "About Us", path: "/about" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#F9F6F1] z-50 shadow-sm px-4 py-3 flex items-center justify-between sm:px-6 lg:px-40 h-[60px] md:h-[72px]">
      {/* Logo */}
      <Link to="/">
        <img
          src="/logo_planaway.png"
          alt="Planaway Logo"
          className="h-[20px] md:h-[30px]"
        />
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden xl:flex items-center space-x-8 text-[#6C7370] font-medium">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <li key={item.name} className="relative">
              <Link
                to={item.path}
                className={`hover:text-black transition-colors ${
                  isActive ? "text-black" : ""
                }`}
              >
                {item.name}
              </Link>
              {isActive && (
                <span className="absolute left-1/2 -bottom-2 transform -translate-x-1/2 w-1.5 h-1.5 bg-green-600 rounded-full" />
              )}
            </li>
          );
        })}
      </ul>

      {/* Desktop Right Section */}
      <div className="hidden lg:flex items-center space-x-6 text-[#6C7370] font-medium">
        <ul className="flex items-center space-x-2">
          <li><a href="#">ID</a></li>
          <span>|</span>
          <li><a href="#" className="text-[#111]">EN</a></li>
        </ul>
        <button className="border bg-[#6C7370] text-white rounded-full py-2 px-4 hover:bg-[#1D2B29] hover:border-[#1D2B29] hover:text-white text-sm">
          Login
        </button>
        <img src="/profile.png" alt="Profile" className="h-10 w-10 rounded-full object-cover" />
      </div>

      {/* Mobile Menu Toggle Button */}
      <button
        className="2xl:hidden text-black"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-[70px] left-4 right-4 bg-white border rounded-xl p-6 z-40 shadow-md 2xl:hidden">
          <ul className="flex flex-col space-y-4 text-[#333] font-medium">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`hover:text-primary ${
                    location.pathname === item.path ? "text-black font-bold" : ""
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Language & Login */}
          <div className="mt-6 border-t pt-4 flex justify-between items-center lg:hidden">
            <ul className="flex space-x-2 text-sm text-[#6C7370]">
              <li><a href="#">ID</a></li>
              <span>|</span>
              <li><a href="#" className="text-[#111]">EN</a></li>
            </ul>
            <button className="border border-[#6C7370] rounded-full py-1 px-4 text-sm hover:bg-[#1D2B29] hover:text-white">
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
