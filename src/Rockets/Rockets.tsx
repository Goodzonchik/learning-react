import React, { useEffect } from 'react';
import { fetchData } from '../Shared/Utils/dataHelpers';
import { useRouteMatch, Link } from 'react-router-dom';
import Loader from '../Shared/Loader';

interface RocketShort {
  rocket_name: string;
  rocket_id: string;
}

export default function Rockets() {
  const match = useRouteMatch();
  const [rockets, setRockets] = React.useState<RocketShort[]>([]);

  useEffect(() => {
    fetchData('rockets').then((data: RocketShort[]) => {
      setRockets(data);
    });
  }, []);

  const rocketList = rockets.map((rocket: RocketShort) => (
    <Link to={`${match.path}/${rocket.rocket_id}`} key={rocket.rocket_id}>
      <div className='list-container-item'> {rocket.rocket_name}</div>
    </Link>
  ));

  return (
    <div className='list-container'>
      {rockets.length ? rocketList : <Loader />}
    </div>
  );
}
