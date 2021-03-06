import React from 'react';
import { Element } from 'react-scroll';

const Footer = () => (
  <>
    <Element name="footer">
      <footer className="footer-distributed">
        <div className="footer-left">
          <p className="footer-links">
            <a className="link-1 no-btn" href="mailto:mark@hugo-lpf.com">
              Email
            </a>
            <a className="no-btn" href="tel:8018095696">
              Call
            </a>
            <a
              className="no-btn"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/mark-waite-68800346/"
            >
              Connect
            </a>
          </p>

          <p>HUGO-LP Forums &copy; 2021</p>
        </div>
      </footer>
    </Element>
  </>
);

export default Footer;
