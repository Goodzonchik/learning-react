import React, { useEffect } from 'react';

export default function Galery(props: any) {
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
    const index = (props.images as Array<string>).findIndex(
      (img) => img === image
    );
    setActive(index);
  }

  return (
    <div
      style={{
        border: '1px solid #efefef',
        padding: '0.5em',
        backgroundColor: '#efefef',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <div
          style={{
            width: '10%',
            minHeight: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            cursor: 'pointer',
            textAlign: 'center',
          }}
          onClick={() => {
            back();
          }}
        >
          Prev
        </div>
        <img
          style={{
            width: '90%',
            height: '100%',
          }}
          src={props?.images[active]}
        ></img>
        <div
          style={{
            width: '10%',
            minHeight: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            cursor: 'pointer',
            textAlign: 'center',
          }}
          onClick={() => {
            forward();
          }}
        >
          Next
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          overflow: 'auto',
          margin: '0.5em 0',
          backgroundColor: '#dedede',
          padding: '0.5em',
        }}
      >
        {props?.images?.map((image: string) => {
          return (
            <img
              style={{
                maxWidth: '150px',
                maxHeight: '100px',
                margin: '0 1em',
                cursor: 'pointer',
              }}
              key={image}
              onClick={() => {
                setCurrent(image);
              }}
              src={image}
            ></img>
          );
        })}
      </div>
    </div>
  );
}
