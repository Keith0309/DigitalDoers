import DefaultLayout from "../../components/Layout/DefaultLayout/DefaultLayout";
import React, { useState } from "react";
import "./SignUp.css"
import nchm_logo from "../../assets/images/ncmh_logo.png"
import { Link } from "react-router-dom";



const SignUp = () => {

  const [errorMessages, setErrorMessages] = useState({});
  const [isAccountCreated, setisAccountCreated] = useState(false);

const errors = {
  email: "You have entered an invalid email. Please try again.",
  pass: "The password you entered is incorrect. Please try again",
  passnotmatch: "Your password does not match. Please try again."
};

const handleSubmit = (event) => {
  //Prevent page reload
  event.preventDefault();

  var { email, pass, passmatch } = document.forms[0];

  // Find user login info
  // const userData = database.find((user) => user.username === uname.value);

  // var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;

  // Compare user info
  if (email.value.includes("@" && ".com")) {
    alert(email.value);
    if (pass.value !== passmatch.value) {
      // Invalid password
      setErrorMessages({ name: "passnotmatch", message: errors.passnotmatch });
    } else {
      setisAccountCreated(true);
    }
  } else {
    // Username not found
    setErrorMessages({ name: "email", message: errors.email });
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
        <input placeholder=" email@youremail.com" type="text" name="email" required />
        {renderErrorMessage("email")}
      </div>
      <div className="input-container">
        <label className="fw-bold">First Name </label>
        <input placeholder=" First Name" type="text" name="fName" required />
      </div>
      <div className="input-container">
        <label className="fw-bold">Last Name </label>
        <input placeholder=" Last Name" type="text" name="lName" required />
      </div>
      <div className="input-container">
        <label className="fw-bold">Password </label>
        <input placeholder=" password" type="password" name="pass" required />
        {renderErrorMessage("pass")}
      </div>
      <div className="input-container">
        <label className="fw-bold">Re-type your Password </label>
        <input placeholder=" password" type="password" name="passmatch" required />
        {renderErrorMessage("passnotmatch")}
      </div>
      <div className="button-container">
        <button className="login-button fw-bold" type="submit">Create Account</button>
      </div>
    </form>

    <div className="text_link">
      <p>Already have an account? &nbsp;
      <Link className="signin_link fw-bold"to="/signin">
         Sign In
        </Link>
      </p>
    </div>
  </div>
);

  return (
    <DefaultLayout>
      <div className="row">
        {/* <div className="col-md-12">
          <h1>SignUp PAge</h1>
        </div> */}

        <div className="signin-form mx-auto">
            <div className="login-form mx-auto" >
              <div className="nchm-container text-center" ><img className="ncmh-logo" src={nchm_logo} alt="ncmh_logo"></img></div>
              <div className="signin-text text-center fw-bolder my-3">Create your account</div>
              {isAccountCreated ? <div className="text-center">You have successfully created an account!</div> : renderForm}
            </div>
          </div>
      </div>


    </DefaultLayout>
  );
};

export default SignUp;
