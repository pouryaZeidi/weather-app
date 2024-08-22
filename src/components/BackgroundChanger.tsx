import React, { useState, useEffect } from 'react';

const BackgroundChanger = () => {
  const images = [
    '/11.jpg',
    '/12.jpg',
    '/13.jpg',
    '/14.jpg',
    '/15.jpg',
    '/16.jpg',
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const changeBackground = () => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    };

    const intervalId = setInterval(changeBackground, 10000); 

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div
      className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-transition"
      style={{ backgroundImage: `url(${images[currentImage]})` }}
    />
  );
};

export default BackgroundChanger;
