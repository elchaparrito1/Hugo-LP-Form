/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import HomeLogo from '../images/HLP.jpg';
import { Link as ScrollLink } from 'react-scroll';
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

  const changeBurger = () => {
    setBurgerActive(!burgerActive);
  };

  useEffect(() => {
    const changeColor = () => {
      setBckColor(window.scrollY < 80 ? 'transparent' : 'white');
    };

    document.addEventListener('scroll', changeColor);

    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('scroll', changeColor);
    };
  }, []);

  return (
    <>
      <nav
        className="navbar is-fixed-top"
        role="navigation"
        aria-label="main navigation"
        style={navStyle}
      >
        <div className="navbar-brand">
          <div className="navbar-item">
            <img
              className="main-page-logo"
              src={FormLogo}
              alt="Hugo LP forums logo"
              width="150px"
              height="28px"
            />
          </div>

          <a
            onClick={changeBurger}
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
          style={{ zIndex: '2' }}
        >
          <div className="navbar-end">
            <div className="navbar-item">
              <ScrollLink
                activeClass="active"
                className="link"
                to="home"
                spy
                smooth
                offset={-70}
                duration={500}
              >
                Home
              </ScrollLink>
            </div>
            <div className="navbar-item">
              <ScrollLink
                activeClass="active"
                className="link"
                to="forum"
                spy
                smooth
                offset={-70}
                duration={500}
              >
                About
              </ScrollLink>
            </div>
            <div className="navbar-item">
              <ScrollLink
                activeClass="active"
                className="link"
                to="footer"
                spy
                smooth
                offset={-70}
                duration={500}
              >
                Contact
              </ScrollLink>
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
