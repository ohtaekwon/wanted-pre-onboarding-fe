// LIBRARY
import React from 'react';
// CSS
import './Sections.css';
export default function Sections({ className, children }) {
  return <section className={className}>{children}</section>;
}
