import React, { useState } from 'react';
import './LoginForm.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const LoginForm = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault(); // Prevent default form submission
    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;

    // Basic authentication logic (without backend)
    // For demonstration, you can compare the username and password with hard-coded values
    if (username === 'demo' && password === 'demo') {
      console.log('Login successful');
      setIsLoggedIn(true);
      // Store login status in sessionStorage
      sessionStorage.setItem('isLoggedIn', 'true');
      // Handle successful login, e.g., redirect to another page or display a success message
    } else {
      console.log('Invalid username or password');
      // Handle unsuccessful login, e.g., display an error message
    }
  };

  // Check if user is already logged in
  if (isLoggedIn || sessionStorage.getItem('isLoggedIn') === 'true') {
    return <p>You are already logged in.</p>;
  }

  return (
    <div className='login'>
      <div className='wrapper'>
        <form onSubmit={handleLogin}>
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" placeholder='Username' required name="username"/>
            <FaUser className='icon' />
          </div>

          <div className="input-box">
            <input type="password" placeholder='Password' required name="password"/>
            <FaLock className='icon'/>
          </div>

          <div className="remember-forgot">
            <label><input type="checkbox"/>Remember me</label>
            <a href="#">Forgot Password?</a>
          </div>

          <button type="submit">Login</button>

          <div className="register-link">
            <p>Don't have an account?<a href="/register">Register</a></p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginForm;
