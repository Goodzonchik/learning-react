import React, { useEffect } from 'react';
import { fetchData } from './Shared/Utils/dataHelpers';
import ItemField from './Shared/ItemField/ItemField';
import Loader from './Shared/Loader';
import { money, pint } from './Shared/Utils/formatHelpers';

const styles = {
  container: {
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
        <>
          <h2>{info.name}</h2>
          <div>{info.summary}</div>
          <ItemField
            data={{ title: 'founder', value: info.founder }}
          ></ItemField>
          <ItemField
            data={{ title: 'founded', value: info.founded }}
          ></ItemField>
          <ItemField
            data={{
              title: 'employees',
              value: pint(info.employees),
            }}
          ></ItemField>
          <ItemField
            data={{ title: 'valuation', value: money(info.valuation) }}
          ></ItemField>
          <ItemField
            data={{
              title: 'headquarters',
              value: `${info.headquarters.state}, ${info.headquarters.city}, ${info.headquarters.address}`,
            }}
          ></ItemField>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
}
