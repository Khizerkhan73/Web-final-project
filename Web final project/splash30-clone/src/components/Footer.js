import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>
            Splash30 is a premier retailer offering a wide range of high-quality products, including clothing, bags, and accessories. Our mission is to provide exceptional products and services to our valued customers.
          </p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/clothing">Clothing</a></li>
            <li><a href="/bags">Bags</a></li>
            <li><a href="/accessories">Accessories</a></li>
            <li><a href="/sale">Sale</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: support@splash30.com</p>
          <p>Phone: +92 123 456 7890</p>
          <p>Address: 123 Splash Street, Islamabad, Pakistan</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Splash30. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
