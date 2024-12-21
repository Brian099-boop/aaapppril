import React from "react";

const About = () => {
  return (
    <div className="text-center font-dancing"> {/* Apply the custom font */}
      <div className="relative">
        <img
          src="/bc.jpg" // The image is directly in the public folder
          alt="April's Beauty Products"
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-40 p-6">
          <h1 className="text-3xl font-bold mb-4">
            About Us
          </h1>
          <p className="text-gray-200 mb-6">
            Welcome to April's Beauty Products! Discover our story and vision as we aim to bring beauty and confidence to everyone.
          </p>
          <h2 className="text-4xl font-bold mb-4">
            Empowering Beauty and Confidence
          </h2>
          <p className="text-lg mb-4">
            Discover our curated selection of beauty products to enhance your natural glow and radiance.
          </p>
          <p className="text-lg mb-4">
            At April's Beauty Products, we believe that beauty goes beyond skin deep. We are passionate about providing top-tier beauty solutions that empower you to feel confident and radiant. Our carefully curated selection includes everything from skincare to makeup, designed to enhance your natural beauty.
          </p>
          <p className="text-lg mb-4">
            Our commitment to quality and sustainability ensures that every product we offer is not only effective but also kind to your skin and the environment. Whether you're looking for a new skincare regimen or the perfect makeup essentials, we have something for everyone.
          </p>
          <p className="text-lg">
            Join us on a journey to glowing, healthy skin and discover the beauty within.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
