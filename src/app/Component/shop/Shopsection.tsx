'use client';

import { AiOutlineAppstore, AiOutlineBars } from 'react-icons/ai';
import { BiChevronDown } from 'react-icons/bi';


import Image from 'next/image';
import Logos from './Logos';

const ShopSection = () => {
  return (
    <div className="px-4 md:px-16 py-8">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-4">
        <h1 className="text-2xl font-bold text-gray-800">Shop</h1>
        <nav className="text-sm text-gray-500">
          <a href="/" className="hover:text-blue-600">Home</a> <span className="mx-2">›</span> <span>Shop</span>
        </nav>
      </div>

      {/* Items Grid */}
      <div className="py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {/* First Item */}
        <div className="relative">
          <Image
            src="/images/media bg-cover.png" 
            alt="Clothing Item 1"
            width={400}
            height={500}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center text-white text-lg font-semibold">
            CLOTHS - 5 Items
          </div>
        </div>

        {/* Second Item */}
        <div className="relative">
          <Image
            src="/images/media bg-cover 6.jpg" 
            alt="Clothing Item 2"
            width={400}
            height={500}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center text-white text-lg font-semibold">
            CLOTHS - 5 Items
          </div>
        </div>

        {/* Third Item */}
        <div className="relative">
          <Image
            src="/images/media bg-cover 5.jpg" 
            alt="Clothing Item 3"
            width={400}
            height={500}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center text-white text-lg font-semibold">
            CLOTHS - 5 Items
          </div>
        </div>

        {/* Fourth Item */}
        <div className="relative">
          <Image
            src="/images/media bg-cover (1).png" 
            alt="Clothing Item 4"
            width={400}
            height={500}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center text-white text-lg font-semibold">
            CLOTHS - 5 Items
          </div>
        </div>

        {/* Fifth Item */}
        <div className="relative">
          <Image
            src="/images/media bg-cover (1).png" 
            alt="Clothing Item 5"
            width={400}
            height={500}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center text-white text-lg font-semibold">
            CLOTHS - 5 Items
          </div>
        </div>
      </div>

      {/* Filters and Views */}
      <div className="flex flex-col md:flex-row justify-between items-center bg-gray-100 p-4 rounded-lg">
        <p className="text-gray-600">Showing all 12 results</p>
        <div className="flex items-center space-x-4">
          <span className="text-gray-600">Views:</span>
          <div className="flex space-x-2">
            <button className="p-2 border rounded hover:bg-gray-200">
              <AiOutlineAppstore className="text-xl" />
            </button>
            <button className="p-2 border rounded hover:bg-gray-200">
              <AiOutlineBars className="text-xl" />
            </button>
          </div>
          <div className="relative">
            <button className="flex items-center space-x-1 border p-2 rounded hover:bg-gray-200">
              <span>Popularity</span>
              <BiChevronDown />
            </button>
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Filter
          </button>
        </div>
      </div>
<Logos/>
     
    </div>
  );
};

export default ShopSection;
