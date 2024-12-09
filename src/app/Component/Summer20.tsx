import React from 'react';
import Image from 'next/image';

function Summer20() {
  return (
    <div className="w-full bg-[#23856D] min-h-screen flex justify-center items-center relative">
      {/* Main Content */}
      <div className="w-full max-w-[1044px] px-8 py-12 flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 relative z-10">
        
        {/* Text Section */}
        <div className="flex flex-col justify-center items-center lg:items-start text-white w-full lg:w-1/2 space-y-6">
          <h1 className="text-base text-center lg:text-left">SUMMER 2020</h1>
          <h2 className="text-4xl sm:text-5xl font-bold text-center lg:text-left">
            Vita Classic Product
          </h2>
          <p className="text-base text-center lg:text-left">
            We know how large objects will act, We know how objects will act, We know.
          </p>
          <button className="bg-[#2DC071] text-white px-6 py-3 font-extrabold mx-auto lg:mx-0 hover:bg-[#249f59] transition-colors">
            Add to cart
          </button>
        </div>
      </div>

      {/* Responsive Image Section */}
      <div className="absolute right-0 bottom-0 w-full max-w-[443px] sm:w-[60%] lg:w-[443px]  hidden lg:block ">
        <Image
          src="/images/shophero.png"
          alt="shophero"
          width={443}
          height={685}
          className="w-full h-auto object-contain lg:object-cover"
        />
      </div>
     {/* Image Section for Mobile (Below Text) */}
     <div className="w-full flex justify-center items-center mt-8 lg:hidden">
          <Image
            src="/images/shophero.png"
            alt="shophero"
            width={443}
            height={685}
            className="w-full h-auto object-contain"
          />
        </div>
    </div>
  );
}

export default Summer20;
