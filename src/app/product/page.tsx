'use client';

import React from 'react';
import Header from '../Component/shop/Header';
import Image from 'next/image';
import { IoIosArrowForward } from 'react-icons/io';
import { FaStripe, FaAws, FaReddit, FaCar, FaHooli } from 'react-icons/fa';
import Footer from '../Component/Footer';

function Page() {
  return (
    <div>
      <Header />
      {/* Main Container */}
      <div className="font-sans container mx-auto px-4 py-8 bg-gray-100">
        
        {/* First Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-4">
            <div className="bg-gray-200 rounded-lg overflow-hidden h-[500px]">
              <Image
                src="/images/prductimage.jpg"
                alt="Product Image"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex space-x-4">
              {[...Array(2)].map((_, index) => (
                <div key={index} className="w-24 h-24 bg-gray-200 rounded-lg overflow-hidden">
                  <Image
                    src="/images/prductimage.jpg"
                    alt="Thumbnail"
                    width={100}
                    height={100}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl font-bold">Floating Phone</h1>
            <div className="flex items-center space-x-2">
              <span className="text-yellow-400 text-xl">&#9733;&#9733;&#9733;&#9733;&#9734;</span>
              <span className="text-gray-500">10 Reviews</span>
            </div>
            <p className="text-3xl text-gray-800 font-semibold">$1,139.33</p>
            <p className="text-sm text-green-600">Availability: <span className="font-bold">In Stock</span></p>
            <p className="text-gray-700 leading-relaxed">
              Met minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            </p>

            <div className="flex items-center space-x-4">
              <button className="w-8 h-8 bg-blue-500 rounded-full"></button>
              <button className="w-8 h-8 bg-yellow-500 rounded-full"></button>
              <button className="w-8 h-8 bg-green-500 rounded-full"></button>
              <button className="w-8 h-8 bg-red-500 rounded-full"></button>
            </div>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700">Select Options</button>
          </div>
        </div>

        {/* Bestseller Products Section */}
        <h2 className="text-2xl font-bold my-8">Bestseller Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-md hover:scale-105 transition-transform">
              <Image
                src={`/images/product-cover-5 (${index + 4}).png`}
                alt="Product Image"
                width={500}
                height={300}
                className="w-full rounded-t-lg"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold">Graphic Design</h3>
                <p className="text-gray-500">English Department</p>
                <div className="text-lg font-bold text-gray-800 mt-2">$11.68 - $34.48</div>
              </div>
            </div>
          ))}
        </div>

        {/* Icons Section */}
        <div className="flex flex-wrap justify-center items-center gap-8 py-8">
          <div className="w-24 h-12 flex justify-center items-center">
            <FaHooli className="text-6xl text-gray-600" />
          </div>
          <div className="w-24 h-12 flex justify-center items-center">
            <FaCar className="text-6xl text-gray-600" />
          </div>
          <div className="w-24 h-12 flex justify-center items-center">
            <FaStripe className="text-6xl text-gray-600" />
          </div>
          <div className="w-24 h-12 flex justify-center items-center">
            <FaAws className="text-6xl text-gray-600" />
          </div>
          <div className="w-24 h-12 flex justify-center items-center">
            <FaReddit className="text-6xl text-gray-600" />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default Page;
