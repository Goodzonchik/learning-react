import React, { useEffect, useState } from 'react';
import { fetchData } from '../Shared/Utils/dataHelpers';
import { useParams } from 'react-router-dom';
import ItemField from '../Shared/ItemField/ItemField';
import Loader from '../Shared/Loader';

interface Event {
  title: string;
  details: string;
  event_date_utc: string;
  flight_number: string;
}

export default function Event() {
  const { eventId } = useParams();
  const [event, setEvent] = useState<Event>();

  useEffect(() => {
    fetchData(`history/${eventId}`).then((data: Event) => {
      setEvent(data);
    });
  }, [eventId]);

  return (
    <>
      {event ? (
        <>
          <h2>{event.title}</h2>
          <div>{event.details}</div>
          <ItemField
            data={{ title: 'event date (utc)', value: event.event_date_utc }}
          ></ItemField>
          <ItemField
            data={{ title: 'flight number', value: event.flight_number }}
          ></ItemField>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
}
