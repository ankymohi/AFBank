import React from 'react';
import './MAndASupport.css'; // Create a separate CSS file for styling

const MAndASupport = () => {
  return (
    <div className="ma-support-section">
      <h2>Integrated M&A Support</h2>
      <p>
        Both buyers and sellers can choose to work with verified M&A professionals listed on the platform.
        These professionals assist in:
      </p>
      <ul className="ma-services">
        <li>Due Diligence</li>
        <li>Valuation Analysis</li>
        <li>Negotiations</li>
      </ul>
      <p>
        This ensures the transaction proceeds smoothly, minimizing risks on both sides.
      </p>
      <button className="contact-button">Contact M&A Professionals</button>
    </div>
  );
};

export default MAndASupport;
