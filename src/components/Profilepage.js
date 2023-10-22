import React from "react";
import Sidebar from "../Layout/Sidebar";
import ProfileDetail from "./ProfileDetail";

const Profilepage = () => {
  
  return (
    <div className="container-fluid" style={{ height: "90vh" }}>
      <div className="row flex-nowrap h-100 m-5">
        <div className="col-3 pe-0">
          <Sidebar />
        </div>
        <ProfileDetail userId={2}/>
      </div>
    </div>
  );
};

export default Profilepage;
