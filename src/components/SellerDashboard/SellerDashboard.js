// SellerDashboard.js
import React, { useEffect, useState } from 'react';
import { FaChartLine, FaList, FaComments, FaUserCog, FaSignOutAlt } from 'react-icons/fa';
import Listings from './Listings';
import ProfileSettings from './ProfileSettings';
import Messages from './Messages';
import ListingForm from './ListingForm';
import axios from 'axios'; // Import Axios
import './SellerDashboard.css';

const SellerDashboard = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [listings, setListings] = useState([]); // State to hold listings

  // Fetch listings from the API on component mount
  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/listings');
        setListings(response.data);
      } catch (error) {
        console.error('Error fetching listings:', error);
      }
    };

    fetchListings();
  }, []);

  // Handle adding a new listing
  const handleAddListing = async (newListing) => {
    try {
      const response = await axios.post('http://localhost:5000/api/listings', newListing);
      setListings((prevListings) => [...prevListings, response.data]); // Update the listings state with the new listing
    } catch (error) {
      console.error('Error adding listing:', error);
    }
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>Seller Dashboard</h2>
        <ul>
          <li onClick={() => setActiveSection('overview')}><FaChartLine /> Overview</li>
          <li onClick={() => setActiveSection('listings')}><FaList /> Listings</li>
          <li onClick={() => setActiveSection('messages')}><FaComments /> Messages</li>
          <li onClick={() => setActiveSection('profile')}><FaUserCog /> Profile Settings</li>
          <li><FaSignOutAlt /> Logout</li>
        </ul>
      </div>

      {/* Main Dashboard Content */}
      <div className="main-content">
        {activeSection === 'overview' && (
          <div className="overview-section">
            <h3>Overview</h3>
            <div className="stats">
              <div className="card">
                <h4>Total Views</h4>
                <p>1,200</p>
              </div>
              <div className="card">
                <h4>Offers Received</h4>
                <p>15</p>
              </div>
              <div className="card">
                <h4>Sales Analytics</h4>
                <p>120 Sales</p>
              </div>
            </div>
          </div>
        )}
        {activeSection === 'listings' && (
          <div>
            <ListingForm addListing={handleAddListing} /> {/* Listing Form */}
            <Listings listings={listings} /> {/* Pass listings to Listings component */}
          </div>
        )}
        {activeSection === 'messages' && <Messages />}
        {activeSection === 'profile' && <ProfileSettings />}
      </div>
    </div>
  );
};

export default SellerDashboard;
