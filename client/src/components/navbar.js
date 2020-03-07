/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import HomeLogo from '../images/HLP.jpg';
import FormLogo from '../images/HLP.png';

const MainNav = () => {
  const [bckColor, setBckColor] = useState('transparent');
  const [burgerActive, setBurgerActive] = useState(false);

  const navStyle = {
    backgroundColor: bckColor,
    transition: 'background-color 1s ease',
  };
  const lineStyle = {
    top: burgerActive ? 'calc(50% - 2px' : 'calc(50% + 2px',
  };

  useEffect(() => {
    document.addEventListener('scroll', () => {
      setBckColor(window.scrollY < 80 ? 'transparent' : 'white');
    });
  });

  return (
    <>
      <nav
        className="navbar is-fixed-top"
        role="navigation"
        aria-label="main navigation"
        style={navStyle}
      >
        <div className="navbar-brand">
          <img
            src={FormLogo}
            alt="Hugo-LP Forums Logo"
            width="30%"
            height="30%"
          />

          <a
            onClick={() => {
              setBurgerActive(!burgerActive);
            }}
            role="button"
            className={`navbar-burger burger ${
              burgerActive ? 'is-active' : ''
            }`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true" style={lineStyle}></span>
          </a>
        </div>

        <div
          id="navbarBasicExample"
          className={`navbar-menu ${burgerActive ? 'is-active' : ''}`}
        >
          <div className="navbar-end">
            <div className="navbar-item">
              <a href="#home" className="link">
                Home
              </a>
            </div>
            <div className="navbar-item">
              <a href="#forum" className="link">
                Forum
              </a>
            </div>
            <div className="navbar-item">
              <a href="#footer" className="link">
                Contact
              </a>
            </div>
            <div className="navbar-item">
              <div className="buttons">
                <Link className="button" to="/form">
                  <strong>RSVP</strong>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

const FormNav = () => (
  <Link className="anchor-tag" to="/" role="button">
    <figure className="image">
      <img className="logo-img" alt="company logo" src={FormLogo} />
    </figure>
  </Link>
);

export { FormNav, MainNav };
