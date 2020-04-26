import React, { useEffect } from 'react';
import { fetchData } from '../Shared/Utils/dataHelpers';
import Loader from '../Shared/Loader';

import './Ships.scss';
import ShipMissionModal from './ShipMissionModal';
import { bool } from '../Shared/Utils/formatHelpers';

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
  /*
    TODO
    Фильтр по полям полей
    Сортировка
  */

  const [ships, setShips] = React.useState<ShipShort[]>([]);
  const [missions, setMissions] = React.useState<ShipMissionShort[]>([]);

  useEffect(() => {
    fetchData('ships').then((data: ShipShort[]) => {
      setShips(data);
    });
  }, []);

  function showMissionModal(missions: ShipMissionShort[]) {
    setMissions(missions);
  }

  const shipsList = ships.map((ship: ShipShort) => (
    <tr key={ship.ship_id} className={'table-row'}>
      <td>{ship.ship_name}</td>
      <td>{ship.ship_type}</td>
      <td>{bool(ship.active)}</td>
      <td>{ship.year_built || '-'}</td>
      <td>{ship.home_port}</td>
      <td
        onClick={() => {
          showMissionModal(ship.missions);
        }}
      >
        {ship.missions.length}
      </td>
    </tr>
  ));

  return (
    <div className={'list-container'}>
      {ships.length ? (
        <table className={'table'}>
          <thead className={'table-head'}>
            <tr>
              <td>Name</td>
              <td>Type</td>
              <td>Active</td>
              <td>Year built</td>
              <td>Home port</td>
              <td>Missions</td>
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
      ) : (
        <Loader />
      )}
      {missions.length ? (
        <ShipMissionModal missions={missions} close={showMissionModal} />
      ) : null}
    </div>
  );
}
