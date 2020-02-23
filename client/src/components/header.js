import React from 'react';
import Logo from '../images/HLP.png';

const LogoHeader = () => (
  <a className="anchor-tag" href="https://hugo-lp-forum.now.sh/" role="button">
    <figure className="image">
      <img className="logo-img" alt="company logo" src={Logo} />
    </figure>
  </a>
);

export default LogoHeader;
