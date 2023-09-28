import React from 'react';
import './Footer.css'; // Create a separate CSS file for your footer styles

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: contact@example.com</p>
          <p>Phone: +123-456-7890</p>
        </div>
        <div className="footer-bottom">
        <p>&copy; 2023 Animefinder. All rights reserved.</p>
      </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
     
    </footer>
  );
}

export default Footer;
