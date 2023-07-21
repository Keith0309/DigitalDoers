import Footer2 from "../../components/Footer2/Footer2";
import DLforHeader from "../../components/Layout/DLforHeader/DLforHeader";
import "./Profile.css";
import { Link } from "react-router-dom";
import blank_profile from "../../assets/images/profile.jpeg";
import img_placeholder from "../../assets/images/imgp.png";



const Profile = () => {
  return (
    <DLforHeader>
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
        <h1 className="text-center fw-bold my-5">Your Profile</h1>
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
            <h2 className="fw-bolder mt-5">David</h2>
            <h2 className="fw-bolder">Mendoza</h2>
          </div>
          <div className="col-md-9 p-5 border border-2 rounded border-start-0">
            <h4 className="fw-bold border-bottom border-2 pb-3">INFORMATION</h4>
            <div className="row mb-5">
              <div className="col">
                <h5 className="pt-4 fw-bold">Email</h5>
                <h6 className="ps-4">davidmendoza@gmail.com</h6>
              </div>
              <div className="col">
                <h5 className="pt-4 fw-bold">Phone</h5>
                <h6 className="ps-4">(+63) 935-999-9999</h6>
              </div>
              <div className="row">
                <div className="col">
                  <h5 className="pt-4 fw-bold">Home Address</h5>
                  <h6 className="ps-4">
                    John Doe 123 Main Street Barangay Santisima Trinidad
                    Malolos, Bulacan 3000 Philippines
                  </h6>
                </div>
              </div>
            </div>
            <h4 className="fw-bold border-bottom border-2 pb-3">Files</h4>
            <div className="row text-center">
              <div className="col">
                <h5 className="pt-4 fw-bold">Prescription</h5>
                <img
                  className="rounded w-75 py-2"
                  src={img_placeholder}
                  alt="Profile_Picture"
                  draggable="false"
                ></img>
              </div>
              <div className="col">
                <h5 className="pt-4 fw-bold">PWD/Senior ID</h5>
                <img
                  className="rounded w-75 py-2"
                  src={img_placeholder}
                  alt="Profile_Picture"
                  draggable="false"
                ></img>
              </div>
            </div>
            <div className="row text-center mt-3">
              <div className="col">
                <input type="file" id="uploadPrescription" hidden/>
                <label for="uploadPrescription" className="rounded upload-btn fs-5 border-0 pe-3"><i className="bi bi-file-earmark-arrow-up-fill mx-2"></i>Upload File</label>
              </div>
              <div className="col">
                <input type="file" id="uploadPwd" hidden/>
              <label for="uploadPwd" className="rounded upload-btn fs-5 border-0 pe-3"><i className="bi bi-file-earmark-arrow-up-fill mx-2"></i>Upload File</label>
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
    </DLforHeader>
  );
};

export default Profile;
