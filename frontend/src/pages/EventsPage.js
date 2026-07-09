// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

function EventsPage() {
 // const [isLoading, setIsLoading] = useState(false);
 // const [fetchedEvents, setFetchedEvents] = useState();
 // const [error, setError] = useState();

 const { events } = useLoaderData();
 //  if(isError){
 //   return <p>{message}</p>
 //  }
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
  throw new Response(
   JSON.stringify({ message: "Could not fetch events!" }, { status: 500 }),
  );
 } else {
  return response;
 }
};
