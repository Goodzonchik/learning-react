import React from 'react';

interface ShipMissionsShort {
  missions: ShipMissionShort[];
  close: (missions: ShipMissionShort[]) => void;
}

interface ShipMissionShort {
  name: string;
  flight: number;
}

export default function ShipMissionModal({
  missions,
  close,
}: ShipMissionsShort) {
  const shipsList = missions.map((mission: ShipMissionShort) => (
    <tr key={mission.name}>
      <td>{mission.name}</td>
      <td>{mission.flight}</td>
    </tr>
  ));

  return (
    <div className='overlay'>
      <div className='modal'>
        <div className='modal-head'>
          <h3>Mission</h3>
          <span
            onClick={() => {
              close([]);
            }}
          >
            &times;
          </span>
        </div>
        <div className='modal-body'>
          <table className='table'>
            <thead className='table-head'>
              <tr>
                <td>Name</td>
                <td>Flight number</td>
              </tr>
            </thead>
            <tbody>{shipsList}</tbody>
            <tfoot>
              <tr>
                <td colSpan={7}>
                  <b>Total: {missions.length}</b>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}
