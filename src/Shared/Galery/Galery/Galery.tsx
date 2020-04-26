import React, { useCallback } from 'react';
import GaleryPreview from '../GaleryPreview';
import GaleryFullscreenImage from '../GaleryFullscreenImage/GaleryFullscreenImage';

import './Galery.scss';

interface GaleryModel {
  images: string[];
}

export default function Galery(props: GaleryModel) {
  const [active, setActive] = React.useState(0);
  const [fullscreen, setFullscreen] = React.useState(false);

  const back = useCallback(() => {
    const nextIndex = active - 1 >= 0 ? active - 1 : props.images.length - 1;
    setActive(nextIndex);
  }, [active, props.images]);

  const forward = useCallback(() => {
    const nextIndex = active + 1 <= props.images.length - 1 ? active + 1 : 0;
    setActive(nextIndex);
  }, [active, props.images]);

  const setCurrent = useCallback(
    (image: string) => {
      const index = props.images.findIndex((img) => img === image);
      setActive(index);
    },
    [props.images]
  );

  const closeFullscreen = useCallback(() => {
    setFullscreen(false);
  }, []);

  const openFullscreen = () => {
    setFullscreen(true);
  };

  return (
    <div className='galery'>
      <div className='galery-container'>
        <div className='galery-button' onClick={back}>
          Prev
        </div>
        <img
          className='galery-image-active'
          src={props.images[active]}
          alt='{image}'
          onClick={openFullscreen}
        ></img>
        <div className='galery-button' onClick={forward}>
          Next
        </div>
      </div>
      <div className='galery-collection-container'>
        {props.images.map((image: string, index) => {
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
          image={props.images[active]}
          closeFullscreen={closeFullscreen}
        />
      ) : null}
    </div>
  );
}
