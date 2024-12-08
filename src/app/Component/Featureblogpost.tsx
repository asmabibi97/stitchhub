import React from 'react'
import Image from 'next/image'
import { LuAlarmClock } from "react-icons/lu";
import { FaChartArea } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";




function Featureblogpost() {
  return (
    <div>
    <section className="py-8 px-4 bg-white shadow-lg max-w-7xl mx-auto mt-8">
      {/* Practice Advice Section */}
      <h2 className="text-lg font-semibold text-[#23A6F0] mb-4 text-center">Practice Advice</h2>
  
      {/* Featured Products Section */}
      <h1 className="text-2xl font-bold text-center mb-2">Featured Products</h1>
      <p className="text-gray-500 text-center mb-8">Problems trying to resolve the conflict between</p>
  
      {/* Blog Post Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Blog Post 1 */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-md">
          <div className="relative">
            <img src="/images/unsplash_hHdHCfAifHU.png" alt="Blog Post" className="w-full h-56 object-cover rounded-t-lg" />
            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">NEW</span>
          </div>
          <div className="p-4">
            <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
              <span className='text-[#8EC2F2]'>Google</span>
              <span>Trending</span>
              <span>New</span>
            </div>
            <h3 className="text-lg  mb-2">Loudest à la Madison #1 
            (L'integral)</h3>
            <p className="text-gray-600 mb-4">We focus on ergonomics and meeting 
            you where you work. It's only a 
            keystroke away.</p>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <span className="text-[#23A6F0]"><LuAlarmClock /></span>
                <span>Dec 8, 2024 </span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-[#23856D]"><FaChartArea /></span>
                <span>5 Comments</span>
              </div>
            </div>
            <div className="mt-4">
              <a href="#" className="text-black flex items-center gap-1">
                Learn More <span className="text-[#23A6F0]"><IoIosArrowForward /></span>
              </a>
            </div>
          </div>
        </div>
  
        {/* Blog Post 2 */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-md">
          <div className="relative">
            <img src="/images/unsplash_tVEqStC2uz8.png" alt="Blog Post width{348}" className="w-full h-56 object-cover object-top-center rounded-t-lg" />
            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">NEW</span>
          </div>
          <div className="p-4">
            <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
              <span className='text-[#8EC2F2]'>Google</span>
              <span>Trending</span>
              <span>New</span>
            </div>
            <h3 className="text-lg  mb-2">Loudest à la Madison #1 
            (L'integral)</h3>
            <p className="text-gray-600 mb-4">We focus on ergonomics and meeting 
            you where you work. It's only a 
            keystroke away.</p>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <span className="text-[#23A6F0]"><LuAlarmClock /></span>
                <span>Dec 8, 2024 </span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-[#23856D]"><FaChartArea /></span>
                <span>5 Comments</span>
              </div>
            </div>
            <div className="mt-4">
              <a href="#" className="text-black flex items-center gap-1">
                Learn More <span className="text-[#23A6F0]"><IoIosArrowForward /></span>
              </a>
            </div>
          </div>
        </div>
  
        {/* Blog Post 3 */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-md">
          <div className="relative">
            <img src="/images/unsplash_dEGu-oCuB1Y.png" alt="Blog Post" className="w-full h-56 object-cover rounded-t-lg" />
            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">NEW</span>
          </div>
          <div className="p-4">
            <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
              <span className='text-[#23A6F0]'>Google</span>
              <span>Trending</span>
              <span>New</span>
            </div>
            <h3 className="text-lg  mb-2">Loudest à la Madison #1 
            (L'integral)</h3>
            <p className="text-gray-600 mb-4">We focus on ergonomics and meeting 
            you where you work. It's only a 
            keystroke away.</p>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <span className="text-[#23A6F0]"><LuAlarmClock /></span>
                <span>Dec 8, 2024 </span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-[#23856D]"><FaChartArea /></span>
                <span>5 Comments</span>
              </div>
            </div>
            <div className="mt-4">
              <a href="#" className="text-black flex items-center gap-1">
                Learn More <span className="text-[#23A6F0]"><IoIosArrowForward /></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  
  )
}

export default Featureblogpost
