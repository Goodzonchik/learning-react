import React, { useCallback, useState } from 'react';

import GaleryPreview from '../GaleryPreview';
import GaleryFullscreenImage from '../GaleryFullscreenImage';

import './Galery.scss';

interface GaleryModel {
  images: string[];
}

export default function Galery({ images }: GaleryModel) {
  const [active, setActive] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  const lastImage = images.length - 1;

  const back = useCallback(() => {
    const next = active - 1;
    setActive(next >= 0 ? next : lastImage);
  }, [active, lastImage]);

  const forward = useCallback(() => {
    const next = active + 1;
    setActive(next <= lastImage ? next : 0);
  }, [active, lastImage]);

  const setCurrent = useCallback(
    (image: string) => {
      setActive(images.indexOf(image));
    },
    [images]
  );

  const toggleFullscreen = () => {
    setFullscreen(!fullscreen);
  };

  const closeFullscreen = useCallback(toggleFullscreen, [fullscreen]);

  return (
    <div className='galery'>
      <div className='galery__viewport'>
        <div className='galery__button' onClick={back}>
          Prev
        </div>
        <img
          className='galery__active-image'
          src={images[active]}
          alt='{image}'
          onClick={toggleFullscreen}
        ></img>
        <div className='galery__button' onClick={forward}>
          Next
        </div>
      </div>
      <div className='galery__collection-container'>
        {images.map((image: string, index) => {
          return (
            <GaleryPreview
              image={image}
              isActive={index === active}
              setCurrent={setCurrent}
              key={image}
            />
          );
        })}
      </div>
      {fullscreen ? (
        <GaleryFullscreenImage
          image={images[active]}
          closeFullscreen={closeFullscreen}
        />
      ) : null}
    </div>
  );
}
