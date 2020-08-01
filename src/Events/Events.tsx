import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';

import { useQuery, gql } from '@apollo/client';

import Loader from '../Components/Loader/Loader';

const historyData = gql`
  query {
    histories {
      id
      title
    }
  }
`;

interface EventShort {
  id: string;
  title: string;
}

export default function Events() {
  const match = useRouteMatch();
  const { data } = useQuery(historyData);

  return (
    <div className='list-container'>
      {data ? (
        data.histories.map((event: EventShort) => (
          <Link to={`${match.path}/${event.id}`} key={event.id}>
            <div className='list-container__item'>{event.title}</div>
          </Link>
        ))
      ) : (
        <Loader />
      )}
    </div>
  );
}
