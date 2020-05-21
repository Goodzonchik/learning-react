import React from 'react';

import './Loader.scss';

export default function Loader() {
  return (
    <svg className='loader'>
      <circle
        cx='50'
        cy='50'
        fill='none'
        stroke='#e15b64'
        strokeWidth='10'
        r='35'
        strokeDasharray='165 55'
      >
        <animateTransform
          attributeName='transform'
          type='rotate'
          repeatCount='indefinite'
          dur='1s'
          values='0 50 50;360 50 50'
        ></animateTransform>
      </circle>
    </svg>
  );
}
