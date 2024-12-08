import React from 'react';
import Header2 from '../Component/Aboutus/Header2';
import { IoIosArrowForward } from "react-icons/io";
import { FaCheckCircle } from 'react-icons/fa';
import {  FaStripe, FaAws, FaReddit, FaCar } from 'react-icons/fa'; //  icons for Lyft, Stripe, AWS, Reddit, and Twitter
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaHooli } from "react-icons/fa";
import Footer from '../Component/Footer';

function PricingPage() { // Updated name
  return (
    <div>
      <Header2 />
      <div className="bg-gray-50 text-gray-900">
        {/* Header Section */}
        <header className="text-center py-8 px-4">
          <p className="text-gray-600 text-lg mt-2">Pricing</p>
          <h1 className="text-3xl font-bold">Simple Pricing</h1>
          <div className="flex justify-center items-center">
            <div className="flex justify-center p-4">
              <div className="flex space-x-6">
                <span className="flex items-center">
                  Home
                  <IoIosArrowForward className="ml-2" />
                </span>
                <span>Pricing</span>
              </div>
            </div>
          </div>
        </header>

        {/* Pricing Section */}
        <section className="px-4 py-8 sm:px-0">
          <div className="text-center">
            <h2 className="text-3xl font-semibold my-4">Pricing</h2>
            <p className="text-sm text-gray-500">
              Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
            </p>
            <div className="inline-flex items-center justify-center space-x-4 mt-4">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Monthly</button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md">Yearly</button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="flex flex-col sm:flex-row sm:justify-center sm:space-x-4 gap-4 mt-8">
            {/* Free Plan */}
            <div className="p-6 border rounded-lg bg-white shadow-md sm:w-1/3 text-center">
              <h3 className="text-lg font-bold text-gray-900">FREE</h3>
              <p className="mt-2 text-sm text-gray-600">Organize across all apps by hand</p>
              <p className="mt-4 text-3xl font-extrabold text-gray-900">0 $</p>
              <p className="text-sm text-gray-500 mt-2">Per Month</p>
              <div className="flex justify-center items-center mt-4">
                <FaCheckCircle className="text-green-500 mr-2" />
                <p className="text-sm text-gray-500">Unlimited product updates</p>
              </div>
              <button className="mt-6 w-full py-2 bg-blue-500 text-white rounded-md">Get Started</button>
            </div>

            {/* Standard Plan */}
            <div className="p-6 border rounded-lg bg-[#252B42] text-white shadow-md sm:w-1/3 text-center">
              <h3 className="text-lg font-bold">STANDARD</h3>
              <p className="mt-2 text-sm">Organize across all apps by hand</p>
              <p className="mt-4 text-3xl font-extrabold">9.99 $</p>
              <p className="text-sm mt-2">Per Month</p>
              <div className="flex justify-center items-center mt-4">
                <FaCheckCircle className="mr-2" />
                <p className="text-sm">Unlimited product updates</p>
              </div>
              <button className="mt-6 w-full py-2 bg-blue-500 text-white rounded-md">Choose Plan</button>
            </div>

            {/* Premium Plan */}
            <div className="p-6 border rounded-lg bg-white shadow-md sm:w-1/3 text-center">
              <h3 className="text-lg font-bold text-gray-900">PREMIUM</h3>
              <p className="mt-2 text-sm text-gray-600">Organize across all apps by hand</p>
              <p className="mt-4 text-3xl font-extrabold text-gray-900">19.99 $</p>
              <p className="text-sm text-gray-500 mt-2">Per Month</p>
              <div className="flex justify-center items-center mt-4">
                <FaCheckCircle className="text-green-500 mr-2" />
                <p className="text-sm text-gray-500">Unlimited product updates</p>
              </div>
              <button className="mt-6 w-full py-2 bg-blue-500 text-white rounded-md">Choose Plan</button>
            </div>
          </div>
<div className='flex flex-col justify-center items-center mt-20'>
    <h1 className='text-[20px] '>Trusted By Over 4000 Big Companies</h1>
</div>
{/* /////////////logo section///////////////// */}
  {/* Logos Section with React Icons */}
  <div className="flex flex-wrap justify-center items-center gap-8 py-8">
        {/* Hooli Logo (custom placeholder icon) */}
        <div className="w-24 h-12 flex justify-center items-center">
          <FaHooli className="text-6xl text-gray-600" /> 
        </div>

        {/* Lyft Logo (car icon as a placeholder for Lyft) */}
        <div className="w-24 h-12 flex justify-center items-center">
          <FaCar className="text-6xl text-gray-600" /> 
        </div>

        {/* Stripe Logo */}
        <div className="w-24 h-12 flex justify-center items-center">
          <FaStripe className="text-6xl text-gray-600" />
        </div>

        {/* AWS Logo */}
        <div className="w-24 h-12 flex justify-center items-center">
          <FaAws className="text-6xl text-gray-600" /> {/* Increased size */}
        </div>

        {/* Reddit Logo */}
        <div className="w-24 h-12 flex justify-center items-center">
          <FaReddit className="text-6xl text-gray-600" /> {/* Increased size */}
        </div>
      </div>
 </section>
        </div>
        <section className="px-4 py-12 bg-gray-50">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-2xl font-bold text-gray-800 mb-6">Pricing FAQs</h2>
    <p className="text-gray-600 mb-8">Find answers to commonly asked questions about our pricing plans.</p>
  </div>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
    {/* FAQ 1 */}
    <div className="flex items-start space-x-2">
      <IoIosArrowForward className="text-blue-500 mt-1" />
      <div>
        <h3 className="font-semibold text-lg text-gray-800">What happens after the trial ends?</h3>
        <p className="text-gray-600 mt-2 text-sm">You can choose a paid plan or switch to the free plan with limited features.</p>
      </div>
    </div>
    
    {/* FAQ 2 */}
    <div className="flex items-start space-x-2">
      <IoIosArrowForward className="text-blue-500 mt-1" />
      <div>
        <h3 className="font-semibold text-lg text-gray-800">Can I cancel my subscription anytime?</h3>
        <p className="text-gray-600 mt-2 text-sm">Yes, you can cancel your subscription at any time without penalties.</p>
      </div>
    </div>
    
    {/* FAQ 3 */}
    <div className="flex items-start space-x-2">
      <IoIosArrowForward className="text-blue-500 mt-1" />
      <div>
        <h3 className="font-semibold text-lg text-gray-800">Are there any setup fees?</h3>
        <p className="text-gray-600 mt-2 text-sm">No, there are no setup fees for any of our plans.</p>
      </div>
    </div>
    
    {/* FAQ 4 */}
    <div className="flex items-start space-x-2">
      <IoIosArrowForward className="text-blue-500 mt-1" />
      <div>
        <h3 className="font-semibold text-lg text-gray-800">Do you offer discounts for yearly subscriptions?</h3>
        <p className="text-gray-600 mt-2 text-sm">Yes, we offer discounts for annual payments. Contact us for more details.</p>
      </div>
    </div>
    
    {/* FAQ 5 */}
    <div className="flex items-start space-x-2">
      <IoIosArrowForward className="text-blue-500 mt-1" />
      <div>
        <h3 className="font-semibold text-lg text-gray-800">What payment methods do you accept?</h3>
        <p className="text-gray-600 mt-2 text-sm">We accept credit cards, PayPal, and other popular payment methods.</p>
      </div>
    </div>
    
    {/* FAQ 6 */}
    <div className="flex items-start space-x-2">
      <IoIosArrowForward className="text-blue-500 mt-1" />
      <div>
        <h3 className="font-semibold text-lg text-gray-800">Can I upgrade or downgrade my plan?</h3>
        <p className="text-gray-600 mt-2 text-sm">Yes, you can change your plan at any time from your account settings.</p>
      </div>
    </div>
  </div>
</section>
     {/* ////////////////////14 days trial section///////////// */}
     <section className="bg-gray-50 py-12">
  <div className="text-center max-w-lg mx-auto">
    {/* Heading */}
    <h2 className="text-2xl font-bold text-gray-800 mb-4">Start your 14 days free trial</h2>
    
    {/* Paragraph */}
    <p className="text-gray-600 mb-6">
      Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent.
    </p>
    
    {/* Call-to-Action Button */}
    <button className="bg-blue-500 text-white px-6 py-3 rounded-md text-sm font-medium shadow-md hover:bg-blue-600 transition">
      Try it now
    </button>
    
    {/* Social Icons */}
    <div className="flex justify-center space-x-6 mt-6 text-gray-500">
      <a href="#" className="hover:text-blue-500"><FaTwitter className="text-2xl" /></a>
      <a href="#" className="hover:text-blue-500"><FaFacebook className="text-2xl" /></a>
      <a href="#" className="hover:text-blue-500"><FaInstagram className="text-2xl" /></a>
      <a href="#" className="hover:text-blue-500"><FaLinkedin className="text-2xl" /></a>
    </div>
  </div>
</section>
<Footer/>
    </div>
  );
}

export default PricingPage;
