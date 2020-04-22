import React, { useEffect } from 'react';
import { fetchData } from '../Utils/dataHelper';
import { useRouteMatch, Link } from 'react-router-dom';

export default function Rockets() {
  const match = useRouteMatch();
  const [rockets, setRockets] = React.useState([]);

  useEffect(() => {
    fetchData('rockets').then((data: any) => {
      setRockets(data);
    });
  }, []);

  return (
    <div className={'list-container'}>
      {rockets.map((rocket) => (
        <div className={'list-container-item'} key={rocket['rocket_id']}>
          <Link to={`${match.path}/${rocket['rocket_id']}`}>
            {rocket['rocket_name']}
          </Link>
        </div>
      ))}
    </div>
  );
}
