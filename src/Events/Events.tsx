import React, { useEffect } from 'react';
import { fetchData } from '../Utils/dataHelper';
import { useRouteMatch, Link } from 'react-router-dom';
import Loader from '../Shared/Loader';

interface EventShort {
  id: string;
  title: string;
}

export default function Events() {
  const match = useRouteMatch();
  const [events, setEvents] = React.useState<EventShort[]>([]);

  useEffect(() => {
    fetchData('history').then((data: EventShort[]) => {
      setEvents(data);
    });
  }, []);

  const eventList = events.map((event) => (
    <Link to={`${match.path}/${event.id}`} key={event.id}>
      <div className={'list-container-item'}>{event.title}</div>
    </Link>
  ));

  return <div className={'list-container'}>{eventList || <Loader />}</div>;
}
