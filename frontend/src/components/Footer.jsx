/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { HashLink } from "react-router-hash-link";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="handles">
        <i class="fa-brands fa-facebook" />
        <i class="fa-brands fa-instagram" />
        <i class="fa-brands fa-twitter" />
        <i class="fa-brands fa-github" />
        <i class="fa-brands fa-youtube" />
      </div>
      <div className="sections">
        <ul className="sections-list">
          <li className="list-item">
            <HashLink to="#top" className="link">
              Home
            </HashLink>
          </li>
          <li className="list-item">
            <HashLink to="#finances" className="link">
              Financial Securities
            </HashLink>
          </li>
          <li className="list-item">
            <HashLink to="#aboutUs" className="link">
              About Us
            </HashLink>
          </li>
        </ul>
      </div>
      <div className="contact">
        <div className="contactUs">
          Contact Us
          <br />
          <br />
          Email: stonks123@gmail.com
          <br />
          Phone No: +911234567890
        </div>
        <div className="location">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.2455295128216!2d82.98717945046954!3d25.262324683786748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e3320e885927b%3A0x78ac04d1bac708f0!2sIIT%20(BHU)%20Varanasi!5e0!3m2!1sen!2sin!4v1680007248029!5m2!1sen!2sin"
            width="600"
            height="300"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
