/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import React, { useState, useEffect, useRef } from 'react';
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

  const useOutsideClick = ref => {
    useEffect(() => {
      /**
       * Close menu if clicked outside of ref
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setBurgerActive(false);
        }
      }

      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  };

  const navref = useRef(null);
  useOutsideClick(navref);

  return (
    <>
      <nav
        ref={navref}
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
                <button className="no-btn-nav" type="button">
                  Home
                </button>
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
                <button className="no-btn-nav" type="button">
                  About
                </button>
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
                <button className="no-btn-nav" type="button">
                  Contact
                </button>
              </ScrollLink>
            </div>
            <div className="navbar-item">
              <div className="buttons">
                <Link className="button" to="/form/virtual-forum">
                  <strong>Register</strong>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

const FormNav = () => {
  const [burgerActive, setBurgerActive] = useState(false);

  const lineStyle = {
    top: burgerActive ? 'calc(50% - 2px' : 'calc(50% + 2px',
  };

  const changeBurger = () => {
    setBurgerActive(!burgerActive);
  };

  const useOutsideClick = ref => {
    useEffect(() => {
      /**
       * Close menu if clicked outside of ref
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setBurgerActive(false);
        }
      }

      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  };

  const navref = useRef(null);
  useOutsideClick(navref);

  return (
    <>
      <nav
        ref={navref}
        className="navbar"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <div className="navbar-item">
            <img
              className="main-page-logo"
              src={FormLogo}
              alt="Hugo LP forums logo"
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
              <Link className="form-nav-link" to="/">
                Home
              </Link>
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
                <button className="no-btn-form-nav" type="button">
                  Contact
                </button>
              </ScrollLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export { FormNav, MainNav };
