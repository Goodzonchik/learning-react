import React from 'react';

const errorStyle = {
  display: 'block',
  color: 'red',
  marginBottom: '0.5em',
};

export default function FieldError({ error }: { error: string }) {
  return <div style={errorStyle}>{error}</div>;
}
