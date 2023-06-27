import { Link } from "react-router-dom";
import "./Header.css";
import burger_menu from "../../assets/images/hamburger_icon.svg.png";
import ncmh_logo from "../../assets/images/ncmh_logo.png";
import cart_icon from "../../assets/images/cart-shopping-solid.svg";
import search_icon from "../../assets/images/magnifying-glass-solid.svg";

const Header = () => {
  return (
    <div className="main_header ">
      <div className="header mx-auto ">
        <nav className="navbar navbar-expand-lg text-black">
          <div className="container">
            <div>
              <button className="menu_button">
                <img
                  className="menu_icon"
                  src={burger_menu}
                  alt="menu"
                  draggable="false"
                ></img>
                <p className="menu_text">Menu</p>
              </button>
            </div>

            <div>
              <Link className="ncmh_link" to="/">
                <img
                  className="ncmh_logo"
                  src={ncmh_logo}
                  alt="menu"
                  draggable="false"
                ></img>
              </Link>
            </div>

            <div className="search_bar align-items-center">
              <input
                className="search_input"
                placeholder="Search medicines"
              ></input>
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
              <div>
                <Link className="text_link" to="/signin">
                  Login
                </Link>
              </div>
              <div className="divider"></div>
              <div>
                <Link className="text_link" to="/signup">
                  Create Account
                </Link>
              </div>
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
