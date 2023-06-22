import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <Link className="navbar-brand" to="/">
            NCMH Pharmacy
          </Link>
          <Link className="navbar-brand" to="/SignIn">
            SignIn
          </Link>
          <Link className="navbar-brand" to="/SignUP">
            SignUp
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
