import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const username = "Sebastián";
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" activeClassName="active" className="item">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`/profile/${username}`}
            activeClassName="active"
            className="item"
          >
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/musicstore" activeClassName="active" className="item">
            Music Store
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
