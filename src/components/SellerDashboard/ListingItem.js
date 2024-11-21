// ListingItem.js
import React from 'react';
import './SellerDashboard.css';

const ListingItem = ({ listing }) => {
  return (
    <div className="listing-item">
      <h4>{listing.name}</h4>
      <div className="listing-photos">
        {listing.photos.map((photo, index) => (
          <img key={index} src={photo} alt={`Listing ${index + 1}`} />
        ))}
      </div>
      <p><strong>Annual Revenue:</strong> {listing.revenue}</p>
      <p><strong>Customer Growth Rate:</strong> {listing.growthRate}</p>
      <p><strong>Profit Margins:</strong> {listing.profitMargin}</p>
    </div>
  );
};

export default ListingItem;
