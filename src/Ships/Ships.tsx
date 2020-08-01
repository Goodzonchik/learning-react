import React, { useState } from 'react';

import { bool } from '../Components/Utils/formatHelpers';
import Loader from '../Components/Loader/Loader';
import ShipMissionModal from './ShipMissionModal';

import { useQuery, gql } from '@apollo/client';

import './Ships.scss';
import ShowIcon from '../Components/ShowIcon';

const shipsData = gql`
  query {
    ships {
      id
      name
      type
      active
      year_built
      home_port
      missions {
        flight
        name
      }
    }
  }
`;

interface ShipShort {
  id: string;
  name: string;
  type: string;
  active: boolean;
  year_built?: number;
  home_port: string;
  missions: ShipMissionShort[];
}

interface ShipMissionShort {
  name: string;
  flight: number;
}

export default function Ships() {
  const [missions, setMissions] = useState<ShipMissionShort[]>([]);

  const { data } = useQuery(shipsData);

  function toggleMissionModal(missions?: ShipMissionShort[]) {
    setMissions(missions || []);
  }

  return (
    <div className='list-container'>
      {data ? (
        <>
          <table className='table'>
            <thead className='table__head'>
              <tr>
                <td className='table__head-cell'>Name</td>
                <td className='table__head-cell'>Type</td>
                <td className='table__head-cell'>Active</td>
                <td className='table__head-cell'>Year built</td>
                <td className='table__head-cell'>Home port</td>
                <td className='table__head-cell'>Missions</td>
              </tr>
            </thead>
            <tbody>
              {data.ships.map((ship: ShipShort) => (
                <tr key={ship.id} className='table__row'>
                  <td className='table__row-cell'>{ship.name}</td>
                  <td className='table__row-cell'>{ship.type}</td>
                  <td className='table__row-cell'>{bool(ship.active)}</td>
                  <td className='table__row-cell'>{ship.year_built || '-'}</td>
                  <td className='table__row-cell'>{ship.home_port}</td>
                  <td className='table__row-cell'>
                    {ship.missions.length > 0 && (
                      <ShowIcon
                        action={toggleMissionModal}
                        args={ship.missions}
                      />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={7}>
                  <b>Total: {data.ships.length}</b>
                </td>
              </tr>
            </tfoot>
          </table>
        </>
      ) : (
        <Loader />
      )}
      {missions.length ? (
        <ShipMissionModal missions={missions} close={toggleMissionModal} />
      ) : null}
    </div>
  );
}
