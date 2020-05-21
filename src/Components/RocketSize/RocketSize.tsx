import React from 'react';
import { rocketImageUrl } from '../Utils/dataHelpers';

import './RocketSize.scss';

interface RocketSizeField {
  diameter: string;
  height: string;
}

export default function RocketSize({ diameter, height }: RocketSizeField) {
  return (
    <div className='rocket'>
      <div className='rocket__container'>
        <img src={rocketImageUrl} alt='rocket'></img>
        <div className='rocket__size-view rocket__diameter'>
          <span className='rocket__size-label rocket__diameter-label'>
            {diameter}
          </span>
        </div>
        <div className='rocket__size-view rocket__height'>
          <span className='rocket__size-label rocket__height-label'>
            {height}
          </span>
        </div>
      </div>
    </div>
  );
}
