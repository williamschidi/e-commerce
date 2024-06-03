import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <section className="footer-container">
      <div className="footer-nav-head-container">
        <nav className="footer-nav-head center">
          <h2>Bandage</h2>
          <ul className="footer-ul">
            <li>
              <FaFacebook className="footer-icon" />
            </li>
            <li>
              <FaInstagram className="footer-icon" />
            </li>
            <li>
              <FaTwitter className="footer-icon" />
            </li>
          </ul>
        </nav>
      </div>

      <ul className="footer-nav-body-ul center">
        <li>
          <span className="span">Company Info</span>
          <ul className="inner-ul">
            <li>About Us</li>
            <li>Carrier</li>
            <li>We are hiring</li>
            <li>Blog</li>
          </ul>
        </li>
        <li>
          <span className="span">Legal</span>
          <ul className="inner-ul">
            <li>About Us</li>
            <li>Carrier</li>
            <li>We are hiring</li>
            <li>Blog</li>
          </ul>
        </li>
        <li>
          <span className="span">Features</span>
          <ul className="inner-ul">
            <li>Business Marketing</li>
            <li>User Analytic</li>
            <li>Live Chat</li>
            <li>Unlimited Support</li>
          </ul>
        </li>
        <li>
          <span className="span">Resources</span>
          <ul className="inner-ul">
            <li>IOS & Android</li>
            <li>Watch a Demo</li>
            <li>Customers</li>
            <li>API</li>
          </ul>
        </li>
        <li className="inner-ul ">
          <span className="span">Get In Touch</span>
          <ul>
            <li>
              <span className="input-container">
                <input type="text" placeholder="Your Email" className="input" />
                <button className="footer-btn">subscribe</button>
              </span>
            </li>
            <li>Lore imp sum dolor Amit</li>
          </ul>
        </li>
      </ul>

      <div className="copyright ">
        <div className="center">
          Made With Love By Finland All Right Reserved
        </div>
      </div>
    </section>
  );
}

export default Footer;
