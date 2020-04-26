import React from 'react';

import './ItemField.scss';

interface Field {
  data: {
    title: string;
    value: string | number | undefined;
  };
}

export default function ItemField({ data }: Field) {
  return (
    <div className='item-container'>
      <strong className='item-label'>{data.title}:</strong>
      <span>{data.value}</span>
    </div>
  );
}
