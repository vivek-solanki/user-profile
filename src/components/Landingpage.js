import React from "react";
import { useUserContext } from "../context/usercontext";
import UserList from "./UserList";

const Landingpage = () => {
  const { isLoading, users } = useUserContext();

  if (isLoading) {
    return <div>.....Loading</div>;
  }

  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center  bg-primary"
      style={{ height: "100vh" }}
    >
      <div className="modal-dialog">
        <div
          className="modal-content bg-white rounded-5 shadow"
          style={{ height: "80vh", width: "40vw" }}
        >
          <div className="h-25 d-flex justify-content-center align-items-center bg-light rounded-top-5">
            <h5 className="modal-title fs-3 fw-bold">Select an account</h5>
          </div>
          <div className="modal-body overflow-scroll overflow-x-hidden pt-3">
            {users.map((elem) => (
              <>
                <UserList key={elem.id} {...elem} />
              </>
            ))}
          </div>
          <div className="modal-footer" style={{ height: "4vh" }}></div>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
