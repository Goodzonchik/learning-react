import React from 'react';

import './Galery/Galery.scss';

interface GaleryModel {
  image: string;
  isActive: boolean;
  setCurrent: any;
}

export default function GaleryPreview({
  image,
  isActive,
  setCurrent,
}: GaleryModel) {
  const setCurrentImage = () => {
    setCurrent(image);
  };

  return (
    <img
      className={`galery-collection-image ${isActive ? 'active-image' : ''}`}
      onClick={setCurrentImage}
      src={image}
      alt={image}
    ></img>
  );
}
