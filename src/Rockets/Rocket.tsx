import React, { useEffect } from 'react';
import { fetchData, moneyFilter } from '../Utils/dataHelper';
import { useParams } from 'react-router-dom';
import ItemField from '../Shared/ItemField';
import RocketSize from '../Shared/RocketSize';
import Galery from '../Shared/Galery';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  items: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    paddingTop: '1em',
  },
  header: {
    padding: '0 20px',
  },
};

export default function Rocket() {
  const { rocketId } = useParams();
  const [rocket, setRocket] = React.useState([]);

  useEffect(() => {
    fetchData(`rockets/${rocketId}`).then((data: any) => {
      setRocket(data);
    });
  }, []);

  return (
    <div>
      {rocket ? (
        <div>
          <div style={styles.header}>
            <h2>{(rocket as any)?.rocket_name}</h2>
            <div>{(rocket as any)?.description}</div>
          </div>
          <div style={styles.container}>
            <div>
              <RocketSize
                diameter={`${(rocket as any)?.diameter?.meters}meters/${
                  (rocket as any)?.diameter?.feet
                }feet`}
                height={`${(rocket as any)?.height?.meters}meters/${
                  (rocket as any)?.height?.feet
                }feet`}
              ></RocketSize>
            </div>

            <div style={styles.items}>
              <ItemField
                title={'company'}
                value={(rocket as any)?.company}
              ></ItemField>
              <ItemField
                title={'country'}
                value={(rocket as any)?.country}
              ></ItemField>
              <ItemField
                title={'cost per launch'}
                value={`${moneyFilter((rocket as any)?.cost_per_launch)}`}
              ></ItemField>
              <ItemField
                title={'active'}
                value={(rocket as any)?.active ? 'true' : 'false'}
              ></ItemField>
              <ItemField
                title={'stages'}
                value={(rocket as any)?.stages}
              ></ItemField>
              <ItemField
                title={'boosters'}
                value={(rocket as any)?.boosters}
              ></ItemField>
              <ItemField
                title={'mass'}
                value={`${(rocket as any)?.mass?.kg}kg/${
                  (rocket as any)?.mass?.lb
                }lb`}
              ></ItemField>
              <ItemField
                title={'first flight'}
                value={(rocket as any)?.first_flight}
              ></ItemField>
            </div>
          </div>

          <div>
            <Galery images={(rocket as any)?.flickr_images || []}></Galery>
          </div>
        </div>
      ) : (
        <div>noop</div>
      )}
    </div>
  );
}
