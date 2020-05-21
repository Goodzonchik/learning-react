import React, { useEffect, useState } from 'react';

import { fetchData } from '../Components/Utils/dataHelpers';
import { bool } from '../Components/Utils/formatHelpers';

import Loader from '../Components/Loader/Loader';
import ShipMissionModal from './ShipMissionModal';

import './Ships.scss';
import ShowIcon from '../Components/ShowIcon';

interface ShipShort {
  ship_id: string;
  ship_name: string;
  ship_type: string;
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
  const [ships, setShips] = useState<ShipShort[]>([]);
  const [missions, setMissions] = useState<ShipMissionShort[]>([]);

  useEffect(() => {
    fetchData('ships').then((data: ShipShort[]) => {
      setShips(data);
    });
  }, []);

  function toggleMissionModal(missions?: ShipMissionShort[]) {
    setMissions(missions || []);
  }

  const shipsList = ships.map((ship: ShipShort) => (
    <tr key={ship.ship_id} className='table__row'>
      <td className='table__row-cell'>{ship.ship_name}</td>
      <td className='table__row-cell'>{ship.ship_type}</td>
      <td className='table__row-cell'>{bool(ship.active)}</td>
      <td className='table__row-cell'>{ship.year_built || '-'}</td>
      <td className='table__row-cell'>{ship.home_port}</td>
      <td className='table__row-cell'>
        {ship.missions.length > 0 && (
          <ShowIcon action={toggleMissionModal} args={ship.missions} />
        )}
      </td>
    </tr>
  ));

  return (
    <div className='list-container'>
      {ships.length ? (
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
            <tbody>{shipsList}</tbody>
            <tfoot>
              <tr>
                <td colSpan={7}>
                  <b>Total: {ships.length}</b>
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
