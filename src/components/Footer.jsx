import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import './components.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-info">
            <h3>Spice & Brew</h3>
            <p>Where Every Cup Tells a Story. Experience the finest specialty coffee and fresh bakery items in the heart of Bandra.</p>
            <div className="social-links">
              <a href="#" className="social-icon" aria-label="Follow us on Facebook"><FaFacebookF /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Follow us on Instagram"><FaInstagram /></a>
              <a href="#" className="social-icon" aria-label="Follow us on Twitter"><FaTwitter /></a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/menu">Menu</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/contact">Reservation</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact Us</h4>
            <ul>
              <li>
                <FaMapMarkerAlt className="contact-icon" />
                <span>Shop No. 5, Hill Road, Bandra West, Mumbai, Maharashtra 400050</span>
              </li>
              <li>
                <FaPhoneAlt className="contact-icon" />
                <span>+91 22 1234 5678</span>
              </li>
              <li>
                <FaEnvelope className="contact-icon" />
                <span>hello@spiceandbrew.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Spice & Brew Cafe. All Rights Reserved.</p>
          <p>Designed with Love in Mumbai</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
