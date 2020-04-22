import * as React from 'react';

import './RocketSize.css';

export default function RocketSize(props: any) {
  return (
    <div className={'rocket-container'}>
      <div className={'rocket'}>
        <img src='../rocket.png' alt='rocket'></img>
        <div className={'diameter'}>
          <span className={'diameter-label'}>{props.diameter}</span>
        </div>
        <div className={'height'}>
          <span className={'height-label'}>{props.height}</span>
        </div>
      </div>
    </div>
  );
}
