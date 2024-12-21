// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import { CartProvider } from "./contexts/CartContext";  // Ensure the path is correct


const App = () => {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} /> {/* Cart route */}
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
};

export default App;
