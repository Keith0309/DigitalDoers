import Footer2 from "../../components/Footer2/Footer2";
import DLforHeader from "../../components/Layout/DLforHeader/DLforHeader";
import "./EditProfile.css";
import { Link } from "react-router-dom";

const EditProfile = () => {
  return (
    <DLforHeader>
      <div className="container p-0">
        <div className="d-flex directory-div mt-2 py-1 ">
          <p className="directory-text d-flex ms-4 mt-2 fw-bold">
            <Link className="directory_link " to="/">
                Home
            </Link>
            <i class="bi bi-chevron-right"></i>
            <Link className="directory_link " to="/profile">
                Profile
            </Link>
            <i class="bi bi-chevron-right"></i>
                Edit Profile
          </p>
        </div>
      </div>
      <div className="container">
        <h1 className="text-center fw-bold my-5">Edit Profile</h1>
      </div>
      <Footer2 />
    </DLforHeader>
  );
};

export default EditProfile;
