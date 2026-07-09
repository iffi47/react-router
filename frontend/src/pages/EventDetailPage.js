import { data, useLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

export default function EventDetailPage() {
 const eventData = useLoaderData();
 return (
  <>
   <EventItem event={eventData.event} />
  </>
 );
}

export async function loader({ request, params }) {
 const response = await fetch(`http://localhost:8080/events/${params.id}`);
 if (!response) {
  throw data(
   { message: "Could not fetch data details for selected event" },
   { status: 500 },
  );
 } else {
  return response;
 }
}
