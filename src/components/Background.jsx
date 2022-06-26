// LIBRARY
import React, { useEffect, useState } from 'react';
// CSS
import './Background.css';

const bg_images = [
  'bg_slide_1.png',
  'bg_slide_2.png',
  'bg_slide_3.png',
  'bg_slide_4.png',
];
export default function Background() {
  const [imgSlide, setImgSlide] = useState('bg_slide_1.png');

  const randomImages = (images) => {
    const random = images[Math.floor(Math.random() * images.length)];
    setImgSlide(random);
  };
  // console.log('render');

  useEffect(() => {
    let autoTimer = setInterval(() => randomImages(bg_images), 3000);

    console.log('render');
    return () => {
      clearTimeout(autoTimer);
    };
  }, []);

  return (
    <div className="background">
      <img src={process.env.PUBLIC_URL + 'assets/bg_phone.png'} alt="" />
      <div className="content">
        <img src={process.env.PUBLIC_URL + `assets/${imgSlide}`} alt="" />
      </div>
    </div>
  );
}
