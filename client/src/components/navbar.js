import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HomeLogo from '../images/HLP.jpg';
import FormLogo from '../images/HLP.png';

const MainNav = () => {
  const [bckColor, setBckColor] = useState('transparent');
  const navStyle = {
    backgroundColor: bckColor,
    transition: 'background-color 1s ease',
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
            width="200"
            height="200"
          />

          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-end">
            <a className="navbar-item">Home</a>
            <a className="navbar-item">Forum</a>
            <a className="navbar-item">Contact</a>
            <div className="navbar-item">
              <div className="buttons">
                <a className="button">
                  <strong>RSVP</strong>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

const FormNav = () => (
  <a className="anchor-tag" href="https://hugo-lp-forum.now.sh/" role="button">
    <figure className="image">
      <img className="logo-img" alt="company logo" src={FormLogo} />
    </figure>
  </a>
);

export { FormNav, MainNav };
