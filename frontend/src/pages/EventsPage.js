// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

function EventsPage() {
 // const [isLoading, setIsLoading] = useState(false);
 // const [fetchedEvents, setFetchedEvents] = useState();
 // const [error, setError] = useState();

 const events = useLoaderData();
 return (
  <>
   {/* <div style={{ textAlign: 'center' }}>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
      </div> */}
   <EventsList events={events} />
  </>
 );
}

export default EventsPage;

export const loader = async () => {
 const response = await fetch("http://localhost:8080/events");
 if (!response.ok) {
 } else {
  const resData = await response.json();
  return resData.events;
 }
};
