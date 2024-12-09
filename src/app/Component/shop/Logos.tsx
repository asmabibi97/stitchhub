import React from 'react'
import { FaStripe, FaAws, FaReddit , FaLeaf} from 'react-icons/fa'; //  icons for Lyft, Stripe, AWS, Reddit, and Twitter
import { FaLyft } from "react-icons/fa6";

import { FaHooli } from "react-icons/fa";

function Logos() {
  return (
    <div >
       {/* Logos Section with React Icons */}
       <div className="flex flex-wrap justify-center items-center gap-8 py-8  bg-gray-100 h-auto">
        {/* Hooli Logo (custom placeholder icon) */}
        <div className="w-24 h-12 flex justify-center items-center">
          <FaHooli className="text-6xl text-gray-600" /> 
        </div>

        {/* Lyft Logo (car icon as a placeholder for Lyft) */}
        <div className="w-24 h-12 flex justify-center items-center">
          <FaLyft className="text-6xl text-gray-600" /> 
        </div>

        {/* Stripe Logo */}
        <div className="w-24 h-12 flex justify-center items-center">
          <FaLeaf className="text-6xl text-gray-600" />
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
    </div>
  )
}

export default Logos
