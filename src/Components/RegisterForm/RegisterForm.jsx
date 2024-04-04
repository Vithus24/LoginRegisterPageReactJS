import React, { useState } from "react";
import "./RegisterForm.css";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const RegisterForm = () => {
  const [formErrors, setFormErrors] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    // Validate form fields
    const email = event.target.elements.email.value;
    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;
    const confirmPassword = event.target.elements.confirmPassword.value;

    let isValid = true;

    if (!isEmailValid(email)) {
      setFormErrors({ ...formErrors, email: "Invalid email format" });
      isValid = false;
    } else {
      setFormErrors({ ...formErrors, email: "" });
    }

    if (password !== confirmPassword) {
      setFormErrors({
        ...formErrors,
        confirmPassword: "Passwords do not match",
      });
      isValid = false;
    } else {
      setFormErrors({ ...formErrors, confirmPassword: "" });
    }

    // Additional validation for username, password length, etc.

    if (isValid) {
      // For demonstration purposes, just logging the form data
      console.log("Form submitted successfully!", email, username, password);
      // You can add logic here to handle form submission, such as storing data in localStorage
    }
  };

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="Register">
      <div className="wrapper1">
        <form onSubmit={handleSubmit}>
          <h1>Register</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder="Email"
              required
              name="email"
              aria-describedby="email-error"
            />
            <IoMdMail className="icon" />
            {formErrors.email && <p id="email-error">{formErrors.email}</p>}
          </div>

          <div className="input-box">
            <input
              type="text"
              placeholder="Username"
              required
              name="username"
              aria-describedby="username-error"
            />
            <FaUser className="icon" />
            {formErrors.username && (
              <p id="username-error">{formErrors.username}</p>
            )}
          </div>

          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              required
              name="password"
              aria-describedby="password-error"
            />
            <FaLock className="icon" />
            {formErrors.password && <p id="password-error">{formErrors.password}</p>}
          </div>

          <div className="input-box">
            <input
              type="password"
              placeholder="Confirm Password"
              required
              name="confirmPassword"
              aria-describedby="confirm-password-error"
            />
            <FaLock className="icon" />
            {formErrors.confirmPassword && (
              <p id="confirm-password-error">{formErrors.confirmPassword}</p>
            )}
          </div>

          <button type="submit">Sign up</button>

          <div className="register-link">
            <p>
              Already have an account?{' '}
              <span
                onClick={() => {
                  window.location.href = '/';
                }}
                style={{ cursor: 'pointer', textDecoration: 'underline' }}
              >
                Login
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
