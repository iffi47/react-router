import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
const PAGES = [
 { name: "Home", path: "/" },
 { name: "Events", path: "/events" },
];

function MainNavigation() {
 return (
  <header className={classes.header}>
   <nav>
    <ul className={classes.list}>
     {PAGES.map((page) => (
      <li>
       <NavLink
        className={({ isActive }) => (isActive ? classes.active : undefined)}
        to={page.path}
        end={page.name === "Home"}>
        {page.name}
       </NavLink>
      </li>
     ))}
    </ul>
   </nav>
  </header>
 );
}

export default MainNavigation;
