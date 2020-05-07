import React from 'react';

import './GaleryFullscreenImage.scss';

interface GaleryFullscreenModel {
  image: string;
  closeFullscreen: () => void;
}

export default function GaleryFullscreenImage({
  image,
  closeFullscreen,
}: GaleryFullscreenModel) {
  return (
    <div className='galery-fullscreen-overlay' onClick={closeFullscreen}>
      <img className='galery-fullscreen-image' src={image} alt={image}></img>
    </div>
  );
}
