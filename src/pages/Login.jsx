import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../pages/css/Login.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();

    // Display the toast notification
    toast.success('Logged in successfully!', {
      position: "bottom-right",
      autoClose: 2000,
      className: 'toast-custom',
      bodyClassName: 'toast-custom-body',
      progressClassName: 'toast-custom-progress',
    });

    // Navigate to Admindash.jsx
    setTimeout(() => {
      navigate('/admindash'); // Update with your actual route
    }, 2000); // Delay to match toast duration
  };

  const handleAdminLoginClick = () => {
    navigate('/adminlogin'); // Update with your actual route
  };

  return (
    <div className="login-background">
      <video
        className="login-background__video"
        src="/files/video-bg.mp4"
        autoPlay
        muted
        loop
      ></video>
      <main className="login-main">
        <div className="login-card__image-container">
          <div className="login-slide-images">
            <img
              className="login-slide"
              src="src\assets\img\log.jpg"
              alt="Card Image"
            />
            <img
              className="login-slide"
              src="https://i.pinimg.com/564x/14/13/38/1413387c9de2609825b61f0719f024d4.jpg"
              alt="Card Image"
            />
            <img
              className="login-slide"
              src="src\assets\img\log.jpg"
              alt="Card Image"
            />
          </div>
        </div>
        <form className="login-form" action="#" autoComplete="off" onSubmit={handleSubmit}>
          <h2 className="login-heading">Log In</h2>
          <div className="login-input-group">
            <i className="far fa-user fa-lg login-icon"></i>
          </div>
          <div className="login-input-group">
            <i className="far fa-envelope fa-lg login-icon"></i>
            <input
              type="email"
              name="email"
              id="login-email"
              placeholder="Email"
              required
            />
          </div>
          <div className="login-input-group">
            <i className="fas fa-unlock-alt fa-lg login-icon"></i>
            <input
              type="password"
              name="password"
              id="login-password"
              placeholder="Password"
              required
            />
          </div>
          <div className="login-remember">
            <input type="checkbox" name="remember" id="login-remember" />
            <label htmlFor="login-remember">
              Remember me
            </label>
          </div>
          <button type="submit" className="login-button">Log In</button>
          <hr className="login-divider" />
          <a className="login-signup-link" href="#signup">Don't have an account? Sign Up</a>
          <center>
            <p className="login-creator">Made with <span>❤</span> by Shri</p>
            <button type="button" className="login-signup-link" onClick={handleAdminLoginClick}>
              Admin Login
            </button>
          </center>
        </form>
      </main>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
      />
    </div>
  );
};

export default Login;
