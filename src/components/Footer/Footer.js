import "./Footer.css";

const Footer = () => {
  return (
    <div className="bb container-fluid border-top border-3 mt-5 mx-0">
      <div className="container">
        <div className="row">
          <div className="col-md-6 p-4">
            <div className="row">
              <div className="col-md-2 mt-3 text-end">
                <i className="ic bi bi-headphones fs-4 fw-bold"></i>
              </div>
              <div className="col-md-10">
                <div className="border-bottom border-2 border-success mb-2 ">
                  <h5 className="fw-bolder">NCMH Crisis Hotline</h5>
                  <h6>Luzon-wide LandLine Toll Free: 1553</h6>
                  <h6>
                    Cellphone Lines: 0917-899-8727, 0966-351-4518, 0908-639-2672
                  </h6>
                </div>
                <div className="border-bottom border-2 border-success mb-2 ">
                  <h5 className="fw-bolder">Outpatient (Adult) Services</h5>
                  <h6>Cellphone: 0999-396-3418</h6>
                  <h6>Landline: 8-531-9001 Loc 1200</h6>
                  <h6>Email: ncmheconsultation@gmail.com</h6>
                  <h6>Online registration: bit.ly/ncmhkonsulta</h6>
                </div>
                <div className="border-bottom border-2 border-success mb-2 ">
                  <h5 className="fw-bolder">
                    Outpatient (Child and Adolescent) Services
                  </h5>
                  <h6>Landline: 8-531-9001 Loc 383</h6>
                  <h6>Email: ncmhchildops@gmail.com</h6>
                </div>
                <div className="border-bottom border-2 border-success mb-2 ">
                  <h5 className="fw-bolder">Women and Child Protection Unit</h5>
                  <h6>Landline: 8-531-9001 Loc 309</h6>
                  <h6>Email: wepu@ncmbh.gov.ph</h6>
                </div>
                <div>
                  <h5 className="fw-bolder">Forensic Unit</h5>
                  <h6>Landline: 8-531-9001 Loc 320</h6>
                  <h6>Email: ncmhforensic@gmail.com</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 p-4">
            <div className="row">
              <div className="col-md-1">
                <div className="my-1">
                  <i className="ic bi bi bi-geo-alt-fill fs-4"></i>
                </div>
                <div className="my-3">
                  <i className="ic bi bi-envelope-at-fill fs-4"></i>
                </div>
                <div className="my-3">
                  <i className="ic bi bi-telephone-fill fs-4"></i>
                </div>
                <div className="my-4">
                  <i className="ic bi-globe2 fs-4"></i>
                </div>
              </div>
              <div className="col-md-11">
                <h5 className="fw-bolder">Location</h5>
                <h6 className="mb-3">
                  Nueve de Pebrero St., Brgy. Mauway, Mandaluyong City
                </h6>
                <h5 className="fw-bolder">Email</h5>
                <h6 className="mb-3">mcc@ncmh.gov.ph (Office of the MCC)</h6>
                <h5 className="fw-bolder">Trunk Line</h5>
                <h6 className="mb-3">
                  (02) 8531 9001 (Connecting all Departments)
                </h6>
                <h5 className="fw-bolder">Website</h5>
                <a href="https://ncmh.gov.ph" target="_blank" rel="noreferrer" className="text-decoration-none">
                <h6>
                  https://ncmh.gov.ph
                </h6>
                </a>
              </div>
              <div className="column pt-2 border-top border-2 border-success mt-2">
                <h5 className="fw-bolder ms-4 text-success">Follow Us</h5>
                <i className="i bi bi-facebook fs-4 p-4"></i>
                <i className="i bi bi-twitter fs-4 p-4"></i>
                <i className="i bi bi-instagram fs-4 p-4"></i>
                <i className="i bi bi-linkedin fs-4 p-4"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
