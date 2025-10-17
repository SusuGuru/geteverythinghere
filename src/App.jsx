import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products"; // Your product list page
import ProductDetails from "./pages/ProductDetails"; // Your product details page

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} /> {/* Products list */}
        <Route path="/products/:id" element={<ProductDetails />} /> {/* Product details */}
      </Routes>
    </Router>
  );
}
