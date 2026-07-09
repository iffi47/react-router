import { data, redirect, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

export default function EventDetailPage() {
 const eventData = useRouteLoaderData("event-detail");
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

export async function action({ params, request }) {
 const response = fetch(`http://localhost:8080/events/${params.id}`, {
  method: request.method,
 });
 if (!response) {
  throw data({ message: "Could not delete event!" }, { status: 500 });
 } else {
  return redirect("/events");
 }
}
