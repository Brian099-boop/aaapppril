import React from "react";

const Contact = () => {
  return (
    <div className="py-16 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4 text-center">Contact Us</h1>
      <p className="text-gray-600 text-center mb-8">Feel free to reach out to us anytime!</p>

      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">Our Contact Information</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-lg text-gray-700 mb-2">Phone Numbers</h3>
              <ul className="list-none">
                <li className="text-gray-600 mb-2">Customer Support: (555) 123-4567</li>
                <li className="text-gray-600 mb-2">Sales Inquiries: (555) 234-5678</li>
                <li className="text-gray-600 mb-2">General Inquiries: (555) 345-6789</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-gray-700 mb-2">Emails</h3>
              <ul className="list-none">
                <li className="text-gray-600 mb-2">Support: support@aprilbeauty.com</li>
                <li className="text-gray-600 mb-2">Sales: sales@aprilbeauty.com</li>
                <li className="text-gray-600 mb-2">General Inquiries: info@aprilbeauty.com</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">Our Pages</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-lg text-gray-700 mb-2">Visit Our Pages</h3>
              <ul className="list-none">
                <li className="text-blue-600 hover:underline mb-2">
                  <a href="#home">Home</a>
                </li>
                <li className="text-blue-600 hover:underline mb-2">
                  <a href="#about">About Us</a>
                </li>
                <li className="text-blue-600 hover:underline mb-2">
                  <a href="#products">Products</a>
                </li>
                <li className="text-blue-600 hover:underline mb-2">
                  <a href="#contact">Contact Us</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-gray-700 mb-2">Social Media</h3>
              <ul className="list-none">
                <li className="text-blue-600 hover:underline mb-2">
                  <a href="https://facebook.com/aprilbeauty" target="_blank" rel="noopener noreferrer">
                    Facebook
                  </a>
                </li>
                <li className="text-blue-600 hover:underline mb-2">
                  <a href="https://twitter.com/aprilbeauty" target="_blank" rel="noopener noreferrer">
                    Twitter
                  </a>
                </li>
                <li className="text-blue-600 hover:underline mb-2">
                  <a href="https://instagram.com/aprilbeauty" target="_blank" rel="noopener noreferrer">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-600">
            You can reach us through any of the above options. We look forward to connecting with you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
