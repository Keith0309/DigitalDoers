import "./Footer.css";

const Footer = () => {
  return (
    <div className="container-fluid fixed-bottom border-top border-2 border-black">
      <div className="container">
        <div className="row">
          <div className="col-md-6 p-4">
            <div className="row">
              <div className="col-md-2 mt-3">
                <i class="ic bi bi-telephone-fill fs-2"></i>
              </div>
              <div className="col-md-10">
                <div className="border-bottom border-2 border-success mb-2 pb-4">
                  <h4>NCMH Crisis Hotline</h4>
                  <h6>Luzon-wide LandLine Toll Free: 1553</h6>
                  <h6>
                    Cellphone Lines: 0917-899-8727, 0966-351-4518, 0908-639-2672
                  </h6>
                </div>
                <div className="border-bottom border-2 border-success mb-2 pb-4">
                  <h4>Outpatient (Adult) Services</h4>
                  <h6>Cellphone: 0999-396-3418</h6>
                  <h6>Landline: 8-531-9001 Loc 1200</h6>
                  <h6>Email: ncmheconsultation@gmail.com</h6>
                  <h6>Online registration: bit.ly/ncmhkonsulta</h6>
                </div>
                <div className="border-bottom border-2 border-success mb-2 pb-4">
                  <h4>Outpatient (Child and Adolescent) Services</h4>
                  <h6>Landline: 8-531-go01 Loc 383</h6>
                  <h6>Email: ncmhchildops@gmail.com</h6>
                </div>
                <div className="border-bottom border-2 border-success mb-2 pb-4">
                  <h4>Women and Child Protection Unit</h4>
                  <h6>Landline: 8-531-9001 Loc 309</h6>
                  <h6>Email: wepu@ncmbh.gov.ph</h6>
                </div>
                <div className="border-bottom border-2 border-success pb-4">
                  <h4>Forensic Unit</h4>
                  <h6>Landline: 8-531-9001 Loc 320</h6>
                  <h6>Email: ncmhforensic@gmail.com</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 p-4">
            <div className="row">
              <div className="col-md-2">
                <div className="mt-2">
                  <i class="ic bi bi-envelope-open-fill fs-2"></i>
                </div>
                <div className="mt-2">
                  <i class="ic bi bi-envelope-at-fill fs-2"></i>
                </div>
                <div className="mt-2">
                  <i class="ic bi-globe2 fs-2"></i>
                </div>
              </div>
              <div className="col-md-10">
                <h4>Post</h4>
                <h6>Nueve de Pebrero St., Brgy. Mauway, Mandaluyong City</h6>
                <h4>Email</h4>
                <h6>mcc@ncmh.gov.ph (Office of the MCC)</h6>
                <h4>Website</h4>
                <h6>https://ncmh.gov.ph</h6>
              </div>
              <div className="column pt-2 border-top border-2 border-success mt-4">
                <h4 className="fw-bolder ms-4 mb-4 text-success">Follow Us</h4>
                <i class="i bi bi-facebook fs-2 p-4"></i>
                <i class="i bi bi-twitter fs-2 p-4"></i>
                <i class="i bi bi-instagram fs-2 p-4"></i>
                <i class="i bi bi-linkedin fs-2 p-4"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="end-footer container bg-success">
        <div className="row pt-2">
          <div className="col-md-9">
            <div className="d-flex">
              <p className="flink text-white border-end border-2 px-3 text-decoration-underline">Terms And Conditions</p>
              <p className="flink text-white border-end border-2 px-3 text-decoration-underline">Privacy</p>
              <p className="flink text-white border-end border-2 px-3 text-decoration-underline">Accessibility</p>
              <p className="flink text-white px-3 text-decoration-underline">Do Not Sell or Share My Personal Information</p>
            </div>
          </div>
          <div className="col-md-3 text-end">
            <p className="arr text-white">© 2023 NCMH. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
