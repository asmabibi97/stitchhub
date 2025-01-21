// components/Filter.tsx
import React, { useState } from 'react';

interface FilterProps {
  onFilter: (filters: any) => void;
}

const Filter: React.FC<FilterProps> = ({ onFilter }) => {
  const [selectedSize, setSelectedSize] = useState<string | undefined>('');
  const [selectedColor, setSelectedColor] = useState<string | undefined>('');
  const [priceRange, setPriceRange] = useState([0, 500]);

  const handleApplyFilters = () => {
    onFilter({
      size: selectedSize,
      color: selectedColor,
      price: priceRange,
    });
  };

  return (
    <div className="border p-4 bg-white rounded-lg shadow-md">
      <h3 className="font-semibold text-xl mb-4">Filter Products</h3>

      {/* Size Filter */}
      <div className="mb-4">
        <label className="block font-medium">Size</label>
        <select
          value={selectedSize}
          onChange={(e) => setSelectedSize(e.target.value)}
          className="mt-2 p-2 border rounded-md w-full"
        >
          <option value="">All Sizes</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
        </select>
      </div>

      {/* Color Filter */}
      <div className="mb-4">
        <label className="block font-medium">Color</label>
        <select
          value={selectedColor}
          onChange={(e) => setSelectedColor(e.target.value)}
          className="mt-2 p-2 border rounded-md w-full"
        >
          <option value="">All Colors</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="black">Black</option>
          <option value="white">White</option>
        </select>
      </div>

      {/* Price Range Filter */}
      <div className="mb-4">
        <label className="block font-medium">Price Range</label>
        <input
          type="range"
          min="0"
          max="500"
          value={priceRange[1]}
          onChange={(e) =>
            setPriceRange([0, parseInt(e.target.value)])
          }
          className="w-full mt-2"
        />
        <div className="flex justify-between mt-2">
          <span>$0</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>

      {/* Apply Button */}
      <button
        onClick={handleApplyFilters}
        className="w-full bg-blue-600 text-white p-2 rounded-lg"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default Filter;
