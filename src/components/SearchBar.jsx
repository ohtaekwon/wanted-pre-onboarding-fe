// LIBRARY
import React from 'react';
// CSS
import './SearchBar.css';

export default function SearchBar() {
  return (
    <div className="SearchBar">
      <input className="Search input" type="text" placeholder="        검색" />
      <button className="material-icons">search</button>
    </div>
  );
}
