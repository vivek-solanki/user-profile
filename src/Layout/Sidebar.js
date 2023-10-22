import React from "react";
import "../style/Sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar rounded-5 d-flex justify-content-start align-items-center">
      <ul className="ps-3 w-100 pe-2">
        <li>
          <Link
            to="/profile"
            className="text-decoration-none text-white fs-3 fw-medium"
          >
            Profile
          </Link>
        </li>
        <hr />
        <li>
          <Link
            to="/post"
            className="text-decoration-none text-white fs-3 fw-medium"
          >
            Post
          </Link>
        </li>
        <hr />
        <li>
          <Link
            to="/gallary"
            className="text-decoration-none text-white fs-3 fw-medium"
          >
            Gallery
          </Link>
        </li>
        <hr />
        <li>
          <Link
            to="/todo"
            className="text-decoration-none text-white fs-3 fw-medium"
          >
            ToDo
          </Link>
        </li>
        <hr />
      </ul>
    </div>
  );
}

export default Sidebar;
