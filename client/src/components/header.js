import React from 'react';
import Logo from '../images/HLP.png';

// const linkStyle = {
//   marginRight: 15,
// };

const LogoHeader = () => (
  <figure className="image">
    <img className="logo-img" alt="company logo" src={Logo} />
  </figure>
);

export default LogoHeader;
