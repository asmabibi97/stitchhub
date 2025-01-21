"use client";

import React from "react";
import { useCart } from "../context/CartContext";

interface AddToCartProps {
  product: {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
  };
}

const AddToCart: React.FC<AddToCartProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      imageUrl: product.imageUrl,
      quantity: 1,
    });
  };

  return (
    <div>
      <button
        onClick={handleAddToCart}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCart;
