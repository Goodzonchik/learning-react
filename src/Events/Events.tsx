import React, { useEffect } from 'react';
import { fetchData } from '../Utils/dataHelper';
import { useRouteMatch, Link } from 'react-router-dom';

export default function Events() {
  const match = useRouteMatch();
  const [events, setEvents] = React.useState([]);

  useEffect(() => {
    fetchData('history').then((data: any) => {
      setEvents(data);
    });
  }, []);

  return (
    <div className={'list-container'}>
      {events.map((event) => (
        <div className={'list-container-item'} key={event['id']}>
          <Link to={`${match.path}/${event['id']}`}>{event['title']}</Link>
        </div>
      ))}
    </div>
  );
}
