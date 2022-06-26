// LIBRARY
import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// CSS
import './SubMenu.css';

export default function SubMenu() {
  let navigate = useNavigate();

  const icon = process.env.PUBLIC_URL + 'assets/Logout.png';

  const screenX = window.innerWidth;
  const [scroll, setScroll] = useState('');

  // 로그아웃버튼 기능 - 클릭시 로그인 페이지로 이동
  const handleLogOutClick = () => {
    localStorage.clear();
    navigate('/');
  };

  const handleWidht = (screenX) => {
    let nextScrrenX;

    if (screenX < 580) {
      nextScrrenX = window.innerWidth;
      setScroll(nextScrrenX);
    }
    if (screenX > 580) {
      nextScrrenX = window.innerWidth;
      setScroll(nextScrrenX);
    }
  };

  useEffect(() => {
    handleWidht(screenX);
    console.log('render');
  }, []);

  return (
    <>
      {scroll <= 580 ? (
        <button onClick={handleLogOutClick} className="Sub-logout-btn">
          <img src={icon} />
        </button>
      ) : (
        <button onClick={handleLogOutClick} className="Sub-logout-btn">
          Logout
        </button>
      )}
    </>
  );
}
