import React, { useState } from 'react';
import { FaChartLine, FaList, FaComments, FaUserCog, FaSignOutAlt } from 'react-icons/fa';
import MyPurchases from './MyPurchases';
import Messages from './Messages';
import ProfileSettings from './ProfileSettings';
import './BuyerDashboard.css';

const BuyerDashboard = () => {
  const [activeSection, setActiveSection] = useState('overview');

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h2>Buyer Dashboard</h2>
        <ul>
          <li onClick={() => setActiveSection('overview')}><FaChartLine /> Overview</li>
          <li onClick={() => setActiveSection('purchases')}><FaList /> My Purchases</li>
          <li onClick={() => setActiveSection('messages')}><FaComments /> Messages</li>
          <li onClick={() => setActiveSection('profile')}><FaUserCog /> Profile Settings</li>
          <li><FaSignOutAlt /> Logout</li>
        </ul>
      </div>

      <div className="main-content">
        {activeSection === 'overview' && (
          <div className="overview-section">
            <h3>Overview</h3>
            <div className="stats">
              <div className="card">
                <h4>Total Spendings</h4>
                <p>$5,000</p>
              </div>
              <div className="card">
                <h4>Items Purchased</h4>
                <p>20</p>
              </div>
              <div className="card">
                <h4>Pending Orders</h4>
                <p>3</p>
              </div>
            </div>
          </div>
        )}
        {activeSection === 'purchases' && <MyPurchases />}
        {activeSection === 'messages' && <Messages />}
        {activeSection === 'profile' && <ProfileSettings />}
      </div>
    </div>
  );
};

export default BuyerDashboard;
