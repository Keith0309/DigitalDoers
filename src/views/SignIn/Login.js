import React, { useState } from "react";
import "./SignIn.css";
import nchm_logo from "../../assets/images/ncmh_logo.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Login = ({onLogin}) => {
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [noRecordMessage, setNoRecordMessage] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleInput = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();
    setEmailError("");
    setPasswordError("");

    if (!values.email) {
      setEmailError("Email should not be empty");
    }
    if (!email_pattern.test(values.email)) {
      setEmailError("Please enter a valid email");
    }
    if (!values.password) {
      setPasswordError("Password should not be empty");
    }
    if (values.email && values.password) {
      axios
        .post("http://localhost:3001/login", values)
        .then((res) => {
          if (res.data.success) {
            setIsSubmitted(true);
            navigate("/");
            onLogin(res.data.firstName);
          } else {
            setNoRecordMessage(
              "Your email and password does not match. Please try again"
            );
          }
        })
        .catch((err) => console.log(err));
    }

  };
  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label className="fw-bold">Email Address </label>
          <input
            placeholder=" email@youremail.com"
            type="text"
            name="email"
            onChange={handleInput}
          />

          {emailError && <span className="error"> {emailError} </span>}
        </div>
        <div className="input-container">
          <label className="fw-bold">Password </label>
          <input
            placeholder=" password"
            type="password"
            name="password"
            onChange={handleInput}
          />

          {passwordError && <span className="error"> {passwordError} </span>}

          {noRecordMessage && <span className="error">{noRecordMessage}</span>}
        </div>
        <div className="button-container">
          <button className="login-button fw-bold" type="submit">
            LOGIN
          </button>
        </div>
      </form>

      <div className="text_link">
        <p>
          Dont have an account yet? &nbsp;
          <Link className="signup_link fw-bold" to="/signup">
            Create one!
          </Link>
        </p>
        <p>
          <Link className="forgot_pass fw-bold" to="/forgot_pass">
            Forgot password?
          </Link>
        </p>
      </div>
    </div>
  );

  return (
      <div className="row">
        <div className="signin-form mx-auto">
          <div className="login-form mx-auto">
            <div className="nchm-container text-center">
              <img className="ncmh-logo" src={nchm_logo} alt="ncmh_logo"></img>
            </div>
            <div className="signin-text text-center fw-bolder my-3">
              Sign in to your account
            </div>
            {isSubmitted ? (
              <div className="text-center">User is successfully logged in!</div>
            ) : (
              renderForm
            )}
          </div>
        </div>
      </div>
  );
};

export default Login;
