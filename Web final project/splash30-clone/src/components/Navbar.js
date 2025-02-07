import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <img
            src="https://splash30.com/cdn/shop/files/logosplashjpeg.jpeg-removebg-preview_1_160x.png?v=1732888847"
            alt="Splash30 Logo"
            className="logo-img"
          />
        </Link>

        {/* Navigation Links */}
        <ul className="nav-links">
          <li className="nav-item">
            <Link to="/sale" className="nav-link">
              Sale
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/clothing" className="nav-link">
              Clothing
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/bags" className="nav-link">
              Bags
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/fitness-accessories" className="nav-link">
              Fitness Accessories
            </Link>
          </li>
        </ul>

        {/* Account and Cart Icons */}
        <div className="icon-links">
          <Link to="/login" className="icon-link">
            <img
              src="https://cdn-icons-png.flaticon.com/512/892/892781.png"
              alt="Login"
              className="icon-img"
            />
          </Link>
          <Link to="/signup" className="icon-link">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1828/1828454.png"
              alt="Signup"
              className="icon-img"
            />
          </Link>
          <Link to="/cart" className="icon-link">
            <img
              src="https://cdn-icons-png.flaticon.com/512/34/34568.png"
              alt="Cart"
              className="icon-img"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
