import Footer from "../../components/Footer/Footer";
import DefaultLayout from "../../components/Layout/DefaultLayout/DefaultLayout";
import "./Pharmacy.css";
import { Link } from "react-router-dom";

const Pharmacy = () => {
  return (
    <DefaultLayout>

    {/* Home > Pharmacy */}
    <div className="d-flex directory-div mt-2 py-1 ">
        <p className="directory-text d-flex ms-4 mt-2 fw-bold">
      <Link className="directory_link " to="/">
          Home
      </Link>
      <i class="bi bi-chevron-right"></i> Pharmacy
      </p>
    </div>

  {/* Please delete code below and change to products page */}
      <div className="container mt-2 p-4 border border-2 border-black">
              <h3 className="fw-bold">Welcome to NCMH Pharmacy!</h3>
        <p>
          Sign in or create an account to refill, transfer, and manage your
          prescriptions from your history.
        </p>
        <button className="Signin-btn rounded-pill border-0 fw-bold me-4">
          Sign in
        </button>
        <button className="Create-btn rounded-pill border-2 fw-bold">
          Create an account
        </button>
        <div className="row mt-4">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-6 border-end border-2 border-black pe-5">
                <h4 className="fw-bold">Prescription Management</h4>
                <div className="row mt-5">
                  <div className="col-md-5 rounded text-center shadow py-3 mx-3">
                    <h6 className="fw-bold">Refill</h6>
                  </div>
                  <div className="col-md-5 rounded text-center shadow py-3 mx-3">
                    <h6 className="fw-bold">Manage</h6>
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col-md-5 rounded text-center shadow py-3 mx-3">
                    <h6 className="fw-bold">Transfer</h6>
                  </div>
                  <div className="col-md-5 rounded text-center shadow py-3 mx-3">
                    <h6 className="fw-bold">Notification</h6>
                  </div>
                </div>
              </div>
              <div className="col-md-6 ps-5">
                <h4 className="fw-bold">Prescription Management</h4>
                <div className="row mt-5">
                  <div className="col-md-5 rounded text-center shadow py-3 mx-3">
                    <h6 className="fw-bold">Appointment</h6>
                  </div>
                  <div className="col-md-5 rounded text-center shadow py-3 mx-3">
                    <h6 className="fw-bold">Testing</h6>
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col-md-5 rounded text-center shadow py-3 mx-3">
                    <h6 className="fw-bold">Vaccine Central</h6>
                  </div>
                  <div className="col-md-5 rounded text-center shadow py-3 mx-3">
                    <h6 className="fw-bold">Notification</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>

      <Footer />
    </DefaultLayout>
  );
};

export default Pharmacy;

