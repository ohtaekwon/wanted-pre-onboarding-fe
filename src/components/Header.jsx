import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Gnb from './Gnb';
// CSS
import './Header.css';

export default function Header() {
  return (
    <header>
      <Gnb className="Gnb" />
    </header>
  );
}
