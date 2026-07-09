import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../pages/Root";
import Error from "../pages/Error";
import HomePage from "../pages/HomePage";
import EventsPage from "../pages/EventsPage";
import EventDetailPage from "../pages/EventDetailPage";
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
     { index: true, element: <EventsPage /> },
     { path: ":id", element: <EventDetailPage /> },
     { path: "new", element: <NewEventPage /> },
     { path: ":id/edit", element: <EditEvent /> },
    ],
   },
  ],
 },
]);
