import React from "react";

import "./main.css";
import WelcomePageImage from '../../assets/WelcomePage.jpg';
import AboutUsImage from '../../assets/AboutUs.jpg';

import { Link } from "react-router-dom";

export const Main = () => {
  return (
    
    <div className="body">
      <div className="image-container">
        <img src={WelcomePageImage} alt="WelcomePage" className="welcome-image" />
        <div className="image-overlay">
          <h1>Welcome to our website!</h1>
          <p>Discover amazing products and great deals.</p>
          <div className="buttons">
              <Link to="/services" className="button">Go to Service Page</Link>
              <Link to="/shop" className="button">Go to Shop</Link>
            </div>
        </div>
      </div>
      <div className="about-us-section">
      <div className="about-us-image">
        <img src={AboutUsImage} alt="About Us" />
      </div>
      <div className="about-us-text">
        <h2>About Us</h2>
        <p>At our Tech Support Company, we specialize in providing a wide range of services and products to meet all your technology needs. 
          Our dedicated team of skilled technicians is committed to delivering exceptional service and ensuring customer satisfaction. 
          Whether you require repair services or are in search of top-notch tech products, we've got you covered.</p>
      </div>
    </div>

    <footer className="footer">
      <div className="footer-left">
        <h4>Contacts</h4>
        <ul>
          <li>Phone: 123-456-7890</li>
          <li>Email: info@example.com</li>
        </ul>
      </div>
      <div className="footer-middle">
        <h4>TechSupport</h4>
        <p>Test Description.</p>
      </div>
      <div className="footer-right">
        <h4>Location</h4>
        <p>123 Main Street, City, State, Country</p>
      </div>
    </footer>

    </div>
  );
};
