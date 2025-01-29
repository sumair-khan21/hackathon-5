'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { useCart } from 'react-use-cart';
import { FaShoppingCart } from 'react-icons/fa';

function Navbar() {
  const [isClick, setIsClick] = useState(false);
  const { totalItems } = useCart(); 

  const toggleNavbar = () => {
    setIsClick(!isClick);
  };

  return (
    <>
    
   <nav className="bg-black z-50 fixed top-0 left-0 w-full shadow-lg">
  <div className="text-center py-2">
    <Link href="/">
      <h1 className="text-white text-2xl font-bold font-serif">
        <span className="text-[#FF9F0D]">Food</span>tuck
      </h1>
    </Link>
  </div>
  <div className="max-w-7xl mx-auto px-4">
    <div className="flex items-center justify-between h-16 font-semibold text-lg">
      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-6 text-white font-serif">
        <Link href="../" className="hover:text-[#FF9F0D]">
          Home
        </Link>
        <Link href="/menu" className="hover:text-[#FF9F0D]">
          Menu
        </Link>
        <Link href="/blog" className="hover:text-[#FF9F0D]">
          Blog
        </Link>
        <Link href="/chef" className="hover:text-[#FF9F0D]">
          Our Chefs
        </Link>
        <Link href="/about" className="hover:text-[#FF9F0D]">
          About
        </Link>
        <Link href="/food" className="hover:text-[#FF9F0D]">
          Our Food
        </Link>
        <Link href="/contact" className="hover:text-[#FF9F0D]">
          Contact
        </Link>
      </div>

      {/* Search and Cart Section */}
      <div className="hidden md:flex items-center gap-4">
        {/* Search Input */}
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Search..."
            className="border border-[#FF9F0D] bg-transparent text-white placeholder-white rounded-full px-3 py-1"
          />
          <img src="/search.png" alt="Search" className="w-5 h-5" />
        </div>

        {/* Cart Icon with Badge */}
        <Link href="/cart" className="relative flex items-center gap-2">
          <FaShoppingCart size={20} className="text-white" />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden flex items-center justify-center text-white"
        onClick={toggleNavbar}
      >
        {isClick ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        )}
      </button>
    </div>
  </div>

  {/* Mobile Navigation Menu */}
  {isClick && (
    <div className="bg-black text-white flex flex-col items-center py-4 space-y-4 md:hidden">
      <Link href="../" className="hover:text-[#FF9F0D]">
        Home
      </Link>
      <Link href="/menu" className="hover:text-[#FF9F0D]">
        Menu
      </Link>
      <Link href="/blog" className="hover:text-[#FF9F0D]">
        Blog
      </Link>
      <Link href="/chef" className="hover:text-[#FF9F0D]">
        Our Chefs
      </Link>
      <Link href="/about" className="hover:text-[#FF9F0D]">
        About
      </Link>
      <Link href="/food" className="hover:text-[#FF9F0D]">
        Our Foods
      </Link>
      <Link href="/contact" className="hover:text-[#FF9F0D]">
        Contact
      </Link>
    </div>
  )}
</nav>


    </>
  );
}

export default Navbar;
