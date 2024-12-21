import React, { useState, useEffect } from "react";
import { useCart } from "../contexts/CartContext"; // Import the useCart hook

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart, cart } = useCart(); // Get addToCart and cart from context

  // Total item count in cart
  const getCartItemCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="py-16 text-center">
        <h1 className="text-2xl font-semibold">Loading products...</h1>
      </div>
    );
  }

  return (
    <div className="py-16 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded-lg shadow-md flex flex-col h-full transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-pink-50"
            >
              <div className="w-full h-64 mb-4 relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <div className="flex flex-col justify-between flex-grow">
                <h2 className="text-lg font-semibold mb-2 hover:text-pink-600 transition-colors">
                  {product.title}
                </h2>
                <p className="text-gray-600 mb-4">{product.description.slice(0, 100)}...</p>
                <p className="font-bold text-pink-600 mb-4">${product.price}</p>
                <div className="flex justify-center items-center mt-4">
                  <button
                    onClick={() => addToCart(product)} // Add product to cart on click
                    className="w-full bg-pink-600 text-white py-2 px-6 rounded-full text-sm font-medium hover:bg-pink-500 hover:shadow-lg transition-all duration-300"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
