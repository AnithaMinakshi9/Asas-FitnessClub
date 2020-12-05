import React from "react";
import validate from "./validateInfo";
import useForm from "./useForm";
import "./Form.css";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";

const Login = ({ submitForm }) => {
  const { handleChange, handleSubmitL, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <>
      <Link to="/">
        <AiIcons.AiOutlineClose className="close-btn" />
      </Link>
      <div className="form-container">
        <div className="form-content-left"></div>
        <div className="form-content-right">
          <form onSubmit={handleSubmitL} className="form" noValidate>
            <h1>
              Get started with us today! Create your account by filling out the
              information below.
            </h1>
            <div className="form-inputs">
              <label className="form-label">Username</label>
              <input
                className="form-input"
                type="text"
                name="username"
                placeholder="Enter your username"
                value={values.username}
                onChange={handleChange}
              />
              {errors.username && <p>{errors.username}</p>}
            </div>
            <div className="form-inputs">
              <label className="form-label">Email</label>
              <input
                className="form-input"
                type="email"
                name="email"
                placeholder="Enter your email"
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && <p>{errors.email}</p>}
            </div>
            <div className="form-inputs">
              <label className="form-label">Password</label>
              <input
                className="form-input"
                type="password"
                name="password"
                placeholder="Enter your password"
                value={values.password}
                onChange={handleChange}
              />
              {errors.password && <p>{errors.password}</p>}
            </div>
            <Link to="/user">
              <button className="form-input-btn" type="submit">
                Login
              </button>
            </Link>

            <span className="form-input-login">
              New to the page? Signup here! <Link to="/form">here</Link>
            </span>
            <span className="form-input-login">
              Click <Link to="/dashboard">here</Link> for admin dashboard
            </span>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
