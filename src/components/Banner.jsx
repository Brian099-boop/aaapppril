import React from "react";
import { Link } from "react-router-dom"; // Import Link for routing

const Banner = () => {
  return (
    <div>
      {/* Banner Section */}
      <div className="relative">
        <img
          src="backgr.webp"
          alt="Banner"
          className="w-full h-[680px] object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-10">
          <div className="text-center text-white px-6 py-4 max-w-3xl">
            <h1
              className="text-5xl font-bold mb-4"
              style={{ fontFamily: "Sephora, sans-serif" }}
            >
              Welcome to Aprils Beauty Products
            </h1>
            <p
              className="text-xl mb-6"
              style={{ fontFamily: "Sephora, sans-serif" }}
            >
              Discover the best beauty products curated just for you. Shop now
              and embrace your glow!
            </p>
            <Link
              to="/products" // Navigate to Products page
              className="inline-block bg-pink-600 text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-pink-500 transition-colors"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div id="products" className="py-16 bg-gray-100">
        <h2
          className="text-center text-3xl font-semibold mb-8"
          style={{ fontFamily: "Sephora, sans-serif" }}
        >
          Featured Products
        </h2>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 px-6">
            {/* Product 1 */}
            <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center hover:shadow-lg hover:bg-pink-100 transition-all duration-300">
              <img
                src="1.webp"
                alt="Product 1"
                className="w-full h-64 object-cover rounded-md mb-4 transform hover:scale-105 transition-transform duration-300"
              />
              <h3 className="text-lg font-semibold mb-2 hover:text-pink-600 transition-colors">
                IT Cosmetics
              </h3>
              <p className="text-gray-500 mb-4 hover:text-gray-700 transition-colors">
                Delivers a radiant glow while hydrating your skin for a flawless
                finish.
              </p>
              <div className="flex justify-center w-full">
                <Link
                  to="/products"
                  className="bg-pink-600 text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-pink-500 transition-colors"
                >
                  Shop Now
                </Link>
              </div>
            </div>

            {/* Product 2 */}
            <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center hover:shadow-lg hover:bg-pink-100 transition-all duration-300">
              <img
                src="22.webp"
                alt="Product 2"
                className="w-full h-64 object-cover rounded-md mb-4 transform hover:scale-105 transition-transform duration-300"
              />
              <h3 className="text-lg font-semibold mb-2 hover:text-pink-600 transition-colors">
                Pixi
              </h3>
              <p className="text-gray-500 mb-4 hover:text-gray-700 transition-colors">
                Brightens and nourishes your skin, leaving it soft, smooth, and
                glowing.
              </p>
              <div className="flex justify-center w-full">
                <Link
                  to="/products"
                  className="bg-pink-600 text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-pink-500 transition-colors"
                >
                  Shop Now
                </Link>
              </div>
            </div>

            {/* Product 3 */}
            <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center hover:shadow-lg hover:bg-pink-100 transition-all duration-300">
              <img
                src="3.webp"
                alt="Product 3"
                className="w-full h-64 object-cover rounded-md mb-4 transform hover:scale-105 transition-transform duration-300"
              />
              <h3 className="text-lg font-semibold mb-2 hover:text-pink-600 transition-colors">
                Benefit Cosmetics
              </h3>
              <p className="text-gray-500 mb-4 hover:text-gray-700 transition-colors">
                Gives your skin a smooth, radiant finish with lasting hydration.
              </p>
              <div className="flex justify-center w-full">
                <Link
                  to="/products"
                  className="bg-pink-600 text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-pink-500 transition-colors"
                >
                  Shop Now
                </Link>
              </div>
            </div>

            {/* Product 4 */}
            <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center hover:shadow-lg hover:bg-pink-100 transition-all duration-300">
              <img
                src="4.webp"
                alt="Product 4"
                className="w-full h-64 object-cover rounded-md mb-4 transform hover:scale-105 transition-transform duration-300"
              />
              <h3 className="text-lg font-semibold mb-2 hover:text-pink-600 transition-colors">
                Hourglass
              </h3>
              <p className="text-gray-500 mb-4 hover:text-gray-700 transition-colors">
                Provides a flawless, luminous finish with a silky-smooth
                texture.
              </p>
              <div className="flex justify-center w-full">
                <Link
                  to="/products"
                  className="bg-pink-600 text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-pink-500 transition-colors"
                >
                  Shop Now
                </Link>
              </div>
            </div>

            {/* Product 5 */}
            <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center hover:shadow-lg hover:bg-pink-100 transition-all duration-300">
              <img
                src="5.webp"
                alt="Product 5"
                className="w-full h-64 object-cover rounded-md mb-4 transform hover:scale-105 transition-transform duration-300"
              />
              <h3 className="text-lg font-semibold mb-2 hover:text-pink-600 transition-colors">
                RevitaLash
              </h3>
              <p className="text-gray-500 mb-4 hover:text-gray-700 transition-colors">
                Nourishes lashes for a fuller, more voluminous look.
              </p>
              <div className="flex justify-center w-full">
                <Link
                  to="/products"
                  className="bg-pink-600 text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-pink-500 transition-colors"
                >
                  Shop Now
                </Link>
              </div>
            </div>

            {/* Product 6 */}
            <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center hover:shadow-lg hover:bg-pink-100 transition-all duration-300">
              <img
                src="6.webp"
                alt="Product 6"
                className="w-full h-64 object-cover rounded-md mb-4 transform hover:scale-105 transition-transform duration-300"
              />
              <h3 className="text-lg font-semibold mb-2 hover:text-pink-600 transition-colors">
                SK-II
              </h3>
              <p className="text-gray-500 mb-4 hover:text-gray-700 transition-colors">
                Rejuvenates skin, leaving it smooth, radiant, and visibly
                refreshed.
              </p>
              <div className="flex justify-center w-full">
                <Link
                  to="/products"
                  className="bg-pink-600 text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-pink-500 transition-colors"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
