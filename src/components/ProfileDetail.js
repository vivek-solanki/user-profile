import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProfileDetail = ({ id }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    axios
      .get("https://panorbit.in/api/users.json")
      .then((res) => {
        const user = res.data.users.find((user) => user.id === id);
        if (user) {
          setUserData(user);
        } else {
          console.error(`User ${id} not found`);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);
  return (
    <div className="col-9 ps-0">
      {userData ? (
        <>
          <div className="row flex-nowrap align-items-center pt-4">
            <h3 className="col-6">Profile</h3>
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
          <div className="row mt-5">
            <div className="col-4">
              <div className="d-flex flex-column align-items-center">
                <img
                  src={userData.profilepicture}
                  alt="profilepicture"
                  className="h-25 w-50 rounded-circle"
                />
                <h2 className="mt-3">{userData.name}</h2>
              </div>
              <div className="d-flex flex-column mt-3">
                <h4 className="m-0 fs-5 fw-medium d-flex flex-row justify-content-center">
                  UserName : <p className="ps-2">{userData.username}</p>
                </h4>
                <h4 className="m-0 fs-5 fw-medium d-flex flex-row justify-content-center">
                  e-mail : <p className="ps-2">{userData.email}</p>
                </h4>
                <h4 className="m-0 fs-5 fw-medium d-flex flex-row justify-content-center">
                  Phone : <p className="ps-2">{userData.phone}</p>
                </h4>
                <h4 className="m-0 fs-5 fw-medium d-flex flex-row justify-content-center">
                  Website : <p className="ps-2">{userData.website}</p>
                </h4>
                <hr />
              </div>
              <h3 className="text-center">Company</h3>
              <div className="d-flex flex-column mt-3">
                <h4 className="m-0 fs-5 fw-medium d-flex flex-row justify-content-center">
                  Name : <p className="ps-2">{userData.company.name}</p>
                </h4>
                <h4 className="m-0 fs-5 fw-medium text-wrap d-flex flex-row justify-content-start">
                  catchphrase :{" "}
                  <p className="ps-2 text-wrap">
                    {userData.company.catchPhrase}
                  </p>
                </h4>
                <h4 className="m-0 fs-5 fw-medium d-flex flex-row justify-content-center">
                  bs : <p className="ps-2">{userData.company.bs}</p>
                </h4>
              </div>
            </div>
            <div className="col-1 d-flex justify-content-center">
              <div
                style={{ borderLeft: "1px solid gray", height: "100%" }}
              ></div>
            </div>
            <div className="col-7">
              <div className="d-flex flex-column">
                <h4 className="m-0 fs-5 fw-medium d-flex flex-row justify-content-start">
                  Address :
                </h4>
              </div>
              <div className="container">
                <div className="row">
                  <div className="d-flex flex-column ms-4">
                    <h4 className="m-0 fs-5 fw-medium d-flex flex-row justify-content-start">
                      Street : <p className="ps-2">{userData.address.street}</p>
                    </h4>
                    <h4 className="m-0 fs-5 fw-medium d-flex flex-row justify-content-start">
                      Suite : <p className="ps-2">{userData.address.suite}</p>
                    </h4>
                    <h4 className="m-0 fs-5 fw-medium d-flex flex-row justify-content-start">
                      City : <p className="ps-2">{userData.address.city}</p>
                    </h4>
                    <h4 className="m-0 fs-5 fw-medium d-flex flex-row justify-content-start">
                      Zipcode :{" "}
                      <p className="ps-2">{userData.address.zipcode}</p>
                    </h4>
                  </div>
                </div>
                <div className="row">
                  <iframe
                    title="mapframe"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5365.742748670856!2d-104.89653463886182!3d39.599149744544846!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c868890cb86a5%3A0x1bc05d9c29c38478!2sGlenborough%20Properties!5e1!3m2!1sen!2sin!4v1697998052101!5m2!1sen!2sin"
                    title="mapframe"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    className="rounded-5"
                  />
                </div>
                <div className="row justify-content-end mt-2">
                  <div className="col-3 d-flex justify-content-end flex-nowrap fs-5">
                    Lat:{" "}
                    <p className="ps-2 fw-medium fs-5">
                      {userData.address.geo.lat}
                    </p>
                  </div>
                  <div className="col-3 d-flex flex-nowrap fs-5">
                    Long:{" "}
                    <p className="ps-2 fw-medium fs-5">
                      {userData.address.geo.lng}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p>...Loading</p>
      )}
    </div>
  );
};

export default ProfileDetail;
