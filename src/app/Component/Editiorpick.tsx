import React from 'react'


function Editiorpick() {
  return (
    <div className="flex flex-col justify-center items-center h-auto sm:h-screen space-y-6 px-4">
  {/* Text Section */}
  <div className="text-center space-y-4 mt-9 pt-9">
    <h1 className="font-bold text-2xl sm:text-4xl text-black">EDITOR’S PICK</h1>
    <p className="text-sm text-gray-600">
      Problems trying to resolve the conflict between
    </p>
  </div>

  {/* Images Section */}
  <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-6 mt-8 space-y-6 sm:space-y-0">
    {/* First Image (Wider Image) */}
    <div
      className="relative bg-cover bg-center w-full sm:w-[509px] h-[300px] sm:h-[500px] bg-no-repeat"
      style={{ backgroundImage: "url('/images/filter.PNG')" }}
    >
      <button className="absolute bottom-4 left-4 bg-white text-black px-4 py-2 font-bold">
        Men
      </button>
    </div>

    {/* Second Image (Standard Size) */}
    <div
      className="relative bg-cover bg-center w-full sm:w-[248px] h-[300px] sm:h-[500px] bg-no-repeat"
      style={{ backgroundImage: "url('/images/filter (1).png')" }}
    >
      <button className="absolute bottom-4 left-4 bg-white text-black px-4 py-2 font-bold">
        Women
      </button>
    </div>

    {/* Third Column (Two Stacked Images) */}
    <div className="flex flex-col space-y-6">
      {/* Top Image */}
      <div
        className="relative bg-cover bg-center w-full sm:w-[248px] h-[200px] sm:h-[240px] bg-no-repeat"
        style={{ backgroundImage: "url('/images/filter (2).png')" }}
      >
        <button className="absolute bottom-4 left-4 bg-white text-black px-4 py-2 font-bold">
          ACCESSORIES
        </button>
      </div>
      {/* Bottom Image */}
      <div
        className="relative bg-cover bg-center w-full sm:w-[248px] h-[200px] sm:h-[240px] bg-no-repeat"
        style={{ backgroundImage: "url('/images/filter (3).png')" }}
      >
        <button className="absolute bottom-4 left-4 bg-white text-black px-4 py-2 font-bold">
          Kids
        </button>
      </div>
    </div>
  </div>
</div>


  
  
  

  

  
  )
}

export default Editiorpick
