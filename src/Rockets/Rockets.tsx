import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';

import Loader from '../Components/Loader/Loader';

import { useQuery, gql } from '@apollo/client';

const rocketData = gql`
  query {
    rockets {
      id
      name
    }
  }
`;

interface RocketShort {
  name: string;
  id: string;
}

export default function Rockets() {
  const match = useRouteMatch();

  const { data } = useQuery(rocketData);

  return (
    <div className='list-container'>
      {data ? (
        data.rockets.map((rocket: RocketShort) => (
          <Link to={`${match.path}/${rocket.id}`} key={rocket.id}>
            <div className='list-container__item'> {rocket.name}</div>
          </Link>
        ))
      ) : (
        <Loader />
      )}
    </div>
  );
}
