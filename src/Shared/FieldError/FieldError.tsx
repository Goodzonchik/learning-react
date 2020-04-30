import React from 'react';

import './FieldError.scss';

interface ErrorModel {
  type?: ErrorTypes;
  message?: string;
}

export enum ErrorTypes {
  required = 'Is empty',
}

export default function FieldError({ type, message }: ErrorModel) {
  return <div className={'error-message'}>{message || type?.toString()}</div>;
}
