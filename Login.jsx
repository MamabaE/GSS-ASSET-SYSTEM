import React from "react";
import './Login.css';
import Logo from '../Assest/GSS.png';
import Background from '../Assest/Background.png';

const Login = () => {
  return (
    <div className="form">
      
      <div className="form-content">
        <div className="logo-container">
          <img src={Logo} alt="GSS Logo" />
        </div>
        <div className="header-container">
          <h1>Login</h1>
        </div>
        <div className="input-container">
          <form>
            <div>
              <input type="email" className="input-email" placeholder="Enter your email" required />
            </div>
            <div>
              <input type="password" className="input-password" placeholder="Enter your password" required />
            </div>
            <div className="remember-forgot">
              <label>
                <input type="checkbox" className="input-checkbox" /> Remember me
              </label>
              <br />
              <a href="#" className="forgot-password">Forgot password?</a>
            </div>
            <button type="submit" className="submit-button">Login</button>
          </form>
        </div>
      </div>

      
      <div className="background-container">
        <img src={Background} alt="Background" />
      </div>
    </div>
  );
};

export default Login;
