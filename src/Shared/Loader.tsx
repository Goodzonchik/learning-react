import React from 'react';

export default function Loader() {
  return (
    <svg
      style={{
        margin: 'auto',
        display: 'block',
        width: '100px',
        height: '100px',
      }}
    >
      <circle
        cx='50'
        cy='50'
        fill='none'
        stroke='#e15b64'
        strokeWidth='10'
        r='35'
        strokeDasharray='165 55'
        transform='rotate(119.633 50 50)'
      >
        <animateTransform
          attributeName='transform'
          type='rotate'
          repeatCount='indefinite'
          dur='1s'
          values='0 50 50;360 50 50'
          keyTimes='0;1'
        ></animateTransform>
      </circle>
    </svg>
  );
}
