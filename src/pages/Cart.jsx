import React from "react";
import { useCart } from "../contexts/CartContext"; // Import the useCart hook

const Cart = () => {
  const { cart, removeFromCart } = useCart(); // Access the cart and functions from context

  // Calculate the total cost
  const totalCost = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  // Handle removing item from cart
  const handleRemove = (productId) => {
    removeFromCart(productId);
  };

  if (cart.length === 0) {
    return (
      <div className="py-16 text-center">
        <h1 className="text-2xl font-semibold">Your Cart is Empty</h1>
      </div>
    );
  }

  return (
    <div className="py-16 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-8">Your Cart</h1>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {cart.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 rounded-lg shadow-md flex flex-col h-full"
            >
              <div className="w-full h-56 mb-4 relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <div className="flex flex-col justify-between flex-grow">
                <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
                <p className="text-gray-600 mb-4">Quantity: {item.quantity}</p>
                <p className="font-bold text-pink-600 mb-4">
                  ${item.price * item.quantity}
                </p>

                {/* Remove and Buy Now Buttons with space in between */}
                <div className="flex justify-between space-x-10">
                  <button
                    onClick={() => handleRemove(item.id)} // Remove product on click
                    className="bg-red-600 text-white py-2 px-4 rounded-full text-sm font-medium hover:bg-red-500 transition-all duration-300"
                  >
                    Remove
                  </button>

                  <button
                    className="bg-pink-600 text-white py-2 px-4 rounded-full text-sm font-medium hover:bg-pink-500 transition-all duration-300"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Total Cost with Text */}
        <div className="mt-8 flex justify-center items-center space-x-2 text-lg font-semibold">
          <p>Total Cost:</p>
          <p className="text-pink-600">${totalCost.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
