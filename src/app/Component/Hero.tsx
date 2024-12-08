import React from 'react'


function Hero() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-[716px] bg-cover bg-center bg-[url('/images/background.jpg')]">
    <div className="flex flex-col justify-center items-start w-full max-w-[1044px] text-white px-8 py-12">
      <h1 className='text-base mb-4 text-center sm:text-left'>SUMMER 2020</h1>
      <h2 className='text-4xl sm:text-5xl font-bold mb-8 text-center sm:text-left'>
        NEW COLLECTION
      </h2>
      <p className='text-base mb-6 max-w-[700px] text-center sm:text-left'>
        We know how large objects will act, <br /> but things on a small scale.
      </p>
      <button className='bg-[#2DC071] text-white px-6 font-extrabold py-3'>
        Shop Now
      </button>
    </div>
  </div>
  
  
  
  
  
  
  )
}

export default Hero

