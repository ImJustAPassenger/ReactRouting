import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "some event",
  },
  {
    id: "e2",
    title: "another event",
  },
  {
    id: "e3",
    title: "another else event",
  },
];
export default function Event() {
  return (
    <>
      <h1>Event</h1>;
      <ul>
        {DUMMY_EVENTS.map((event) => {
          return (
            <li key={event.id}>
              <Link to={event.id}>{event.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
