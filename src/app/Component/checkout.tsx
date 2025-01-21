"use client";

const Checkout = () => {
  const handleCheckout = () => {
    alert("Order placed successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 ">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Checkout</h1>

        <form className="bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-300 p-2 rounded-lg"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 p-2 rounded-lg"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="address" className="block text-gray-600 mb-2">
              Address
            </label>
            <textarea
              id="address"
              className="w-full border border-gray-300 p-2 rounded-lg"
              rows={4}
            ></textarea>
          </div>

          <button
            type="button"
            onClick={handleCheckout}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
