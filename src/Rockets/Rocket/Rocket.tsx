import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchData } from '../../Shared/Utils/dataHelpers';
import ItemField from '../../Shared/ItemField/ItemField';
import RocketSize from '../../Shared/RocketSize/RocketSize';
import Galery from '../../Shared/Galery/Galery/Galery';
import Loader from '../../Shared/Loader';
import { pint, money, bool, size } from '../../Shared/Utils/formatHelpers';

import './Rocket.scss';

interface Rocket {
  rocket_name: string;
  description: string;
  company: string;
  country: string;
  cost_per_launch: number;
  active: boolean;
  stages: number;
  boosters: number;
  flickr_images: string[];
  first_flight: string;
  diameter: {
    feet: number;
    meters: number;
  };
  height: {
    feet: number;
    meters: number;
  };
  mass: {
    kg: number;
    lb: number;
  };
}

export default function Rocket() {
  const { rocketId } = useParams();
  const [rocket, setRocket] = useState<Rocket>();

  useEffect(() => {
    fetchData(`rockets/${rocketId}`).then((data: Rocket) => {
      setRocket(data);
    });
  }, [rocketId]);

  return (
    <>
      {rocket ? (
        <>
          <div className='page-header'>
            <h2>{rocket.rocket_name}</h2>
            <div>{rocket.description}</div>
          </div>
          <div className='rocket-fields-container'>
            <RocketSize
              diameter={size(rocket.diameter)}
              height={size(rocket.height)}
            ></RocketSize>

            <div className='rocket-fields'>
              <ItemField
                data={{ title: 'company', value: rocket.company }}
              ></ItemField>
              <ItemField
                data={{ title: 'country', value: rocket.country }}
              ></ItemField>
              <ItemField
                data={{
                  title: 'cost per launch',
                  value: `${money(rocket.cost_per_launch)}`,
                }}
              ></ItemField>
              <ItemField
                data={{
                  title: 'active',
                  value: bool(rocket.active),
                }}
              ></ItemField>
              <ItemField
                data={{ title: 'stages', value: rocket.stages }}
              ></ItemField>
              <ItemField
                data={{ title: 'boosters', value: rocket.boosters }}
              ></ItemField>
              <ItemField
                data={{
                  title: 'mass',
                  value: `${pint(rocket.mass.kg)}kg/${pint(rocket.mass.lb)}lb`,
                }}
              ></ItemField>
              <ItemField
                data={{ title: 'first flight', value: rocket.first_flight }}
              ></ItemField>
            </div>
          </div>

          <Galery images={rocket.flickr_images}></Galery>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
}
