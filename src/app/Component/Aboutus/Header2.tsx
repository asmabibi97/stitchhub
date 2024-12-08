import React from 'react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa'; // Import the forward arrow icon

function Header2() {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4">
          {/* Logo */}
          <div className="text-lg font-bold text-[#252B42]">Bandage</div>

          {/* Desktop Navigation Menu */}
          <ul className="hidden md:flex space-x-6 items-center">
            <li>
              <Link href="/" className="hover:text-blue-600">Home</Link>
            </li>
            <li>
              <Link href="/product" className="hover:text-blue-600 flex items-center">
                Product
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:text-blue-600">Pricing</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-600">Contact</Link>
            </li>
          </ul>

          {/* Login and Become a Member Button */}
          <div className="flex items-center space-x-4">
            <Link href="/login" className="text-blue-600 hover:underline">Login</Link>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700">
              <span>Become a Member</span>
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className="md:hidden bg-white py-4 px-4">
          <ul className="space-y-4 text-center text-gray-700">
            <li>
              <Link href="/" className="hover:text-blue-600">Home</Link>
            </li>
            <li>
              <Link href="/product" className="hover:text-blue-600">Product</Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:text-blue-600">Pricing</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-600">Contact</Link>
            </li>
            <li className="flex justify-center items-center space-x-4">
              <Link href="/login" className="text-blue-600 hover:underline">Login</Link>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700">
                <span>Become a Member</span>
                <FaArrowRight />
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header2;
