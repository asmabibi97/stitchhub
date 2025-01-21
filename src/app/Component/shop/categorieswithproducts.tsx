"use client";

import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";

interface CategoryPreview {
  category: string;
  imageUrl: string;
}

const CategoriesPreview = () => {
  const [categories, setCategories] = useState<CategoryPreview[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data: CategoryPreview[] = await client.fetch(
          `*[_type == "products"]{
            category,
            "imageUrl": image.asset->url
          } | order(category asc)[0..-1]`
        );

        // Group by category and pick one image for each
        const grouped = Array.from(
          data.reduce((map, product) => {
            if (!map.has(product.category)) {
              map.set(product.category, product.imageUrl);
            }
            return map;
          }, new Map<string, string>())
        ).map(([category, imageUrl]) => ({ category, imageUrl }));

        setCategories(grouped);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map(({ category, imageUrl }) => (
          <Link
            key={category}
            href={`/categories/${category}`}
            className="block border rounded-lg p-4 shadow-md bg-white hover:shadow-lg transition"
          >
            <Image
              src={imageUrl}
              alt={category}
              width={300}
              height={200}
              className="w-full h-40 object-cover rounded"
            />
            <h3 className="text-lg font-semibold mt-2 capitalize">{category}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPreview;
