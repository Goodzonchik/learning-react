import * as React from 'react';

const styles = {
  item: {
    display: 'flex',
    width: '100%',
    margin: '0.75em 0',
  },
  label: {
    paddingRight: '0.5em',
  },
};

export default function ItemField(props: any) {
  return (
    <div style={styles.item}>
      <strong style={styles.label}>{props.title}:</strong>
      <span>{props.value}</span>
    </div>
  );
}
