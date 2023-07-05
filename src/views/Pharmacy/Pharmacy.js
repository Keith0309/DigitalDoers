import Footer from "../../components/Footer/Footer";
import Footer2 from "../../components/Footer2/Footer2";
import DefaultLayout from "../../components/Layout/DefaultLayout/DefaultLayout";
import "./Pharmacy.css";
import { Link } from "react-router-dom";
import React from "react";
import MainContent from "./product_list";

const Pharmacy = () => {



  return (
    <DefaultLayout>
      {/* Home > Pharmacy */}
      <div className="container p-0">
        <div className="d-flex directory-div mt-2 py-1 ">
          <p className="directory-text d-flex ms-4 mt-2 fw-bold">
            <Link className="directory_link " to="/">
              Home
            </Link>
            <i class="bi bi-chevron-right"></i> Pharmacy
          </p>
        </div>

        <MainContent />

      </div>


      {/* <Footer />
      <Footer2 /> */}
    </DefaultLayout>
  );
};

export default Pharmacy;
