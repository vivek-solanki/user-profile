import React from "react";
import { Link } from "react-router-dom";

const UserList = (elem) => {
  const { id, name, profilepicture } = elem;
  return (
    <div className="ms-4 me-4">
      <Link
        to={`/profile/${id}`}
        className="text-decoration-none text-black"
      >
        <div className="d-flex flex-row align-items-center">
          <img
            src={profilepicture}
            alt={name}
            className="rounded-circle"
            style={{ width: 50, height: 50 }}
          />
          <p className="fs-3 ms-4">{name}</p>
        </div>
      </Link>
      <hr />
    </div>
  );
};

export default UserList;
