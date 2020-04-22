import React, { useEffect } from 'react';
import { fetchData } from './Utils/dataHelper';
import ItemField from './Shared/ItemField/ItemField';
import Loader from './Shared/Loader';

const styles = {
  container: {
    display: 'block',
    padding: '1em',
    margin: '1em',
    width: '100%',
    height: '100%',
  },
};

interface AboutCompany {
  name: string;
  summary: string;
  founder: string;
  founded: string;
  employees: number;
  valuation: number;
  headquarters: {
    state: string;
    city: string;
    address: string;
  };
}

export default function About() {
  const [info, setInfo] = React.useState<AboutCompany>();

  useEffect(() => {
    fetchData('info').then((data: AboutCompany) => {
      setInfo(data);
    });
  }, []);

  return (
    <div style={styles.container}>
      {info ? (
        <div>
          <h2>{info.name}</h2>
          <div>{info.summary}</div>
          <ItemField
            data={{ title: 'founder', value: info.founder }}
          ></ItemField>
          <ItemField
            data={{ title: 'founded', value: info.founded }}
          ></ItemField>
          <ItemField
            data={{ title: 'employees', value: info.employees }}
          ></ItemField>
          <ItemField
            data={{ title: 'valuation', value: info.valuation }}
          ></ItemField>
          <ItemField
            data={{
              title: 'headquarters',
              value: `${info.headquarters.state}, ${info.headquarters.city}, ${info.headquarters.address}`,
            }}
          ></ItemField>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}
