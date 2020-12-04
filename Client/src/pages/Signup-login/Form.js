import React, { useState } from "react";
import "./Form.css";
import FormSignup from "./FormSignup";
import FormSuccess from "./FormSuccess";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <Link to="/">
        <AiIcons.AiOutlineClose className="close-btn" />
      </Link>
      <div className="form-container">
        <div className="form-content-left"></div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Form;
