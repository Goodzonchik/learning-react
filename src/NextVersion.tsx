import React from 'react';

export default function NextVersion() {
  const ideas = [
    'Proxy component (button)',
    'Preloading',
    'Add css variables',
    'Table with paging',
    'Table with sorting',
    'Table with filtering',
    'Filter in CollapseComponent',
    'Gallery with timer (skip time when change image)',
    'Add test',
    'Redux',
    'MobX',
  ];

  return (
    <div>
      <ul>
        {ideas.map((idea) => (
          <li>{idea}</li>
        ))}
      </ul>
    </div>
  );
}
