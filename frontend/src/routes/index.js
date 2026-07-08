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
   { path: "", element: <HomePage /> },
   {
    path: "/events",
    element: <EventsPage />,
    children: [
     { path: ":id", element: <EventDetailPage /> },
     { path: "new", element: <NewEventPage /> },
     { path: ":id/edit", element: <EditEvent /> },
    ],
   },
  ],
 },
]);
