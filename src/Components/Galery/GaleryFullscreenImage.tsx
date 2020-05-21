import React from 'react';

interface GaleryFullscreenModel {
  image: string;
  closeFullscreen: () => void;
}

export default function GaleryFullscreenImage({
  image,
  closeFullscreen,
}: GaleryFullscreenModel) {
  return (
    <div className='galery__fullscreen-overlay' onClick={closeFullscreen}>
      <img className='galery__fullscreen-image' src={image} alt={image}></img>
    </div>
  );
}
