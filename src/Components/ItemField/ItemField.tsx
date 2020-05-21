import React from 'react';

import './ItemField.scss';

interface Field {
  data: {
    title: string;
    value?: string | number;
  };
}

export default function ItemField({ data }: Field) {
  return (
    <div className='data-field'>
      <strong className='data-field__label'>{data.title}:</strong>
      <span>{data.value}</span>
    </div>
  );
}
