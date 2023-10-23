import React, { useEffect, useState } from 'react'
import Sidebar from '../Layout/Sidebar'
import { Link } from 'react-router-dom';
import axios from 'axios';

const Todo = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
      axios
        .get("https://panorbit.in/api/users.json")
        .then((res) => {
          const user = res.data.users.find((user) => user.id === 1);
          if (user) {
            setUserData(user);
          } else {
            console.error(`User ${1} not found`);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }, []);
    return (
      <div className="container-fluid" style={{ height: "90vh" }}>
        <div className="row flex-nowrap h-100 m-5">
          <div className="col-3 pe-0">
            <Sidebar />
          </div>
          <div className="col-9 ps-0">
            {userData ? (
              <>
                <div className="row flex-nowrap align-items-center pt-4">
                  <h3 className="col-6">ToDo</h3>
                  <div className="col-6 text-end">
                    <div className="container">
                      <div className="dropdown d-flex justify-content-end">
                        <button
                          className="row align-items-center border-0 flex-nowrap bg-transparent"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <img
                            className="col-2 rounded-circle p-0"
                            style={{ height: 50, width: 50 }}
                            src={userData.profilepicture}
                            alt="profilepicture"
                          />
                          <h4 className="col-10 text-start">{userData.name}</h4>
                        </button>
                        <ul className="dropdown-menu text-center w-50 p-5 border-0 shadow rounded-5">
                          <img
                            className="rounded-circle p-0"
                            style={{ height: 100, width: 100 }}
                            src={userData.profilepicture}
                            alt="profilepicture"
                          />
                          <h4 className="mt-4 fw-normal">{userData.name}</h4>
                          <h5 className="mt-2 fw-normal text-black-50">
                            {userData.email}
                          </h5>
                          <div className="mb-4">
                            <hr />
                          </div>
                          <Link
                            to="/"
                            className="rounded-5 bg-danger border-0 p-3 text-decoration-none text-white fw-medium fs-4"
                          >
                            Sign out
                          </Link>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="container">
                  <div className="row" style={{height:"65vh"}}>
                      <p className="text-black-50 d-flex justify-content-center align-items-center text-bold" style={{fontSize:"6rem"}}>Comming Soon</p>
                  </div>
                </div>
              </>
            ) : (
              <p>...Loading</p>
            )}
          </div>
        </div>
      </div>
    );
}

export default Todo
