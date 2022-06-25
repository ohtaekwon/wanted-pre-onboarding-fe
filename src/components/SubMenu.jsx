import React from 'react';
import './SubMenu.css';
export default function SubMenu() {
  const handleClick = () => {
    localStorage.clear();
    window.location.reload();
  };
  return <button onClick={handleClick}>Logout</button>;
}
