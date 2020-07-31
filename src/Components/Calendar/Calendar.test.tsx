import React from 'react';

import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Calendar from './Calendar';
import { months } from '../Utils/constants';

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

it('Renders calendar with current date', () => {
  const date = new Date();

  const monthAndYearLabel = `${months[date.getMonth()]} ${date.getFullYear()}`;
  act(() => {
    render(<Calendar currentDate={date.toString()} />, container);
  });
  expect(document.getElementsByClassName('calendar__header')[0].innerHTML).toBe(
    monthAndYearLabel
  );
});

it('Renders calendar with 10.10.2019', () => {
  const date = new Date(2019, 10, 10);

  const monthAndYearLabel = `${months[date.getMonth()]} ${date.getFullYear()}`;
  act(() => {
    render(<Calendar currentDate={date.toString()} />, container);
  });
  expect(document.getElementsByClassName('calendar__header')[0].innerHTML).toBe(
    monthAndYearLabel
  );
});

it('Renders calendar with 30.6.2019', () => {
  const date = new Date(2019, 6, 30);

  act(() => {
    render(<Calendar currentDate={date.toString()} />, container);
  });
  expect(
    document
      .getElementsByClassName('calendar__day calendar__day-current')[0]
      .getElementsByClassName('calendar__day-label')[0].innerHTML
  ).toBe('30');
});
