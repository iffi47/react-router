import { useRouteError } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";

export default function Error() {
 const error = useRouteError();
 let title = "An error occurred";
 let message = "Something went wrong!";

 if (error.status === 500) {
  message = error.data.message;
 }
 if ((error.status = 404)) {
  title = "Not found!";
  message = "Could not found page/resource!";
 }
 return (
  <>
   <MainNavigation />
   <main>
    <h1>{title}</h1>
    <p>{message}!</p>
    {/* <h2>404 Page not Found!</h2> */}
   </main>
  </>
 );
}
