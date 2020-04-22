import React, { useEffect } from 'react';
import { fetchData } from '../Utils/dataHelper';
import { useRouteMatch, Link } from 'react-router-dom';

const styles = {
  container: {
    display: 'block',
    padding: '20px',
    width: '100%',
    height: '100%',
  },
  event: {
    margin: '1rem',
    padding: '1rem',
    border: '1px solid #c3c3c3',
    borderRadius: '4px',
  },
};

export default function Events() {
  const match = useRouteMatch();
  const [events, setEvents] = React.useState([]);

  useEffect(() => {
    fetchData('history').then((data: any) => {
      setEvents(data);
    });
  }, []);

  return (
    <div style={styles.container}>
      {events.map((event) => (
        <div style={styles.event} key={event['id']}>
          <Link to={`${match.path}/${event['id']}`}>{event['title']}</Link>
        </div>
      ))}
    </div>
  );
}
