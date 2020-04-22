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
  rocket: {
    margin: '1rem',
    padding: '1rem',
    border: '1px solid #c3c3c3',
    borderRadius: '4px',
  },
  'rocket:hover': {
    backgroundColor: '#ff0000',
    color: '#ffffff',
  },
};

export default function Rockets() {
  const match = useRouteMatch();
  const [rockets, setRockets] = React.useState([]);

  useEffect(() => {
    fetchData('rockets').then((data: any) => {
      setRockets(data);
    });
  }, []);

  return (
    <div style={styles.container}>
      {rockets.map((rocket) => (
        <div style={styles.rocket} key={rocket['rocket_id']}>
          <Link to={`${match.path}/${rocket['rocket_id']}`}>
            {rocket['rocket_name']}
          </Link>
        </div>
      ))}
    </div>
  );
}
