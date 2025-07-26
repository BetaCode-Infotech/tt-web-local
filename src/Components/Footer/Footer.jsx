import "./Footer.css";
import React from "react";
import WhatsAppImg from "../../assets/whatsapp.png";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import TrueTalentWhite from "../../assets/TT logo-new-white.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-logo-section">
          <h2 className="logo">
            {/* <span className="logo-light">true</span>
            <span className="logo-bold">Talent</span>
            <sup>TM</sup> */}
            <img
              src={TrueTalentWhite}
              style={{
                width: "150px",
                height: "auto",
                objectFit: "contain",
              }}
            />
          </h2>
          <p className="tagline">The Ultimate AI driven Job Platform</p>
          <div className="contact">
            <h4>Contact</h4>
            <p>
              #88 Borewell Road, Whitefield,
              <br />
              Bangalore, 560066, Karnataka
            </p>
            <p>
              +91 90906 90936
              <br />
              info@truetalent.io
            </p>
          </div>
        </div>

        <div className="footer-section">
          <h4>Jobs By Skills</h4>
          <ul>
            <li>SAP</li>
            <li>Java</li>
            <li>React</li>
            <li>Full stack</li>
            <li>Sales</li>
            <li>HR</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Jobs By Locations</h4>
          <ul>
            <li>Bangalore</li>
            <li>Chennai</li>
            <li>Hyderabad</li>
            <li>New Delhi</li>
            <li>Mumbai</li>
            <li>Pune</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Jobs By Industries</h4>
          <ul>
            <li>Technology</li>
            <li>Engineering & Construction</li>
            <li>Hospitality</li>
            <li>Retail</li>
            <li>Healthcare</li>
            <li>Banking</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Navigate</h4>
          <ul>
            <li>
              <Link to="/" className="footer-link">
                Home
              </Link>
            </li>
            {/* <li>About Us</li> */}
            {/* <li>Contact Us</li> */}
            <li>
              <Link to="/experience-hiring" className="footer-link">
                About US
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className="footer-link">
                Contact Us
              </Link>
            </li>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>
              <a
                href="https://truetalent.io/blog/"
                className="footer-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="rights-text">
          All rights reserved © 2025 FindrPro Technology Solutions Pvt. Ltd.
        </p>
        <div className="social-icons">
          <p className="connected-text"> Stay Connected</p>
          <a
            href="https://www.facebook.com/TrueTalent.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a
            href="https://www.linkedin.com/company/truetalent-io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://x.com/Truetalent_io"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.instagram.com/Truetalent_io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>

          <a
            href="https://www.youtube.com/@TrueTalent_io"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-youtube"></i>
          </a>
          <a
            href="https://wa.me/919090690936"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={WhatsAppImg} alt="WhatsApp" className="whatsapp-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
