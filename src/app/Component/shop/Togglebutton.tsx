import React from 'react'

function togglebutton() {
  return (
    <div>
      <div className="flex justify-center items-center space-x-4 py-8">
        <button className="py-2 px-4 border rounded text-gray-600 hover:bg-gray-200">1</button>
        <button className="py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700">2</button>
        <button className="py-2 px-4 border rounded text-gray-600 hover:bg-gray-200">3</button>
        <button className="py-2 px-4 border rounded text-gray-600 hover:bg-gray-200">Next</button>
      </div>
    </div>
  )
}

export default togglebutton
