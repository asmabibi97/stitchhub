import React from 'react'
import Header2 from '../Component/Aboutus/Header2'
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

import { IoMdArrowDown } from "react-icons/io";

import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import Footer from '../Component/Footer';
function contact() {
  return (
    <div>
      <Header2/>
    {/* ///////////hero section///////////// */}
    <div className="flex flex-col justify-center items-center w-full h-[716px] bg-cover bg-center bg-[url('/images/background.png')]">
    <div className="flex flex-col justify-center items-start w-full max-w-[1044px] text-black px-8 py-12">
      <h1 className='text-base mb-4 text-center sm:text-left'>CONTACT US </h1>
      <h2 className='text-4xl sm:text-5xl font-bold mb-8 text-center sm:text-left'>
      Get in touch 
today!
      </h2>
      <p className='text-base mb-6 max-w-[700px] text-center sm:text-left'>
      We know how large objects will act, 
      but things on a small scale
      </p>
      <h3 className='text-base  font-bold mb-4 text-center sm:text-left'>Phone ; +451 215 215 </h3>
      <h4 className='text-base font-bold mb-4 text-center sm:text-left '>Fax : +451 215 215 </h4>
       {/* Social Icons */}
    <div className="flex justify-center space-x-6 mt-6 text-gray-500">
      <a href="#" className="hover:text-blue-500"><FaTwitter className="text-2xl" /></a>
      <a href="#" className="hover:text-blue-500"><FaFacebook className="text-2xl" /></a>
      <a href="#" className="hover:text-blue-500"><FaInstagram className="text-2xl" /></a>
      <a href="#" className="hover:text-blue-500"><FaLinkedin className="text-2xl" /></a>
    </div>
    </div>
  </div>
  {/* ///////////////////section 2/////////////////////// */}
   {/* Pricing Section */}
   <section className="px-4 py-8 sm:px-0">
          <div className="text-center">
            
            <p className="text-sm text-gray-500">
            VISIT OUR OFFICE
            </p>
            <h2 className="text-3xl font-semibold my-4">We help small businesses 
            with big ideas</h2>
           
          </div>

          

<div className="flex flex-col sm:flex-row justify-center mt-8">
  {/* Phone Card */}
  <div className="p-6 bg-white text-center sm:w-1/3">
    <FaPhoneAlt className="text-4xl text-[#23A6F0] mx-auto mb-4" />
    <h3 className="text-lg font-bold text-gray-900">Phone</h3>
    <p className="mt-2 text-sm text-gray-600">+1 123-456-7890</p>
    <button className="mt-6 py-2 px-6 bg-[#23A6F0] text-white rounded-full">
      Submit Request
    </button>
  </div>

  {/* Location Card (Elevated Middle Card) */}
  <div className="p-6 bg-[#252B42] text-center sm:w-1/3 relative sm:-mt-4">
    <FaMapMarkerAlt className="text-4xl text-[#23A6F0] mx-auto mb-4" />
    <h3 className="text-lg font-bold text-white">Location</h3>
    <p className="mt-2 text-sm text-white">123 Main Street, City, Country</p>
    <button className="mt-6 py-2 px-6 bg-[#23A6F0] text-white rounded-full">
      Submit Request
    </button>
  </div>

  {/* Email Card */}
  <div className="p-6 bg-white text-center sm:w-1/3">
    <FaEnvelope className="text-4xl text-[#23A6F0] mx-auto mb-4" />
    <h3 className="text-lg font-bold text-gray-900">Email</h3>
    <p className="mt-2 text-sm text-gray-600">support@example.com</p>
    <button className="mt-6 py-2 px-6 bg-[#23A6F0] text-white rounded-full">
      Submit Request
    </button>
  </div>
</div>


          </section>
          {/* /////////////last section ////////////// */}
          <div className="w-full bg-white py-16">
      <div className="text-center">
        {/* Arrow Icon from React Icons */}
        <div className="mb-4 flex justify-center rotate-45 scale-x-[-1]	">
          <IoMdArrowDown  className="w-8 h-8 text-blue-500 animate-bounce" />
        </div>

        {/* Subtitle */}
        <p className="text-sm font-semibold text-gray-600 tracking-wide">
          WE CAN&apos;T WAIT TO MEET YOU
        </p>

        {/* Heading */}
        <h1 className="mt-4 text-4xl font-extrabold text-gray-800">
          Let’s Talk
        </h1>

        {/* Button Design */}
        <div className="mt-6">
          <button className="inline-block px-8 py-3 text-white bg-blue-500 hover:bg-blue-600 text-lg font-medium rounded-lg shadow-md">
            Try it free now
          </button>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
  )
}

export default contact
