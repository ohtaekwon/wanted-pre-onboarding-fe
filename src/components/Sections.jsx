import React from 'react';

import './Sections.css';
export default function Sections({ className, children }) {
  return <section className={className}>{children}</section>;
}
