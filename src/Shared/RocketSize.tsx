import * as React from 'react';

const styles = {
  container: {
    width: '120px',
    height: '400px',
    margin: '25px 70px 50px',
  },
  item: {
    position: 'relative' as 'relative',
    display: 'flex',
    width: '70px',
    height: '350px',
  },
  height: {
    position: 'absolute' as 'absolute',
    height: '350px',
    border: '1px solid #638ede',
    borderLeft: 'none',
    display: 'flex',
    width: '100px',
    label: {
      top: 'calc(350px / 2)',
      right: '-45px',
      position: 'relative' as 'relative',
      backgroundColor: '#fff',
      height: '1.6em',
    },
  },
  diameter: {
    position: 'absolute' as 'absolute',
    width: '28px',
    border: '1px solid #638ede',
    borderTop: 'none',
    height: '320px',
    bottom: '-25px',

    label: {
      right: '50px',
      position: 'relative' as 'relative',
      backgroundColor: '#fff',
      height: '1.6em',
      bottom: '-325px',
    },
  },
};

export default function RocketSize(props: any) {
  return (
    <div style={styles.container}>
      <div style={styles.item}>
        <img src='../rocket.png'></img>
        <div style={styles.diameter}>
          <span style={styles.diameter.label}>{props.diameter}</span>
        </div>
        <div style={styles.height}>
          <span style={styles.height.label}>{props.height}</span>
        </div>
      </div>
    </div>
  );
}
