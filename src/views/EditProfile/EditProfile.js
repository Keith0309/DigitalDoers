import Footer2 from "../../components/Footer2/Footer2";
import "./EditProfile.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import DefaultLayout from "../../components/Layout/DefaultLayout/DefaultLayout";
import { useAuth } from "../../AuthContext";

const EditProfile = () => {
  const { email, firstName, lastName, phoneNumber, address } = useAuth();

  const [fName, setfName] = useState(firstName);
  const [lName, setlName] = useState(lastName);
  const password = useState("**********");
  const [Email, setEmail] = useState(email);
  const [phone, setphone] = useState(phoneNumber);
  const [Address, setAddress] = useState(address);

  return (
    <DefaultLayout>
      <div className="container p-0">
        <div className="d-flex directory-div mt-2 py-1 ">
          <p className="directory-text d-flex ms-4 mt-2 fw-bold">
            <Link className="directory_link " to="/">
              Home
            </Link>
            <i className="bi bi-chevron-right"></i>
            <Link className="directory_link " to="/profile">
              Profile
            </Link>
            <i className="bi bi-chevron-right"></i>
            Edit Profile
          </p>
        </div>
      </div>
      <div className="container rounded shadow mb-5 mt-5">
        <div className="row">
          <div className="col-md-3 text-center profile-box pt-5">
            <h2 className="fw-bolder"> </h2>
          </div>
          <div className="col-md-9 p-5 border border-2 rounded border-start-0">
            <h4 className="fw-bold border-bottom border-2 pb-3">
              Edit Profile
            </h4>
            <div className="row mb-5">
              <div className="col">
                <h6 className="pt-4 fw-bold mb-4">First Name</h6>
                <input
                  className="w-50 rounded w-50 p-4 ms-5"
                  type="text"
                  value={fName}
                  onChange={(event) => setfName(event.target.value)}
                />
                <h6 className="pt-4 fw-bold mb-4">Last Name</h6>
                <input
                  className="w-50 rounded w-50 p-4 ms-5"
                  type="text"
                  value={lName}
                  onChange={(event) => setlName(event.target.value)}
                />
                <h6 className="pt-4 fw-bold mb-4">Password</h6>
                <input
                  className="w-50 rounded w-50 p-4 ms-5 form-control"
                  type="password"
                  value={password}
                />
                <h6 className="pt-4 fw-bold mb-4">Email</h6>
                <input
                  className="w-50 rounded w-50 p-3 ms-5"
                  type="email"
                  value={Email}
                  onChange={(event) => setEmail(event.target.value)}
                />
                <h6 className="pt-4 fw-bold mb-4">Phone</h6>
                <input
                  className="w-50 rounded w-50 p-3 ms-5"
                  type="number"
                  value={phone}
                  onChange={(event) => setphone(event.target.value)}
                />
                <h6 className="pt-4 fw-bold mb-4">Address</h6>
                <textarea
                  className="w-50 rounded w-50 p-2 ms-5"
                  value={Address}
                  onChange={(event) => setAddress(event.target.value)}
                />
              </div>
            </div>
            <div className="row mb-5">
              <button className="rounded edit-btn fs-5 border-0 p-2 w-25 mx-2">
                <i className="bi bi-x-square me-2 "></i>Cancel
              </button>
              <button className="rounded edit-btn fs-5 border-0 p-2 w-25 mx-2">
                <i className="bi bi-check-square me-2 "></i>Save
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer2 />
    </DefaultLayout>
  );
};

export default EditProfile;
