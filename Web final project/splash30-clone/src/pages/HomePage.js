import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Signup from '../components/Signup';
import Login from '../components/Login';
import HeroSection from '../components/HeroSection';
import BestSellers from '../components/BestSellers';
import ClothingCategory from '../components/ClothingCategory';
import BagsCategory from '../components/BagsCategory';
import AccessoriesCategory from '../components/AccessoriesCategory';
import Footer from '../components/Footer';
import './Homepage.css';

const Homepage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the backend API
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="homepage">
      <Navbar />
      <HeroSection />
      <BestSellers products={products} />
      <ClothingCategory />
      <BagsCategory />
      <AccessoriesCategory />
      <Footer />

    </div>
  );
};

export default Homepage;
