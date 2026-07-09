import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../pages/Root";
import Error from "../pages/Error";
import HomePage from "../pages/HomePage";
import EventsPage, { loader as eventLoader } from "../pages/EventsPage";
import EventDetailPage, {
 loader as eventDetailLoader,
} from "../pages/EventDetailPage";
import NewEventPage from "../pages/NewEventPage";
import EditEvent from "../pages/EditEventPage";
import EventsRoot from "../pages/EventsRoot";

export const router = createBrowserRouter([
 {
  path: "/",
  element: <RootLayout />,
  errorElement: <Error />,
  children: [
   { index: true, element: <HomePage /> },
   {
    path: "events",
    element: <EventsRoot />,
    children: [
     {
      index: true,
      element: <EventsPage />,
      loader: eventLoader,
     },
     {
      path: ":id",
      id:'event-detail',
      loader: eventDetailLoader,
      children: [
       { index: true, element: <EventDetailPage /> },
       { path: "edit", element: <EditEvent /> },
      ],
     },
     { path: "new", element: <NewEventPage /> },
    ],
   },
  ],
 },
]);
