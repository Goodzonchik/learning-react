import React, { useEffect, useState } from 'react';

import { fetchData } from './Components/Utils/dataHelpers';
import ItemField from './Components/ItemField/ItemField';
import Loader from './Components/Loader/Loader';
import { money, pint } from './Components/Utils/formatHelpers';

interface AboutCompany {
  name: string;
  summary: string;
  founder: string;
  founded: string;
  employees: number;
  valuation: number;
  headquarters: Headquarters;
}

interface Headquarters {
  state: string;
  city: string;
  address: string;
}

export default function About() {
  const [info, setInfo] = useState<AboutCompany>();

  useEffect(() => {
    fetchData('info').then((data: AboutCompany) => {
      setInfo(data);
    });
  }, []);

  return (
    <>
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
    </>
  );
}
