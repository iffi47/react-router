import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
 {
  id: "e1",
  title: "React Conference 2026",
  date: "2026-08-12",
  location: "New York, NY",
  description: "A full day of React talks, workshops, and networking.",
 },
 {
  id: "e2",
  title: "Frontend Hackathon",
  date: "2026-09-05",
  location: "Remote",
  description:
   "Build inspiring web apps in a weekend with other frontend developers.",
 },
 {
  id: "e3",
  title: "JavaScript Meetup",
  date: "2026-10-20",
  location: "San Francisco, CA",
  description:
   "Monthly meetup covering modern JavaScript, tooling, and best practices.",
 },
];

export default function EventsPage() {
 return (
  <>
   <h1>Events Page</h1>
   <ul>
    {DUMMY_EVENTS.map((event) => (
     <li key={event.id}>
      <Link to={event.id}>
       <h2>{event.title}</h2>
      </Link>
      <p>
       {event.date} — {event.location}
      </p>
      <p>{event.description}</p>
     </li>
    ))}
   </ul>
  </>
 );
}
