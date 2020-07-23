import React from 'react';
import TODO_ANY from './Utils/developHelpers';

interface IconModel {
  action: (params?: TODO_ANY) => void;
  args?: TODO_ANY;
}

export default function ShowIcon({ action, args }: IconModel) {
  function handleAction() {
    action(args);
  }

  return (
    <svg
      onClick={handleAction}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='#989898'
      strokeWidth='2'
      style={{ cursor: 'pointer' }}
    >
      <path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z' />
      <circle cx='12' cy='12' r='3' />
    </svg>
  );
}
