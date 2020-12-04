import { useState, useEffect } from "react";
import axios from "axios";

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    password2: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
    const userObject = {
      username: values.username,
      password: values.password,
      email: values.email
    };
    axios
      .post(
        "https://fitness-management.herokuapp.com/signup/formresult",
        userObject
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleSubmitL = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
    const userObject = {
      password: values.password,
      email: values.email
    };
    axios
      .post(
        "https://fitness-management.herokuapp.com/login/formresult",
        userObject
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return { handleChange, handleSubmit, handleSubmitL, values, errors };
};

export default useForm;
