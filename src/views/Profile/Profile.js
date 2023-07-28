import Footer2 from "../../components/Footer2/Footer2";
import "./Profile.css";
import { Link } from "react-router-dom";
import blank_profile from "../../assets/images/profile.jpeg";

import DefaultLayout from "../../components/Layout/DefaultLayout/DefaultLayout";
import { useAuth } from "../../AuthContext";



const Profile = () => {
  const { email, firstName, lastName, phoneNumber, address } = useAuth();

  return (
    <DefaultLayout>
      <div className="container p-0">
        <div className="d-flex directory-div mt-2 py-1 ">
          <p className="directory-text d-flex ms-4 mt-2 fw-bold">
            <Link className="directory_link " to="/">
              Home
            </Link>
            <i className="bi bi-chevron-right"></i> Profile
          </p>
        </div>
      </div>
      <div className="container">
        <h2 className="text-center fw-bold my-5">Your Profile</h2>
      </div>
      <div className="container rounded shadow mb-5">
        <div className="row">
          <div className="col-md-3 text-center profile-box">
            <img
              className="pp rounded w-75 mt-5 mb-2 dropdown-toggle-image"
              src={blank_profile}
              alt="Profile_Picture"
              draggable="false"
            ></img>
              <input type="file" id="uploadProfile" hidden/>
              <label for="uploadProfile" className="rounded upload-btn fs-5 border-0 pe-3 text-decoration-underline"><i className="bi bi-file-earmark-arrow-up-fill mx-2"></i>Upload Profile</label>
            <h2 className="fw-bolder mt-5">{firstName}</h2>
            <h2 className="fw-bolder">{lastName}</h2>
          </div>
          <div className="col-md-9 p-5 border border-2 rounded border-start-0">
            <h4 className="fw-bold border-bottom border-2 pb-3">INFORMATION</h4>
            <div className="row mb-5">
              <div className="col">
                <h5 className="pt-4 fw-bold">Email</h5>
                <h5 className="ps-4">{email}</h5>
              </div>
              <div className="col">
                <h5 className="pt-4 fw-bold">Phone</h5>
                <h5 className="ps-4">{phoneNumber}</h5>
              </div>
              <div className="row">
                <div className="col">
                  <h5 className="pt-4 fw-bold">Home Address</h5>
                  <h5 className="ps-4">
                    {address}
                  </h5>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="container mt-2 mb-5 p-4 border-top border-2 border-black">
        <div className="row mt-4 mb-5">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-6 border-end border-2 border-black pe-5">
                <h4 className="fw-bold">Prescription Management</h4>
                <div className="row mt-5">
                  <div className="col-md-5 rounded text-center shadow py-3 mx-3 bg-box">
                    <i className="bi bi-prescription2 fs-1 fw-bolder"></i>
                    <h6 className="fw-bold">Refill</h6>
                  </div>
                  <div className="col-md-5 rounded text-center shadow py-3 mx-3 bg-box">
                    <i className="bi bi-prescription fs-1 fw-bolder"></i>
                    <h6 className="fw-bold">Manage</h6>
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col-md-5 rounded text-center shadow py-3 mx-3 bg-box">
                    <i className="bi bi-clock-history fs-1 fw-bolder"></i>
                    <h6 className="fw-bold">Order History</h6>
                  </div>
                  <div className="col-md-5 rounded text-center shadow py-3 mx-3 bg-box">
                    <i className="bi bi-bell fs-1 fw-bolder"></i>
                    <h6 className="fw-bold">Notification</h6>
                  </div>
                </div>
              </div>
              <div className="col-md-6 ps-5">
                <h4 className="fw-bold">Additional Services</h4>
                <div className="row mt-5">
                  <div className="col-md-5 rounded text-center shadow py-2 mx-3 bg-box">
                    <i className="bi bi-box-seam fs-1 fw-bolder"></i>
                    <h6 className="fw-bold">Pick Up and Delivery</h6>
                  </div>
                  <div className="col-md-5 rounded text-center shadow py-2 mx-3 bg-box">
                    <i className="bi bi-book fs-1 fw-bolder"></i>
                    <h6 className="fw-bold">Pharmacy Resources</h6>
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col-md-11 rounded text-center shadow py-3 mx-3 bg-box">
                    <i className="bi bi-activity fs-1 fw-bolder"></i>
                    <h6 className="fw-bold">Free Blood Pressure Screening</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>

      <Footer2 />
    </DefaultLayout>
  );
};

export default Profile;
