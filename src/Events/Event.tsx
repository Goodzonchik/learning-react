import React, { useEffect } from 'react';
import { fetchData } from '../Utils/dataHelper';
import { useParams } from 'react-router-dom';
import ItemField from '../Shared/ItemField';

export default function Event() {
  const { eventId } = useParams();
  const [event, setEvent] = React.useState([]);

  useEffect(() => {
    fetchData(`history/${eventId}`).then((data: any) => {
      setEvent(data);
    });
  }, []);

  return (
    <div>
      {event ? (
        <div>
          <h2>{(event as any)?.title}</h2>
          <div>{(event as any)?.details}</div>
          <ItemField
            title={'event date (utc)'}
            value={(event as any)?.event_date_utc}
          ></ItemField>
          <ItemField
            title={'flight number)'}
            value={(event as any)?.flight_number}
          ></ItemField>
        </div>
      ) : (
        <div>noop</div>
      )}
    </div>
  );
}
