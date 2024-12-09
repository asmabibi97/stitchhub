import React from 'react';
import Image from 'next/image';

import { FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa';


import Logos from '../shop/Logos';

const Content2 = () => {
  return (
    <div>
    <div className="px-4 md:px-16 py-8">
      {/* Section 1: Two Containers */}
      <div className="flex flex-col md:flex-row items-center justify-centre py-16 ">
        {/* Left Side: Two Headings */}
        <div className="mb-8 md:mb-0 w-2/4">
            <h2 className='text-sm text-[#E74040]'>Problems trying</h2>
          <h1 className="text-lg md:text-2xl font-bold text-gray-800 mb-4">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </h1>
          
        </div>

        {/* Right Side: Paragraph */}
        <div className="md:max-w-md text-gray-700 w-2/4">
          <p>
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics 
          </p>
        </div>
      </div>

      {/* Section 2: Stats Section */}
      <div className="py-16 bg-white rounded-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {/* Stat 1 */}
          <div>
            <h3 className="text-3xl font-bold text-gray-800">150k</h3>
            <p className="text-gray-600">Happy Customers</p>
          </div>
          {/* Stat 2 */}
          <div>
            <h3 className="text-3xl font-bold text-gray-800">150k</h3>
            <p className="text-gray-600">Monthly Users</p>
          </div>
          {/* Stat 3 */}
          <div>
            <h3 className="text-3xl font-bold text-gray-800">15</h3>
            <p className="text-gray-600">Countries Worldwide</p>
          </div>
          {/* Stat 4 */}
          <div>
            <h3 className="text-3xl font-bold text-gray-800">100+</h3>
            <p className="text-gray-600">Top Partners</p>
          </div>
        </div>
      </div>

      {/* Section 3: Image in the Center */}
      <div className="py-16">
        <div className="flex justify-center">
          <Image
            src="/images/Video card.jpg" 
            alt="Centered Section Image"
            width={989}
            height={540}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
{/*///////////////////////////// Meet Our Team Section////////// */}
{/* Meet Our Team Section */}
<div className="px-6 md:px-16 py-12 bg-gray-100">
  {/* Heading and Paragraph */}
  <div className="text-center mb-8">
    <h2 className="text-4xl font-bold text-gray-800 mb-2">Meet Our Team</h2>
    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
      Our team consists of talented professionals committed to delivering excellence and creating meaningful experiences.
    </p>
  </div>

  {/* Team Members */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-8">
    {/* Team Member 1 */}
    <div className="text-center">
      <Image
        src="/images/team-1-user-1.jpg"
        alt="Team Member 1"
        width={200}
        height={200}
        className="mx-auto"
      />
      <h3 className="mt-2 text-xl font-semibold text-gray-800">Username</h3>
      <p className="text-gray-500">Profession</p>
      <div className="flex justify-center space-x-3 mt-2">
        <a href="#" className="text-blue-600 hover:text-blue-800">
          <FaFacebook size={20} />
        </a>
        <a href="#" className="text-blue-600 hover:text-blue-800">
          <FaInstagram size={20} />
        </a>
        <a href="#" className="text-blue-600 hover:text-blue-800">
          <FaTwitter size={20} />
        </a>
      </div>
    </div>

    {/* Team Member 2 */}
    <div className="text-center">
      <Image
        src="/images/team-1-user-2.jpg"
        alt="Team Member 2"
        width={200}
        height={200}
        className="mx-auto"
      />
      <h3 className="mt-2 text-xl font-semibold text-gray-800">Username</h3>
      <p className="text-gray-500">Profession</p>
      <div className="flex justify-center space-x-3 mt-2">
        <a href="#" className="text-blue-600 hover:text-blue-800">
          <FaFacebook size={20} />
        </a>
        <a href="#" className="text-blue-600 hover:text-blue-800">
          <FaInstagram size={20} />
        </a>
        <a href="#" className="text-blue-600 hover:text-blue-800">
          <FaTwitter size={20} />
        </a>
      </div>
    </div>

    {/* Team Member 3 */}
    <div className="text-center">
      <Image
        src="/images/team-1-user-3.jpg"
        alt="Team Member 3"
        width={200}
        height={200}
        className="mx-auto"
      />
      <h3 className="mt-2 text-xl font-semibold text-gray-800">Username</h3>
      <p className="text-gray-500">Profession</p>
      <div className="flex justify-center space-x-3 mt-2">
        <a href="#" className="text-blue-600 hover:text-blue-800">
          <FaFacebook size={20} />
        </a>
        <a href="#" className="text-blue-600 hover:text-blue-800">
          <FaInstagram size={20} />
        </a>
        <a href="#" className="text-blue-600 hover:text-blue-800">
          <FaTwitter size={20} />
        </a>
      </div>
    </div>
  </div>
</div>



   {/* //////////////////////////////// Brand Logo Section //////////////////////////////// */}
<div className="bg-gray-100 py-16">
  {/* Heading and Paragraph Section */}
  <div className="text-center mb-12 px-4">
    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
      Big Companies Are Here
    </h1>
    <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
      Problems trying to resolve the conflict between the two major realms of Classical Physics: Newtonian mechanics.
    </p>
  </div>

  <Logos/>
</div>

{/* ////////////////////////////two column section///////////////////////////////////// */}

<div className="w-full h-screen">
  {/* First Section */}
  <div className="flex flex-col md:flex-row w-full">
    {/* Left Column: Text Content */}
    <div className="bg-[#2A7CC7] md:w-[80%] w-full flex justify-center items-center p-8 md:p-16">
      <div className="text-center max-w-md mx-auto">
        <h1 className="text-base text-white">WORK WITH US</h1>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Now Let’s grow Yours</h2>
        <p className="text-base md:text-lg text-white mb-6 leading-relaxed">
          The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th
        </p>
        <button className="py-2 px-4 border border-white text-white font-medium hover:bg-white hover:text-[#2A7CC7] transition duration-300">
          Button
        </button>
      </div>
    </div>

    {/* Right Column: Image */}
    <div className="md:w-[30%] w-full flex justify-center items-center">
      <Image
        src="/images/unsplash_vjMgqUkS8q8.png" 
        alt="Empower Your Business"
        width={400}
        height={400}
        className="object-contain"
      />
    </div>
  </div>

 
</div>

    </div>
  );
};

export default Content2;
