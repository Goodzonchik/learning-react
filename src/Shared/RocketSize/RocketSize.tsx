import React from 'react';
import { rocketImageUrl } from '../Utils/dataHelpers';

import './RocketSize.scss';

interface RocketSizeField {
  diameter: string;
  height: string;
}

export default function RocketSize(props: RocketSizeField) {
  return (
    <div className='rocket-container'>
      <div className='rocket'>
        <img src={rocketImageUrl} alt='rocket'></img>
        <div className='diameter'>
          <span className='diameter-label'>{props.diameter}</span>
        </div>
        <div className='height'>
          <span className='height-label'>{props.height}</span>
        </div>
      </div>
    </div>
  );
}
