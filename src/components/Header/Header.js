import { Link } from "react-router-dom";
import "./Header.css";
// import burger_menu from "../../assets/images/hamburger_icon.svg.png";
import ncmh_logo from "../../assets/images/ncmh_logo.png";
import cart_icon from "../../assets/images/cart-shopping-solid.svg";
import search_icon from "../../assets/images/magnifying-glass-solid.svg";
import ncmh_pharma from "../../assets/images/ncmh_pharmacy.png"
import { Dropdown } from "react-bootstrap";

const Header = ({ isAuthenticated, firstName, handleLogout }) => {

  return (
    <div className="main_header ">
      <div className="header mx-auto ">
        <nav className="navbar navbar-expand-lg text-black">
          <div className="container">
            {/* <div>
              <button className="menu_button">
                <img
                  className="menu_icon"
                  src={burger_menu}
                  alt="menu"
                  draggable="false"
                ></img>
                <p className="menu_text">Menu</p>
              </button>
            </div> */}
            <div>
              <Link className="ncmh_link" to="/">
                <img
                  className="ncmh_logo"
                  src={ncmh_logo}
                  alt="menu"
                  draggable="false"
                ></img>
              </Link>
            {/* </div>
            <div> */}
              <Link className="pharma_link" to="/pharmacy">
                <img
                  className="ncmh_pharma"
                  src={ncmh_pharma}
                  alt="menu"
                  draggable="false"
                ></img>
              </Link>
            </div>


          {/* Search Bar */}
            <div className="search_bar align-items-center">
              {/* <div className="col-sm-2"></div> */}
              <input
                className="search_input p-2"
                placeholder="Search item/medicine">
              </input>

              <button className="search_button">
                <img
                  className="search_icon"
                  src={search_icon}
                  alt="search_icon"
                  draggable="false"
                ></img>
              </button>
            </div>
            <div className="d-flex align-items-center">
      {isAuthenticated ? (
          // Display firstName and logout link when logged in 
                    <div>
                      <Dropdown>
                        <Dropdown.Toggle className="bg-white text-black border-0 dropdown-toggle-split">
                          Hi,
                          <Link
                            className="signin_link_header py-1 px-2 david"
                            to="/profile"
                          >
                            {firstName}
                          </Link>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu p-0">
                          <Dropdown.Item>
                            <Link
                              className="signin_link_header py-1"
                              to="/editprofile"
                            >
                              Edit Profile
                            </Link>
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <Link
                              className="signin_link_header py-1"
                              to="/"
                              onClick={handleLogout}
                            >
                              Logout
                            </Link>
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                    
      ) : (
            <div className="d-flex align-items-center">
              <div>
                <Link className="signin_link_header px-2" to="/signin">
                  Login
                </Link>
              </div>
              <div>
                <Link className="signup_link_header px-2" to="/signup">
                  Create Account
                </Link>
              </div>
            </div>
            )}
            </div>
            <div>
              <Link className="cart_button" to="/cart">
                <img
                  className="cart_icon"
                  src={cart_icon}
                  alt="cart_icon"
                  draggable="false"
                ></img>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
