import React, { useEffect } from 'react';
import { fetchData } from './Utils/dataHelper';
import ItemField from './Shared/ItemField';

const styles = {
  container: {
    display: 'block',
    padding: '20px',
    width: '100%',
    height: '100%',
  },
  ship: {
    margin: '1rem',
    padding: '1rem',
    border: '1px solid #c3c3c3',
    borderRadius: '4px',
  },
};

export default function About() {
  const [info, setInfo] = React.useState([]);

  useEffect(() => {
    fetchData('info').then((data: any) => {
      setInfo(data);
    });
  }, []);

  return (
    <div style={styles.container}>
      <h2>{(info as any)?.name}</h2>
      <div>{(info as any)?.summary}</div>
      <ItemField title={'founder'} value={(info as any)?.founder}></ItemField>
      <ItemField title={'founded'} value={(info as any)?.founded}></ItemField>
      <ItemField
        title={'employees'}
        value={(info as any)?.employees}
      ></ItemField>
      <ItemField
        title={'valuation'}
        value={`${(info as any)?.valuation} $`}
      ></ItemField>
      <ItemField
        title={'headquarters'}
        value={`${(info as any)?.headquarters?.state}, ${
          (info as any)?.headquarters?.city
        }, ${(info as any)?.headquarters?.address}`}
      ></ItemField>
    </div>
  );
}
