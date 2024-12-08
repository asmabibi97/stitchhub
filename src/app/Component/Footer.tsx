import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
function Footer() {
  return (
    <div>
       <footer className="bg-white border-t">
      {/* Top Section */}
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
          {/* Brand Name */}
          <div className="w-full md:w-auto text-center md:text-left mb-4 md:mb-0">
            <h1 className="text-2xl font-bold">Bandage</h1>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4 justify-center md:justify-centre sm:justify-center">
            <a href="#" className="text-blue-500 text-xl hover:text-blue-700 transition-colors">
              <FaFacebookF />
            </a>
            <a href="#" className="text-blue-500 text-xl hover:text-blue-700 transition-colors">
              <FaInstagram />
            </a>
            <a href="#" className="text-blue-500 text-xl hover:text-blue-700 transition-colors">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Column 1: Company Info */}
          <div>
            <h2 className="font-bold text-gray-800 mb-4">Company Info</h2>
            <ul className="text-gray-600 space-y-2">
              <li><a href="#" className="hover:text-gray-900">About Us</a></li>
              <li><a href="#" className="hover:text-gray-900">Carrier</a></li>
              <li><a href="#" className="hover:text-gray-900">We are hiring</a></li>
              <li><a href="#" className="hover:text-gray-900">Blog</a></li>
            </ul>
          </div>

          {/* Column 2: Legal */}
          <div>
            <h2 className="font-bold text-gray-800 mb-4">Legal</h2>
            <ul className="text-gray-600 space-y-2">
              <li><a href="#" className="hover:text-gray-900">About Us</a></li>
              <li><a href="#" className="hover:text-gray-900">Carrier</a></li>
              <li><a href="#" className="hover:text-gray-900">We are hiring</a></li>
              <li><a href="#" className="hover:text-gray-900">Blog</a></li>
            </ul>
          </div>

          {/* Column 3: Features */}
          <div>
            <h2 className="font-bold text-gray-800 mb-4">Features</h2>
            <ul className="text-gray-600 space-y-2">
              <li><a href="#" className="hover:text-gray-900">Business Marketing</a></li>
              <li><a href="#" className="hover:text-gray-900">User Analytics</a></li>
              <li><a href="#" className="hover:text-gray-900">Live Chat</a></li>
              <li><a href="#" className="hover:text-gray-900">Unlimited Support</a></li>
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div>
            <h2 className="font-bold text-gray-800 mb-4">Resources</h2>
            <ul className="text-gray-600 space-y-2">
              <li><a href="#" className="hover:text-gray-900">iOS & Android</a></li>
              <li><a href="#" className="hover:text-gray-900">Watch a Demo</a></li>
              <li><a href="#" className="hover:text-gray-900">Customers</a></li>
              <li><a href="#" className="hover:text-gray-900">API</a></li>
            </ul>
          </div>

          {/* Column 5: Get in Touch */}
          <div>
            <h2 className="font-bold text-gray-800 mb-4">Get In Touch</h2>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
              >
                Subscribe
              </button>
            </form>
            <p className="text-gray-500 mt-4 text-sm">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>

        {/* Footer Bottom Text */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          Made With Love By Finland All Rights Reserved
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer
