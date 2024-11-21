import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios'; 
import './Register.css';
import logoImage from '../assets/logo.png';

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', data);
      if (response.status === 201) {
        alert('Registration successful! Please log in.');
        navigate('/login');
      }
    } catch (error) {
      console.error("API Error: ", error.response ? error.response.data : error.message);
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <motion.div 
      className="register-container" 
      initial={{ opacity: 0, y: -50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
    >
      <div className="register-content">
        {/* Left side: Registration Form */}
        <div className="register-form">
          
        <div className="logo">
            <Link to="/"><img src={logoImage} alt="Logo" /></Link>
          </div>
          <br></br>
          <h2><FontAwesomeIcon icon={faUserPlus} /> Register Account</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-group">
              <FontAwesomeIcon icon={faUser} className="input-icon" />
              <input
                type="text"
                placeholder="Name"
                className="input-field"
                {...register('name', { required: "Name is required" })}
              />
              {errors.name && <span className="error-message">{errors.name.message}</span>}
            </div>
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
            <select className="input-fieldrole" {...register('role', { required: "Role is required" })}>
              <option value="">Select Role</option>
              <option value="buyer">Buyer</option>
              <option value="seller">Seller</option>
            </select>
            {errors.role && <span className="error-message">{errors.role.message}</span>}
            <button type="submit" className="button">Register</button>
          </form>
          <p className="toggle-link">
            Already have an account? <a href="/login">Log in</a>
          </p>
        </div>

        {/* Right side: Promotional Content */}
        <div className="register-promotion">
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

export default Register;
