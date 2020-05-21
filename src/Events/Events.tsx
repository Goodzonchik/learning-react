import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';

import { fetchData } from '../Components/Utils/dataHelpers';
import Loader from '../Components/Loader/Loader';

interface EventShort {
  id: string;
  title: string;
}

export default function Events() {
  const match = useRouteMatch();
  const [events, setEvents] = useState<EventShort[]>([]);

  useEffect(() => {
    fetchData('history').then((data: EventShort[]) => {
      setEvents(data);
    });
  }, []);

  const eventList = events.map((event: EventShort) => (
    <Link to={`${match.path}/${event.id}`} key={event.id}>
      <div className='list-container__item'>{event.title}</div>
    </Link>
  ));

  return (
    <div className='list-container'>
      {events.length ? eventList : <Loader />}
    </div>
  );
}
