import * as React from 'react';

import './ItemField.css';

export default function ItemField(props: any) {
  return (
    <div className={'item-container'}>
      <strong className={'item-label'}>{props.title}:</strong>
      <span>{props.value}</span>
    </div>
  );
}
