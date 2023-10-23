import React from "react";
import "../style/Sidebar.css";
import { NavLink } from "react-router-dom";

function Sidebar(elem) {
  const { id } = elem;

  return (
    <div className="sidebar rounded-5 d-flex justify-content-start align-items-center">
      <ul className="ps-3 w-100 pe-2">
        <li>
          <NavLink
            to={`/profile/${id}`}
            className="text-decoration-none text-white fs-3 fw-medium active"
          >
            Profile
          </NavLink>
        </li>
        <hr />
        <li>
          <NavLink
            to="/post"
            className="text-decoration-none text-white fs-3 fw-medium"
          >
            Post
          </NavLink>
        </li>
        <hr />
        <li>
          <NavLink
            to="/gallary"
            className="text-decoration-none text-white fs-3 fw-medium"
          >
            Gallery
          </NavLink>
        </li>
        <hr />
        <li>
          <NavLink
            to="/todo"
            className="text-decoration-none text-white fs-3 fw-medium"
          >
            ToDo
          </NavLink>
        </li>
        <hr />
      </ul>
    </div>
  );
}

export default Sidebar;
