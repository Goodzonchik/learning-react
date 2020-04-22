import React from 'react';

import './ItemField.css';

interface Field {
  data: {
    title: string;
    value: string | number | undefined;
  };
}

export default function ItemField(props: Field) {
  return (
    <div className={'item-container'}>
      <strong className={'item-label'}>{props.data.title}:</strong>
      <span>{props.data.value}</span>
    </div>
  );
}
