import { Await, useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";
import { Suspense } from "react";

function Event() {
  const { events } = useLoaderData();
  /* if (data.isError) {
    return <p> {data.message}</p>;
  } */
  return (
    <Suspense>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>

    /* 
  const events = data.events;
  return <>{<EventsList events={events} />}</> */
  );
}

export default Event;

async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "Could not fetch events" }), {
      status: 500,
    });
  } else {
    const resData = await response.json()
    return resData.events
  }
}

export function loader() {
  return { events: loadEvents() };
}
