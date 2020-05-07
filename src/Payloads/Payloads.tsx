import React, { useState, useEffect } from 'react';
import { fetchData } from '../Shared/Utils/dataHelpers';
import { Bar, BarChart, XAxis, Tooltip, CartesianGrid } from 'recharts';

interface PayloadModel {
  payload_id: string;
  payload_type: string;
  payload_mass_kg: number;
}

interface ChartModel {
  name: string;
  value: number;
}

export default function Payloads() {
  const [payloads, setPayloads] = useState<ChartModel[]>([]);

  useEffect(() => {
    fetchData('payloads').then((data: PayloadModel[]) => {
      setPayloads(
        data
          .filter((payload: PayloadModel) => payload.payload_mass_kg)
          .map((payload: PayloadModel) => {
            return {
              name: `${payload.payload_id} / ${payload.payload_type}`,
              value: payload.payload_mass_kg,
            };
          })
      );
    });
  }, []);

  return (
    <div
      className='entity-container'
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      {payloads.length > 0 && (
        <BarChart width={900} height={500} data={payloads}>
          <XAxis dataKey='name' />
          <Tooltip />
          <CartesianGrid stroke='#f5f5f5' />
          <Bar dataKey='value' unit={' kg'} fill='#8884d8' barSize={80} />
        </BarChart>
      )}
    </div>
  );
}
