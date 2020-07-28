/*import React from 'react';

import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import App from '../../App';

let container: any = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('Renders navbar', () => {
  const links = [
    'about',
    'history',
    'rockets',
    'ships',
    'payloads',
    'feedback',
  ].join('');
  act(() => {
    render(<App />, container);
  });
  expect(container.textContent.toLowerCase()).toBe(links);
});
*/
