import "./Footer2.css";

const Footer2 = () => {
  return (
    <div className="container-fluid bg-success">
      <div className="container">
        <div className="row pt-3">
          <div className="col-md-9">
            <div className="d-flex">
              <p className="flink text-white border-end border-2 px-3 text-decoration-underline">
                Terms And Conditions
              </p>
              <p className="flink text-white border-end border-2 px-3 text-decoration-underline">
                Privacy
              </p>
              <p className="flink text-white border-end border-2 px-3 text-decoration-underline">
                Accessibility
              </p>
              <p className="flink text-white px-3 text-decoration-underline">
                Do Not Sell or Share My Personal Information
              </p>
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

export default Footer2;
