import DefaultLayout from "../../components/Layout/DefaultLayout/DefaultLayout";
import React, { useState  } from "react";
import "./SignIn.css";
import nchm_logo from "../../assets/images/ncmh_logo.png";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';



const SignIn = () => {
  const navigate = useNavigate();
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const database = [
    {
      username: "user1",
      password: "pass1",
    },
    {
      username: "user2",
      password: "pass2",
    },
  ];

  const errors = {
    uname: "You have entered an invalid email. Please try again.",
    pass: "Your email and password does not match. Please try again",
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
        setTimeout(() => {
          navigate('/profile');
        }, 2000);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }

  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label className="fw-bold">Email Address </label>
          <input
            placeholder=" email@youremail.com"
            type="text"
            name="uname"
            required
          />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label className="fw-bold">Password </label>
          <input placeholder=" password" type="password" name="pass" required />
          {renderErrorMessage("pass")}
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
    <DefaultLayout>
      {/* Home > Sign in */}
      <div className="container p-0">
        <div className="d-flex directory-div mt-2 py-1 ">
          <p className="directory-text d-flex ms-4 mt-2 fw-bold">
            <Link className="directory_link " to="/">
              Home
            </Link>
            <i class="bi bi-chevron-right"></i> Sign in
          </p>
        </div>
      </div>

      <div className="row">
        {/* <div className="col-md-12">
          <h1>SignIn PAge</h1>
        </div> */}

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
    </DefaultLayout>
  );
};

export default SignIn;
