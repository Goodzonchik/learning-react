import React from 'react';

import ItemField from './Components/ItemField/ItemField';
import Loader from './Components/Loader/Loader';
import { money, pint } from './Components/Utils/formatHelpers';

import { useQuery, gql } from '@apollo/client';

const companyData = gql`
  query {
    company {
      ceo
      founded
      founder
      headquarters {
        address
        city
        state
      }
      name
      valuation
      summary
      employees
    }
  }
`;

const fields = function (data: any) {
  const company = data.company;
  return [
    { title: 'founder', value: company.founder },
    { title: 'founded', value: company.founded },
    { title: 'employees', value: pint(company.employees) },
    { title: 'valuation', value: money(company.valuation) },
    {
      title: 'headquarters',
      value: `${company.headquarters.state}, ${company.headquarters.city}, ${company.headquarters.address}`,
    },
  ];
};

export default function About() {
  const { data } = useQuery(companyData);

  return (
    <>
      {data ? (
        <>
          <h2>{data.company.name}</h2>
          <div>{data.company.summary}</div>
          {fields(data).map((field) => (
            <ItemField key={field.title} data={field}></ItemField>
          ))}
        </>
      ) : (
        <Loader />
      )}
    </>
  );
}
