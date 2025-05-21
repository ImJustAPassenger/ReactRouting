import { useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";

function Event() {
  const data = useLoaderData();
  if (data.isError) {
    return <p> {data.message}</p>;
  }
  const events = data.events;
  return <>{<EventsList events={events} />}</>;
}

export default Event;

export async function loader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    //return { isError: true, message: "could not fetch events" };
    throw  {message:'could not fetch message'}
  } else {
    return response;
  }
}
