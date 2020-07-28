import React, { useEffect, useState } from 'react';

import { fetchData } from '../Components/Utils/dataHelpers';
import ItemField from '../Components/ItemField/ItemField';
import Loader from '../Components/Loader/Loader';
import Calendar from '../Components/Calendar/Calendar';

interface Launch {
  mission_name: string;
  launch_date_local: string;
  flight_number: number;
  rocket: { rocket_name: string };
  details: string;
}

export default function NextLaunch() {
  const [launch, setLaunch] = useState<Launch>();

  useEffect(() => {
    fetchData(`launches/next`).then((data: any) => {
      setLaunch(data);
    });
  }, []);

  return (
    <>
      {launch ? (
        <>
          <h2>{launch?.mission_name}</h2>
          <ItemField
            data={{ title: 'Flight number', value: launch?.flight_number }}
          />
          <ItemField
            data={{ title: 'Rocket', value: launch?.rocket.rocket_name }}
          />
          <p>{launch?.details}</p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Calendar currentDate={launch?.launch_date_local} />
          </div>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
}
