"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { updatedProductQuery } from "../../sanity/lib/quries";
import Link from "next/link";

interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  category: string;
  discountPercent?: number;
  new?: boolean;
  colors?: string[];
  sizes?: string[];
}

const ProductPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data: Product[] = await client.fetch(updatedProductQuery);
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p className="text-center py-8">Loading products...</p>;

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="py-8 px-4 bg-white shadow-lg max-w-7xl mx-auto mt-8">
        {/* Title Section */}
        <h1 className="text-3xl font-bold text-center mb-4">Products</h1>
        <p className="text-gray-500 text-center mb-6">
          Browse our latest collection of products
        </p>

        {/* Product Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white border border-gray-200 rounded-lg shadow-md hover:scale-105 transition-transform flex flex-col"
            >
              {/* Image Container */}
              <div className="w-full h-60 relative">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>

              {/* Product Details */}
              <div className="p-4 flex flex-col items-center">
                <h3 className="text-lg font-semibold text-gray-800 truncate">
                  {product.name}
                </h3>
                <div className="text-gray-500 text-sm mt-1">{product.category}</div>
                <div className="text-lg font-bold text-gray-800 mt-2">
                  ${product.price.toFixed(2)}
                </div>
                {product.discountPercent && (
                  <p className="text-sm text-red-500">
                    {product.discountPercent}% Off
                  </p>
                )}
                {product.new && (
                  <span className="inline-block bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full mt-2">
                    New
                  </span>
                )}

                {/* Color Options */}
                <div className="flex justify-center gap-2 mt-2">
                  {product.colors?.map((color, index) => (
                    <span
                      key={index}
                      className="block w-5 h-5 rounded-full border border-gray-300"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>

                {/* Size Information */}
                <p className="text-sm text-gray-600 mt-2">
                  Sizes: {product.sizes?.join(", ")}
                </p>

                <Link href={`/productdetails/${product._id}`}>
  <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
    View Product
  </button>
</Link>


              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
