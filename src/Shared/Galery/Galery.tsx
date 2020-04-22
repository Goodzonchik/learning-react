import React, { useEffect } from 'react';

import './Galery.css';

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

  function back() {
    const nextIndex = active - 1 >= 0 ? active - 1 : props.images.length - 1;
    setActive(nextIndex);
  }

  function forward() {
    const nextIndex = active + 1 <= props.images.length - 1 ? active + 1 : 0;
    setActive(nextIndex);
  }

  function setCurrent(image: string) {
    const index = props.images.findIndex((img) => img === image);
    setActive(index);
  }

  return (
    <div className={'galery'}>
      <div className={'galery-container'}>
        <div
          className={'galery-button'}
          onClick={() => {
            back();
          }}
        >
          Prev
        </div>
        <img
          className={'galery-image-active'}
          src={props?.images[active]}
          alt='{image}'
        ></img>
        <div
          className={'galery-button'}
          onClick={() => {
            forward();
          }}
        >
          Next
        </div>
      </div>
      <div className={'galery-collection-container'}>
        {props?.images?.map((image: string) => {
          return (
            <img
              className={
                image === props.images[active]
                  ? 'galery-collection-image active-image'
                  : 'galery-collection-image'
              }
              key={image}
              onClick={() => {
                setCurrent(image);
              }}
              src={image}
              alt='{image}'
            ></img>
          );
        })}
      </div>
    </div>
  );
}
