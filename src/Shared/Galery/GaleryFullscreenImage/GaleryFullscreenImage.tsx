import React from 'react';

import './GaleryFullscreenImage.scss';

interface GaleryModel {
  image: string;
  closeFullscreen: any;
}

export default function GaleryFullscreenImage(props: GaleryModel) {
  return (
    <div className='galery-fullscreen-overlay' onClick={props.closeFullscreen}>
      <img
        className={'galery-fullscreen-image'}
        src={props.image}
        alt={props.image}
      ></img>
    </div>
  );
}
