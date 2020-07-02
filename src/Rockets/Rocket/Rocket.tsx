import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchData } from '../../Components/Utils/dataHelpers';
import ItemField from '../../Components/ItemField/ItemField';
import RocketSize from '../../Components/RocketSize/RocketSize';
import Galery from '../../Components/Galery/Galery/Galery';
import Loader from '../../Components/Loader/Loader';
import { pint, money, bool, size } from '../../Components/Utils/formatHelpers';

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
  diameter: RocketProportion;
  height: RocketProportion;
  mass: RocketMass;
}

interface RocketProportion {
  feet: number;
  meters: number;
}

interface RocketMass {
  kg: number;
  lb: number;
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
          <div className='about-rocket'>
            <RocketSize
              diameter={size(rocket.diameter)}
              height={size(rocket.height)}
            ></RocketSize>

            <div className='about-rocket__fields'>
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
