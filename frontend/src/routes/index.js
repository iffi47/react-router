import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../pages/Root";
import Error from "../pages/Error";
import HomePage from "../pages/HomePage";
import EventsPage from "../pages/EventsPage";
import EventDetailPage from "../pages/EventDetailPage";
import NewEventPage from "../pages/NewEventPage";
import EditEvent from "../pages/EditEventPage";

export const router = createBrowserRouter([
 {
  path: "/",
  element: <RootLayout />,
  errorElement: <Error />,
  children: [
   { index: true, element: <HomePage /> },
   { path: "/events", element: <EventsPage /> },
   { path: "/events/:id", element: <EventDetailPage /> },
   { path: "/events/new", element: <NewEventPage /> },
   { path: "/events/:id/edit", element: <EditEvent /> },
  ],
 },
]);
