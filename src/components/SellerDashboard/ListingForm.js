// ListingForm.js
import React, { useState } from 'react';
import './SellerDashboard.css';
import axios from 'axios'; // Import Axios

const ListingForm = ({ addListing }) => {
  const [formData, setFormData] = useState({
    name: '',
    revenue: '',
    growthRate: '',
    profitMargin: '',
    photos: [],
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePhotoUpload = (e) => {
    const files = Array.from(e.target.files).map(file => URL.createObjectURL(file));
    setFormData({
      ...formData,
      photos: files,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addListing(formData); // Call the addListing function
      setFormData({ name: '', revenue: '', growthRate: '', profitMargin: '', photos: [] }); // Reset the form
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  };

  return (
    <form className="listing-form" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Annual Revenue:
        <input
          type="text"
          name="revenue"
          value={formData.revenue}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Customer Growth Rate:
        <input
          type="text"
          name="growthRate"
          value={formData.growthRate}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Profit Margins:
        <input
          type="text"
          name="profitMargin"
          value={formData.profitMargin}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Photos:
        <input type="file" onChange={handlePhotoUpload} multiple />
      </label>
      <button type="submit">Add Listing</button>
    </form>
  );
};

export default ListingForm;
