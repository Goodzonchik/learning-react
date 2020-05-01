import React, { useEffect, useState } from 'react';
import { fetchData } from '../Shared/Utils/dataHelpers';
import { useRouteMatch, Link } from 'react-router-dom';
import Loader from '../Shared/Loader';

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
      <div className='list-container-item'>{event.title}</div>
    </Link>
  ));

  return (
    <div className='list-container'>
      {events.length ? eventList : <Loader />}
    </div>
  );
}
