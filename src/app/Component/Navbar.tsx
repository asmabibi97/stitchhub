'use client';

import Link from 'next/link';
import { CiPhone } from "react-icons/ci";
import { PiEnvelopeLight, PiShoppingCartThin, PiHeart } from "react-icons/pi";
import { IoLogoInstagram, IoIosArrowDown } from "react-icons/io";
import { FaYoutube, FaFacebook, FaTwitter } from "react-icons/fa";
import { BiUser, BiSearch } from "react-icons/bi";

const Navbar = () => {
  return (
    <header className="w-full">
      {/* Top Bar - Hidden on Mobile */}
      <div className="bg-[#252B42] text-white text-sm hidden md:flex justify-between items-center py-2 px-4">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <CiPhone />
            <span>(225) 555-0118</span>
          </div>
          <div className="flex items-center space-x-2">
            <PiEnvelopeLight />
            <span>michelle.rivera@example.com</span>
          </div>
        </div>
        <div className="flex items-center space-x-4 gap-8">
          <span>Follow Us and get a chance to win 80% off</span>
          <div className="flex items-center space-x-2">
            <span>Follow us:</span>
            <a href="#" className="hover:text-gray-300">
              <IoLogoInstagram />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaYoutube />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4">
          {/* Logo */}
          <div className="text-lg font-bold text-[#252B42]">Bandage</div>

          {/* Desktop Navigation Menu */}
          <ul className="hidden md:flex space-x-6">
            <li>
              <Link href="/" className="hover:text-blue-600">Home</Link>
            </li>
            <li>
              <Link href="/shop" className="hover:text-blue-600 flex items-center">
                Shop
                <IoIosArrowDown className="ml-1" />
              </Link>
            </li>
            <li>
              <Link href="/aboutus" className="hover:text-blue-600">About</Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-blue-600">Blog</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-600">Contact</Link>
            </li>
            <li>
              <Link href="/team" className="hover:text-blue-600">Pages</Link>
            </li>
          </ul>

          {/* Icons Section */}
          <div className="flex items-center space-x-4">
            <Link href="/login" className="md:flex items-center hover:text-blue-600 hidden">
              <BiUser className="mr-1" /> Login / Register
            </Link>
            <a href="#" className="flex items-center hover:text-blue-600">
              <BiSearch />
            </a>
            <a href="#" className="flex items-center hover:text-blue-600">
              <PiShoppingCartThin className="mr-1" /> 1
            </a>
            <a href="#" className="flex items-center hover:text-blue-600">
              <PiHeart className="mr-1" /> 1
            </a>
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
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
