// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa"; // Import the cart icon
import { useCart } from "../contexts/CartContext"; // Import the useCart hook

const Header = () => {
  const { cart } = useCart(); // Get the cart from context

  // Total item count in cart
  const getCartItemCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <header className="bg-pink-100 border-b-2 border-pink-300 shadow-md sticky top-0 z-10">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center space-x-3">
          <img src="oloo.jpg" alt="Logo" className="w-12 h-12 rounded-full" />
          <h1 className="text-3xl font-bold text-pink-700">
            Aprils Beauty Products
          </h1>
        </div>
        <nav>
          <ul className="flex space-x-6 text-gray-700 font-medium">
            <li>
              <Link to="/" className="hover:text-pink-600 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="hover:text-pink-600 transition-colors"
              >
                Products
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-pink-600 transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-pink-600 transition-colors"
              >
                Contact
              </Link>
            </li>
            {/* Cart Icon Link with Item Count */}
            <li>
              <Link
                to="/cart"
                className="hover:text-pink-600 transition-colors flex items-center space-x-2"
              >
                <FaShoppingCart className="text-lg" />
                <span className="text-sm font-bold">
                  {getCartItemCount() > 0 ? getCartItemCount() : ""}
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
