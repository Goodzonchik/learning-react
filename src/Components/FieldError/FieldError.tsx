import React from 'react';

import './FieldError.scss';

interface ErrorModel {
  expression: boolean;
  type?: ErrorTypes;
  message?: string;
}

export enum ErrorTypes {
  required = 'Is empty',
}

export default function FieldError({ type, message, expression }: ErrorModel) {
  return (
    <>
      {expression && <div className='error'>{message || type?.toString()}</div>}
    </>
  );
}
