import React from 'react';

export default function NextVersion() {
  const ideas = [
    'Proxy component (button)',
    'Preloading',
    'Add css variables',
    'Add test',
    'Redux',
    'MobX',
  ];

  return (
    <ul>
      {ideas.map((idea) => (
        <li>{idea}</li>
      ))}
    </ul>
  );
}
