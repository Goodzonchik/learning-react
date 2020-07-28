import React from 'react';

import { months } from '../Utils/constants';

import './Calendar.scss';

const dateLabel = (day: number) => (
  <span className='calendar__day-label'>{day}</span>
);

const isCurrent = (currentDate: Date, day: number) =>
  currentDate.getDate() === day;

const getSplitDate = (isCurrentDate: boolean, day: number, syfix: string) => {
  const splitArea = isCurrentDate ? (
    <div className={`calendar__day-split-${syfix}_current`}></div>
  ) : null;

  return (
    <>
      <div className={`calendar__day-split-${syfix}`}>
        {splitArea}
        {dateLabel(day)}
      </div>
    </>
  );
};

const getSplitDates = (day: number[], currentDate: Date) => {
  return (
    <>
      {getSplitDate(isCurrent(currentDate, day[0]), day[0], 'first')}
      {getSplitDate(isCurrent(currentDate, day[1]), day[1], 'second')}
    </>
  );
};

const splitDay = (day: number | number[], currentDate: Date) => {
  if (typeof day === 'number' || day === null) {
    return dateLabel(day);
  } else {
    return getSplitDates(day, currentDate);
  }
};

const getWeek = (week: any[], currentDate: Date) => {
  const startIndex = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();

  return week.slice(startIndex - 5, startIndex + 2).map((day, index) => {
    if (!day) {
      return (
        <div
          className='calendar__day calendar__day-empty'
          key={`${day}-${index}`}
        ></div>
      );
    } else if (isCurrent(currentDate, day)) {
      return (
        <div
          className='calendar__day calendar__day-current'
          key={`${day}-${index}`}
        >
          {splitDay(day, currentDate)}
        </div>
      );
    } else {
      return (
        <div className='calendar__day' key={`${day}-${index}`}>
          {splitDay(day, currentDate)}
        </div>
      );
    }
  });
};

export default function Calendar({ currentDate }: { currentDate: string }) {
  const weeks = [
    [null, null, null, null, null, null, 1, 2, 3, 4, 5, 6, 7],
    [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
    [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
    [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28],
    [[23, 30], [24, 31], 25, 26, 27, 28, 29, 30, 31, null, null, null, null],
  ];

  const date = new Date(currentDate);
  const monthAndYearLabel = `${months[date.getMonth()]} ${date.getFullYear()}`;

  const calendarGrid = weeks.map((week, index) => (
    <div className='calendar__week' key={`${week}-${index}`}>
      {getWeek(week, date)}
    </div>
  ));

  return (
    <div className='calendar'>
      <div className='calendar__header'>{monthAndYearLabel}</div>
      {calendarGrid}
    </div>
  );
}
