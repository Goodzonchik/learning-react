import React, { useEffect } from 'react';
import { fetchData, moneyFilter } from '../Utils/dataHelper';
import { useParams } from 'react-router-dom';
import ItemField from '../Shared/ItemField/ItemField';
import RocketSize from '../Shared/RocketSize/RocketSize';
import Galery from '../Shared/Galery/Galery';
import Loader from '../Shared/Loader';
import './Rocket.css';

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
  const [rocket, setRocket] = React.useState<Rocket>();

  useEffect(() => {
    fetchData(`rockets/${rocketId}`).then((data: Rocket) => {
      setRocket(data);
    });
  }, [rocketId]);

  return (
    <div>
      {rocket ? (
        <div>
          <div className={'page-header'}>
            <h2>{rocket.rocket_name}</h2>
            <div>{rocket.description}</div>
          </div>
          <div className={'rocket-fields-container'}>
            <div>
              <RocketSize
                diameter={`${rocket.diameter.meters}meters/${rocket.diameter.feet}feet`}
                height={`${rocket.height.meters}meters/${rocket.height.feet}feet`}
              ></RocketSize>
            </div>

            <div className={'rocket-fields'}>
              <ItemField
                data={{ title: 'company', value: rocket.company }}
              ></ItemField>
              <ItemField
                data={{ title: 'country', value: rocket.country }}
              ></ItemField>
              <ItemField
                data={{
                  title: 'cost per launch',
                  value: `${moneyFilter(rocket.cost_per_launch)}`,
                }}
              ></ItemField>
              <ItemField
                data={{
                  title: 'active',
                  value: rocket.active ? 'true' : 'false',
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
                  value: `${rocket.mass.kg}kg/${rocket.mass.lb}lb`,
                }}
              ></ItemField>
              <ItemField
                data={{ title: 'first flight', value: rocket.first_flight }}
              ></ItemField>
            </div>
          </div>

          <div>
            <Galery images={rocket.flickr_images}></Galery>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}
