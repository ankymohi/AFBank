import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css'; // Use styles similar to Register.css
import logoImage from '../assets/logo.png'; // Ensure this image path is correct

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', data);
      if (response.status === 200) {
        alert('Login successful!');
        const { token, role } = response.data;
        localStorage.setItem('token', token);
        localStorage.setItem('role', role);

        // Redirect based on user role
        if (role === 'buyer') {
          navigate('/Buyer%20Dashboard/BuyerDashboard');
        } else if (role === 'seller') {
          navigate('/SellerDashboard/SellerDashboard');
        } else {
          navigate('/dashboard');
        }
      }
    } catch (error) {
      console.error("API Error: ", error.response ? error.response.data : error.message);
      alert('Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <motion.div 
      className="login-container"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="login-content">
        {/* Left side: Login Form */}
        <div className="login-form">
          <div className="logo">
            <Link to="/"><img className='loginlogo' src={logoImage} alt="Logo" /></Link>
          </div>
          <br></br>
          <h2><FontAwesomeIcon icon={faSignInAlt} /> Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-group">
              <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
              <input
                type="email"
                placeholder="Email"
                className="input-field"
                {...register('email', { 
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address"
                  }
                })}
              />
              {errors.email && <span className="error-message">{errors.email.message}</span>}
            </div>
            <div className="input-group">
              <FontAwesomeIcon icon={faLock} className="input-icon" />
              <input
                type="password"
                placeholder="Password"
                className="input-field"
                {...register('password', { 
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters"
                  }
                })}
              />
              {errors.password && <span className="error-message">{errors.password.message}</span>}
            </div>
            <button type="submit" className="button">Login</button>
          </form>
          <p className="forgot-password">
            <a href="/forgot-password">Forgot Password?</a>
          </p>
          <p className="toggle-link">
            Don't have an account? <a href="/register">Sign up</a>
          </p>
        </div>

        {/* Right side: Promotional Content */}
        <div className="login-promotion">
          <div className="promotion-content">
            <h2>Join Empire Flippers Now</h2>
            <p>Find vetted, profitable online businesses</p>
            <p>Advanced marketplace search filters</p>
            <p>Add listings to your watchlist</p>
            <p>Save your searches to save time</p>
            <p>Get a free valuation of your business</p>
            <p>Sell your site on our marketplace</p>
            <p>Dashboard to monitor everything</p>
            <p>Access to useful resources section</p>

            <div className="stats">
              <div><strong>$514,027,098</strong><p>Sales Overall</p></div>
              <div><strong>2,373</strong><p># of Listings Sold</p></div>
              <div><strong>155</strong><p>Current Listings</p></div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Login;
