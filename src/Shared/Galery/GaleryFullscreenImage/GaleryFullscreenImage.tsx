import React from 'react';

import './GaleryFullscreenImage.scss';

interface GaleryModel {
  image: string;
  closeFullscreen: () => void;
}

export default function GaleryFullscreenImage({
  image,
  closeFullscreen,
}: GaleryModel) {
  return (
    <div className='galery-fullscreen-overlay' onClick={closeFullscreen}>
      <img className='galery-fullscreen-image' src={image} alt={image}></img>
    </div>
  );
}
