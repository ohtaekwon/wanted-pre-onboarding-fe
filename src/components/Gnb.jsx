// LIBRARY
import React from 'react';
// COMPOENTNS
import Logo from './Logo';
import SubMenu from './SubMenu';
import SearchBar from './SearchBar';
// css
import './Gnb.css';

export default function Gnb() {
  return (
    <nav className="Gnb--nav">
      <Logo className="Gnb--Logo" />
      <SearchBar className="Gnb--SearchBar" />
      <SubMenu className="Gnb--SubMenu" />
    </nav>
  );
}
