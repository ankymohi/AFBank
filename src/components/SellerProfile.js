import React from 'react';
import './SellerProfile.css';

const SellerProfile = ({ seller, onClose }) => {
  if (!seller) return null;

  return (
    <div className="profile-container">
      <button className="close-button" onClick={onClose}>X</button>
      <div className="profile-details">
        <img src={seller.image} alt={seller.name} className="profile-image" />
        <h2>{seller.name}</h2>
        <p><strong>Type:</strong> {seller.type}</p>
        <p><strong>Annual Revenue:</strong> {seller.revenue}</p>
        <p><strong>Customer Growth Rate:</strong> {seller.growthRate}</p>
        <p><strong>Profit Margins:</strong> {seller.profitMargins}</p>
        <p><strong>Description:</strong> {seller.description}</p>
      </div>
    </div>
  );
};

export default SellerProfile;
