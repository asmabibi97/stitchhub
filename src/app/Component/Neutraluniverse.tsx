import React from 'react'
import Image from 'next/image'

function Neutraluniverse() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center"> {/* New Section */}
    <div className="w-full max-w-[1044px] px-8 py-12 flex flex-col lg:flex-row items-center lg:space-x-16"> {/* Horizontal spacing for larger screens */}
      
      {/* Image Section */}
      <div className="flex justify-center items-center lg:w-1/2 w-full h-screen">
        <Image
          src="/images/neutraluniverse.png"
          alt="neutraluniverse"
          width={704}
          height={682}
          className="object-cover w-full h-screen" // Ensure the image covers the full height of the screen
        />
      </div>
  
      {/* Content Section */}
      <div className="flex flex-col justify-center items-center lg:items-start text-black w-full lg:w-1/2 space-y-6">
        <h1 className="text-base text-center lg:text-left mb-4">SUMMER 2020</h1>
        <h2 className="text-4xl sm:text-[40px] font-bold mb-8 text-center lg:text-left">
          Part of the Neural Universe
        </h2>
        <p className="text-base mb-6 text-center lg:text-left">
          We know how large objects will act, but things on a small scale.
        </p>
  
        {/* Button Section */}
        <div className="flex justify-center lg:justify-start space-x-4">
          <button className="bg-[#2DC071] text-white px-6 py-3 font-extrabold hover:bg-[#249f59] transition-colors">
            Buy Now
          </button>
          <button className="border-2 border-[#2DC071] text-[#2DC071] px-6 py-3 font-extrabold hover:bg-[#2DC071] hover:text-white transition-colors">
            Read More
          </button>
        </div>
      </div>
    </div>
  </div>
  
  

  )
}

export default Neutraluniverse
