import DefaultLayout from "../../components/Layout/DefaultLayout/DefaultLayout";
import React, { useState } from "react";
import "./SignUp.css";
import nchm_logo from "../../assets/images/ncmh_logo.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [isAccountCreated, setisAccountCreated] = useState(false);
  const [values, setValues] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    address: "",
    password: "",
    passmatch: "",
    
    
  });
  const [errors, setErrors] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    address: "",
    password: "",
    passmatch: "",
  });

  //validation patterns
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phone_pattern = /^[0-9]{11}$/;
  const password_pattern = /^.{8,}$/;

  //handle change and set input values using name property
  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    //Form Validation
    if (!values.email) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email should not be empty",
      }));
    } else if (!email_pattern.test(values.email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Please enter a valid email",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
    }

    if (!values.firstName) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        firstName: "Firstname should not be empty",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, firstName: "" }));
    }

    if (!values.lastName) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        lastName: "Lastname should not be empty",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, lastName: "" }));
    }

    if (!values.phoneNumber) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phoneNumber: "Phone Number should not be empty",
      }));
    } else if (!phone_pattern.test(values.phoneNumber)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phoneNumber: "Please enter your 11 digits phone number",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, phoneNumber: "" }));
    }

    if (!values.address) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        address: "Address should not be empty",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, address: "" }));
    }
    
    if (!values.password) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password should not be empty",
      }));
    } else if (!password_pattern.test(values.password)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Your password must be at least 8 characters long",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, password: "" }));
    }

    if (!values.passmatch) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        passmatch: "Password confirmation should not be empty",
      }));
    } else if (values.password !== values.passmatch) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        passmatch: "Your password does not match. Please try again.",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, passmatch: "" }));
    }

    if (
      values.email &&
      values.firstName &&
      values.lastName &&
      values.phoneNumber &&
      values.address &&
      values.password &&
      values.password === values.passmatch
    ) {
      axios
        .post("http://localhost:3001/users", values)
        .then((res) => console.log("Registered Successfully!!"))
        .catch((err) => console.log(err));
      setisAccountCreated(true);
      setTimeout(() => {
        navigate("/signin");
      }, 1500);
    } else {
      console.log("Registration Failed!!");
    }
  };

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label className="fw-bold">Email Address </label>
          <input
            className="form-control"
            placeholder=" email@youremail.com"
            type="text"
            name="email"
            onChange={handleChange}
          />
          {errors.email && <span className="error"> {errors.email} </span>}
        </div>
        <div className="input-container">
          <label className="fw-bold">First Name </label>
          <input
            className="form-control"
            placeholder=" First Name"
            type="text"
            name="firstName"
            onChange={handleChange}
          />
          {errors.firstName && (
            <span className="error"> {errors.firstName} </span>
          )}
        </div>
        <div className="input-container">
          <label className="fw-bold">Last Name </label>
          <input
            className="form-control"
            placeholder=" Last Name"
            type="text"
            name="lastName"
            onChange={handleChange}
          />
          {errors.lastName && (
            <span className="error"> {errors.lastName} </span>
          )}
        </div>
        <div className="input-container">
          <label className="fw-bold">Phone Number </label>
          <input
            className="form-control"
            placeholder=" 09050000333"
            type="number"
            name="phoneNumber"
            onChange={handleChange}
          />
          {errors.phoneNumber && (
            <span className="error"> {errors.phoneNumber} </span>
          )}
        </div>
        <div className="input-container">
          <label className="fw-bold">Address </label>
          <input
            className="form-control"
            placeholder=" Full Address"
            type="text"
            name="address"
            onChange={handleChange}
          />
          {errors.address && (
            <span className="error"> {errors.address} </span>
          )}
        </div>
        <div className="input-container">
          <label className="fw-bold">Password </label>
          <input
            className="form-control"
            placeholder=" password"
            type="password"
            name="password"
            onChange={handleChange}
          />
          {errors.password && (
            <span className="error"> {errors.password} </span>
          )}
        </div>
        <div className="input-container">
          <label className="fw-bold">Re-type your Password </label>
          <input
            className="form-control"
            placeholder=" Confrim Password"
            type="password"
            name="passmatch"
            onChange={handleChange}
          />
          {errors.passmatch && (
            <span className="error"> {errors.passmatch} </span>
          )}
        </div>
        <div className="button-container">
          <button className="login-button fw-bold" type="submit">
            Create Account
          </button>
        </div>
      </form>

      <div className="text_link">
        <p>
          Already have an account? &nbsp;
          <Link className="signin_link fw-bold" to="/signin">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );

  return (
    <DefaultLayout>
      {/* Home > Create Account */}
      <div className="container p-0">
        <div className="d-flex directory-div mt-2 py-1 ">
          <p className="directory-text d-flex ms-4 mt-2 fw-bold">
            <Link className="directory_link " to="/">
              Home
            </Link>
            <i className="bi bi-chevron-right"></i> Create Account
          </p>
        </div>
      </div>

      <div className="row">
        {/* <div className="col-md-12">
          <h1>SignUp PAge</h1>
        </div> */}

        <div className="signup-form mx-auto">
          <div className="login-form mx-auto">
            <div className="nchm-container text-center">
              <img className="ncmh-logo" src={nchm_logo} alt="ncmh_logo"></img>
            </div>
            <div className="signup-text text-center fw-bolder my-3">
              Create your account
            </div>
            {isAccountCreated ? (
              <div className="text-center">
                You have successfully created an account!
              </div>
            ) : (
              renderForm
            )}
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default SignUp;
