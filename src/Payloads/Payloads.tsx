import React from 'react';
import { Bar, BarChart, XAxis, Tooltip, CartesianGrid } from 'recharts';

import Loader from '../Components/Loader/Loader';

import './Payloads.scss';

import { useQuery, gql } from '@apollo/client';

const payloadsData = gql`
  query {
    payloads {
      id
      payload_type
      payload_mass_kg
    }
  }
`;

interface PayloadModel {
  id: string;
  payload_type: string;
  payload_mass_kg: number;
}

const geyPayloads = (payloads: PayloadModel[]) => {
  return payloads
    .filter((payload: PayloadModel) => payload.payload_mass_kg)
    .map((payload: PayloadModel) => {
      return {
        name: `${payload.id} / ${payload.payload_type}`,
        value: payload.payload_mass_kg,
      };
    });
};

export default function Payloads() {
  const { data } = useQuery(payloadsData);

  return (
    <div className='payload-container'>
      {data ? (
        <BarChart width={900} height={500} data={geyPayloads(data.payloads)}>
          <XAxis dataKey='name' />
          <Tooltip />
          <CartesianGrid stroke='#f5f5f5' />
          <Bar dataKey='value' unit={' kg'} fill='#8884d8' barSize={80} />
        </BarChart>
      ) : (
        <Loader />
      )}
    </div>
  );
}
