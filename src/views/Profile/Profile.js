import Footer2 from "../../components/Footer2/Footer2";
import DLforHeader from "../../components/Layout/DLforHeader/DLforHeader";
import "./Profile.css";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <DLforHeader>
      <div className="container p-0">
        <div className="d-flex directory-div mt-2 py-1 ">
          <p className="directory-text d-flex ms-4 mt-2 fw-bold">
            <Link className="directory_link " to="/">
              Home
            </Link>
            <i class="bi bi-chevron-right"></i> Profile
          </p>
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
                    <i class="bi bi-prescription2 fs-1 fw-bolder"></i>
                    <h6 className="fw-bold">Refill</h6>
                  </div>
                  <div className="col-md-5 rounded text-center shadow py-3 mx-3 bg-box">
                    <i class="bi bi-prescription fs-1 fw-bolder"></i>
                    <h6 className="fw-bold">Manage</h6>
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col-md-5 rounded text-center shadow py-3 mx-3 bg-box">
                    <i class="bi bi-clock-history fs-1 fw-bolder"></i>
                    <h6 className="fw-bold">Order History</h6>
                  </div>
                  <div className="col-md-5 rounded text-center shadow py-3 mx-3 bg-box">
                    <i class="bi bi-bell fs-1 fw-bolder"></i>
                    <h6 className="fw-bold">Notification</h6>
                  </div>
                </div>
              </div>
              <div className="col-md-6 ps-5">
                <h4 className="fw-bold">Additional Services</h4>
                <div className="row mt-5">
                  <div className="col-md-5 rounded text-center shadow py-2 mx-3 bg-box">
                    <i class="bi bi-box-seam fs-1 fw-bolder"></i>
                    <h6 className="fw-bold">Pick Up and Delivery</h6>
                  </div>
                  <div className="col-md-5 rounded text-center shadow py-2 mx-3 bg-box">
                    <i class="bi bi-book fs-1 fw-bolder"></i>
                    <h6 className="fw-bold">Pharmacy Resources</h6>
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col-md-11 rounded text-center shadow py-3 mx-3 bg-box">
                    <i class="bi bi-activity fs-1 fw-bolder"></i>
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
    </DLforHeader>
  );
};

export default Profile;
