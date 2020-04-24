import React from 'react';

import './Galery/Galery.css';

interface GaleryModel {
  image: string;
  isActive: boolean;
  setCurrent: any;
}

export default function GaleryPreview(props: GaleryModel) {
  const setCurrentImage = () => {
    props.setCurrent(props.image);
  };

  return (
    <img
      className={`galery-collection-image ${
        props.isActive ? 'active-image' : ''
      }`}
      onClick={setCurrentImage}
      src={props.image}
      alt='{image}'
    ></img>
  );
}
