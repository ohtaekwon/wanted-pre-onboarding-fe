import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo(props) {
  const LogoStyle = {
    diplay: 'inline-block',
    widht: '100%',
    height: '100%',
  };
  const LogoImage = {
    width: '130px',
    height: '30px',
    position: 'relative',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    marin: 'auto',
    alignItems: 'center',
  };
  return (
    <Link to="/" className="Logo" style={LogoStyle}>
      <img
        src={process.env.PUBLIC_URL + 'assets/Logo.png'}
        alt="Logo"
        style={LogoImage}
      />
    </Link>
  );
}
