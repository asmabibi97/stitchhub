"use client";

import Checkout from "../Component/checkout";
import { useCart } from "../context/CartContext"; 
import Image from "next/image";

const CartPage = () => {
  const { cartItems } = useCart();

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Your Cart</h1>

        {cartItems.length === 0 ? (
          <p className="text-center text-gray-600">Your cart is empty.</p>
        ) : (
          <div>
            <table className="w-full border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-2 border border-gray-300">Image</th>
                  <th className="p-2 border border-gray-300">Name</th>
                  <th className="p-2 border border-gray-300">Price</th>
                  <th className="p-2 border border-gray-300">Quantity</th>
                  <th className="p-2 border border-gray-300">Total</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td className="p-2 border border-gray-300">
                      <Image
                        src={item.imageUrl}
                        alt={item.name}
                        width={50}
                        height={50}
                        className="object-contain"
                      />
                    </td>
                    <td className="p-2 border border-gray-300">{item.name}</td>
                    <td className="p-2 border border-gray-300">${item.price}</td>
                    <td className="p-2 border border-gray-300">
                      {item.quantity}
                    </td>
                    <td className="p-2 border border-gray-300">
                      ${(item.price * item.quantity).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="mt-8 text-right">
              <h2 className="text-2xl font-bold text-gray-800">
                Total: ${totalAmount.toFixed(2)}
              </h2>
              <button
                className="px-6 py-3 bg-green-600 text-white rounded-lg mt-4 hover:bg-green-700 transition font-semibold"
                onClick={() => alert("Proceeding to Checkout...")}
              >
                Checkout
               
              </button>
              <Checkout/>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
