import React, { useState } from 'react';
import './SellerDashboard.css';

const ProfileSettings = () => {
  // Initial profile data
  const initialProfileData = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '123-456-7890',
    avatar: 'https://via.placeholder.com/150', // Default avatar image
  };

  const [profileData, setProfileData] = useState(initialProfileData);
  const [isEditing, setIsEditing] = useState(false); // Editing mode toggle

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission (save changes)
  const handleSaveChanges = (e) => {
    e.preventDefault();
    setIsEditing(false);
    // You could make an API call here to save the changes
    alert('Profile updated successfully!');
  };

  // Toggle editing mode
  const handleEditClick = () => {
    setIsEditing(true);
  };

  return (
    <div className="profile-settings">
      <h3>Profile Settings</h3>

      {/* Avatar */}
      <div className="profile-avatar">
        <img src={profileData.avatar} alt="Avatar" className="avatar-img" />
      </div>

      {isEditing ? (
        <form className="profile-form" onSubmit={handleSaveChanges}>
          <input
            type="text"
            name="name"
            value={profileData.name}
            onChange={handleInputChange}
            placeholder="Full Name"
            required
          />
          <input
            type="email"
            name="email"
            value={profileData.email}
            onChange={handleInputChange}
            placeholder="Email"
            required
          />
          <input
            type="tel"
            name="phone"
            value={profileData.phone}
            onChange={handleInputChange}
            placeholder="Phone Number"
            required
          />
          <input
            type="text"
            name="avatar"
            value={profileData.avatar}
            onChange={handleInputChange}
            placeholder="Avatar Image URL"
            required
          />
          <button type="submit" className="save-btn">Save Changes</button>
        </form>
      ) : (
        <div className="profile-details">
          <p><strong>Name:</strong> {profileData.name}</p>
          <p><strong>Email:</strong> {profileData.email}</p>
          <p><strong>Phone:</strong> {profileData.phone}</p>
          <button className="edit-btn" onClick={handleEditClick}>Edit Profile</button>
        </div>
      )}
    </div>
  );
};

export default ProfileSettings;
