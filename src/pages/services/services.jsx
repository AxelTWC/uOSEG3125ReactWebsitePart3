import React from "react";

import "./services.css";
import ServicesImage from '../../assets/Services.jpg';
import AboutUsImage from '../../assets/ServicesDesc.png';

import { Link } from "react-router-dom";
export const Services = () => {
  return (
    <div className="body">
      <div className="services image-container">
        <img src={ServicesImage} alt="WelcomePage" className="services welcome-image" />
        <div className="image-overlay">
          <h1>About Our Services!
          </h1>

          <div className="buttons">
              <Link to="/shop" className="button">Book a Service</Link>
            </div>
        </div>
      </div>
      <div className="services about-us-section">
      <div className="services about-us-image">
        <img src={AboutUsImage} alt="About Us" />
      </div>
      <div className="services about-us-text">
        <h1>Repair Services</h1>
        
        <h2>Repair Services:</h2>
        <p>
        Our repair services encompass a comprehensive range of solutions to address any hardware or software issues you may encounter. From hardware repairs to software troubleshooting and even data recovery, we have the expertise to get your devices back in optimal working condition. Our skilled technicians possess the necessary skills and knowledge to tackle any repair challenge.
        </p>

        <h2>Tech Products Introduction:</h2>
        <p>
        In addition to our repair services, we offer a diverse selection of high-quality tech products. Our product inventory spans various categories, including computers, laptops, smartphones, tablets, and peripherals. We understand the importance of reliable and efficient devices, which is why we carry leading brands such as Dell, HP, Lenovo, Apple, Asus, Acer, Samsung, Google, and Amazon.
        </p>

        <h2>Data Recovery:</h2>
        <p>
        Losing valuable data can be a distressing experience, but our data recovery services are designed to help you retrieve and restore your important files. Our data recovery process involves expert data retrieval, restoration, and backup techniques. You can trust our technicians to handle your data with the utmost care and confidentiality.

        At our Tech Support Company, we pride ourselves on delivering top-notch services and products to meet your technology requirements. With our skilled technicians and extensive knowledge in hardware repair, software troubleshooting, and data recovery, we are your reliable partner for all things tech-related. Contact us today to experience our exceptional service and find the perfect tech solutions for your needs.
        </p>
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