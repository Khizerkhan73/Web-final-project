import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/HomePage";
import ClothingCategory from "./components/ClothingCategory";
import BagsCategory from "./components/BagsCategory";
import AccessoriesCategory from "./components/AccessoriesCategory";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div>
        {/* Navbar is outside the Routes to display on all pages */}
        <Navbar />

        {/* Page-specific routes */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/sale" element={<Homepage />} />
          <Route path="/clothing" element={<ClothingCategory />} />
          <Route path="/bags" element={<BagsCategory />} />
          <Route path="/fitness-accessories" element={<AccessoriesCategory />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<div>Cart Page</div>} />
        </Routes>

        {/* Footer can be displayed globally or per route */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
