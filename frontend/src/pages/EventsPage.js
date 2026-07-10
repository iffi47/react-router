// import { useEffect, useState } from "react";
import { useLoaderData, data, Await } from "react-router-dom";
import EventsList from "../components/EventsList";
import { Suspense } from "react";

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
      </div>export const loader =  () => {
 
}; */}
   <Suspense fallback={<p>Loading....</p>}>
    <Await resolve={events}>
     {(laodedEvents) => <EventsList events={laodedEvents} />}
    </Await>
   </Suspense>
  </>
 );
}

export default EventsPage;
async function loadEvents(params) {
 const response = await fetch("http://localhost:8080/events");
 if (!response.ok) {
  throw data({ message: "Could not fetch events!" }, { status: 500 });
 }
 const resData = await response.json();
 return resData.events;
}
export async function loader() {
 return {
  events: loadEvents(),
 };
}
