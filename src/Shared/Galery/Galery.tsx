import React, { useEffect, useCallback } from 'react';

import './Galery.css';
import GaleryPreview from './GaleryPreview';

interface GaleryModel {
  images: string[];
}

export default function Galery(props: GaleryModel) {
  //TODO
  /*
    Верстка (подсветка активной картинки, скролл, отсутпы, hover)
    Смена картинки по таймеру
    Увеличение картинки
    Динамически считать высоту и ширину для картинки
  */
  const [active, setActive] = React.useState(0);

  useEffect(() => {
    setActive(0);
  }, []);

  const back = useCallback(() => {
    const nextIndex = active - 1 >= 0 ? active - 1 : props.images.length - 1;
    setActive(nextIndex);
  }, [active, props.images]);

  const forward = useCallback(() => {
    const nextIndex = active + 1 <= props.images.length - 1 ? active + 1 : 0;
    setActive(nextIndex);
  }, [active, props.images]);

  const setCurrent = useCallback(
    (image) => {
      const index = props.images.findIndex((img) => img === image);
      setActive(index);
    },
    [props.images]
  );

  return (
    <div className={'galery'}>
      <div className={'galery-container'}>
        <div className={'galery-button'} onClick={back}>
          Prev
        </div>
        <img
          className={'galery-image-active'}
          src={props.images[active]}
          alt='{image}'
        ></img>
        <div className={'galery-button'} onClick={forward}>
          Next
        </div>
      </div>
      <div className={'galery-collection-container'}>
        {props?.images?.map((image: string, index) => {
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
    </div>
  );
}
