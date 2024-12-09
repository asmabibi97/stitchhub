import React from 'react';
import Image from 'next/image';

function FeatureProduct2() {
  // Product data array
  const products = [
    { src: '/images/filter.png', alt: 'Product 1' },
    { src: '/images/filter (1).png', alt: 'Product 2' },
    { src: '/images/product000.png', alt: 'Product 3' },
    { src: '/images/filter (3).png', alt: 'Product 4' },
    { src: '/images/product-cover-2-1.png', alt: 'Product 5' },
    { src: '/images/prduct01.png', alt: 'Product 6' },
    { src: '/images/product02.png', alt: 'Product 7' },
    { src: '/images/unsplash_vjMgqUkS8q8.png', alt: 'Product 8' },
    { src: '/images/product-cover-5 (3).png', alt: 'Product 9' },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-[1200px] px-8 py-12 bg-white shadow-lg rounded-lg mt-24">
        <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-md hover:scale-105 transition-transform"
            >
              <Image
                src={product.src}
                alt={product.alt}
                width={500}
                height={300}
                className="w-full h-[300px] object-cover rounded-t-lg"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold">Graphic Design</h3>
                <p className="text-gray-500">English Department</p>
                <div className="text-lg font-bold text-gray-800 mt-2">
                  $11.68 - $34.48
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeatureProduct2;
