import React from 'react';

import './Galery/Galery.scss';

interface GaleryPreviewModel {
  image: string;
  isActive: boolean;
  setCurrent: (image: string) => void;
}

export default function GaleryPreview({
  image,
  isActive,
  setCurrent,
}: GaleryPreviewModel) {
  const setCurrentImage = () => {
    setCurrent(image);
  };

  const imageClass = `galery-collection-image ${
    isActive ? 'active-image' : ''
  }`;

  return (
    <img
      className={imageClass}
      onClick={setCurrentImage}
      src={image}
      alt={image}
    ></img>
  );
}
