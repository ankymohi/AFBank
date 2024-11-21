import React, { useState } from 'react';
import './SellerDashboard.css';

const initialListingsData = [
  {
    id: 1,
    name: 'Tech Startup 1',
    revenue: '$500k',
    growthRate: '15%',
    profitMargin: '20%',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Tech Startup 2',
    revenue: '$1M',
    growthRate: '20%',
    profitMargin: '25%',
    imageUrl: 'https://via.placeholder.com/150',
  },
];

const Listings = () => {
  const [listings, setListings] = useState(initialListingsData);
  const [editingId, setEditingId] = useState(null); // For editing listings
  const [editFormData, setEditFormData] = useState({
    name: '',
    revenue: '',
    growthRate: '',
    profitMargin: '',
    imageUrl: '',
  });

  // State for the new listing form
  const [newListing, setNewListing] = useState({
    name: '',
    revenue: '',
    growthRate: '',
    profitMargin: '',
    imageUrl: '',
  });

  // Handle Delete
  const handleDelete = (id) => {
    const updatedListings = listings.filter((listing) => listing.id !== id);
    setListings(updatedListings);
  };

  // Handle Edit Click
  const handleEditClick = (listing) => {
    setEditingId(listing.id);
    setEditFormData({
      name: listing.name,
      revenue: listing.revenue,
      growthRate: listing.growthRate,
      profitMargin: listing.profitMargin,
      imageUrl: listing.imageUrl,
    });
  };

  // Handle Edit Change
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle Save Edited Listing
  const handleSave = () => {
    const updatedListings = listings.map((listing) =>
      listing.id === editingId ? { ...listing, ...editFormData } : listing
    );
    setListings(updatedListings);
    setEditingId(null); // Close edit form
  };

  // Handle New Listing Change
  const handleNewListingChange = (e) => {
    const { name, value } = e.target;
    setNewListing((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle Add New Listing
  const handleAddListing = (e) => {
    e.preventDefault();
    const newId = listings.length + 1;
    const newListingWithId = { ...newListing, id: newId };
    setListings((prevListings) => [...prevListings, newListingWithId]);
    setNewListing({
      name: '',
      revenue: '',
      growthRate: '',
      profitMargin: '',
      imageUrl: '',
    }); // Reset the form
  };

  return (
    <div className="listings-section">
      <h3>My Listings</h3>
      
      {/* Add New Listing Form */}
      <div className="add-listing-form">
        <h4>Add New Listing</h4>
        <form onSubmit={handleAddListing}>
          <input
            type="text"
            name="name"
            value={newListing.name}
            onChange={handleNewListingChange}
            placeholder="Startup Name"
            required
          />
          <input
            type="text"
            name="revenue"
            value={newListing.revenue}
            onChange={handleNewListingChange}
            placeholder="Annual Revenue"
            required
          />
          <input
            type="text"
            name="growthRate"
            value={newListing.growthRate}
            onChange={handleNewListingChange}
            placeholder="Customer Growth Rate"
            required
          />
          <input
            type="text"
            name="profitMargin"
            value={newListing.profitMargin}
            onChange={handleNewListingChange}
            placeholder="Profit Margin"
            required
          />
          <input
            type="text"
            name="imageUrl"
            value={newListing.imageUrl}
            onChange={handleNewListingChange}
            placeholder="Image URL"
            required
          />
          <button type="submit" className="add-btn">Add Listing</button>
        </form>
      </div>

      <div className="listings-grid">
        {listings.map((listing) => (
          <div className="listing-card" key={listing.id}>
            {editingId === listing.id ? (
              <div className="edit-form">
                <input
                  type="text"
                  name="name"
                  value={editFormData.name}
                  onChange={handleEditChange}
                  placeholder="Startup Name"
                />
                <input
                  type="text"
                  name="revenue"
                  value={editFormData.revenue}
                  onChange={handleEditChange}
                  placeholder="Annual Revenue"
                />
                <input
                  type="text"
                  name="growthRate"
                  value={editFormData.growthRate}
                  onChange={handleEditChange}
                  placeholder="Growth Rate"
                />
                <input
                  type="text"
                  name="profitMargin"
                  value={editFormData.profitMargin}
                  onChange={handleEditChange}
                  placeholder="Profit Margin"
                />
                <input
                  type="text"
                  name="imageUrl"
                  value={editFormData.imageUrl}
                  onChange={handleEditChange}
                  placeholder="Image URL"
                />
                <button className="save-btn" onClick={handleSave}>Save</button>
              </div>
            ) : (
              <>
                <img src={listing.imageUrl} alt={listing.name} className="listing-image" />
                <div className="listing-details">
                  <h4>{listing.name}</h4>
                  <p><strong>Annual Revenue:</strong> {listing.revenue}</p>
                  <p><strong>Customer Growth Rate:</strong> {listing.growthRate}</p>
                  <p><strong>Profit Margin:</strong> {listing.profitMargin}</p>
                  <div className="listing-actions">
                    <button className="edit-btn" onClick={() => handleEditClick(listing)}>Edit</button>
                    <button className="delete-btn" onClick={() => handleDelete(listing.id)}>Delete</button>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Listings;
