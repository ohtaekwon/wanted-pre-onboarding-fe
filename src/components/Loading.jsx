import React from 'react';

import './Loading.css';

export default function Loading() {
  const path = process.env.PUBLIC_URL;

  return (
    <div className="Loading">
      <span> 로딩중입니다..^^;</span>
      {/* <img src={path + 'assets/Loading.gif'} className="Loading-img" /> */}
    </div>
  );
}
