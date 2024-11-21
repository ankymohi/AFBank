import React, { useState } from 'react';
import './MyPurchases.css';

const MyPurchases = () => {
  // Sample data for purchases
  const initialPurchases = [
    {
      id: 1,
      item: 'Startup Listing 1',
      amount: '$1,200',
      status: 'Completed',
    },
    {
      id: 2,
      item: 'Startup Listing 2',
      amount: '$800',
      status: 'Pending',
    },
    {
      id: 3,
      item: 'Startup Listing 3',
      amount: '$1,500',
      status: 'Completed',
    },
  ];

  const [purchases, setPurchases] = useState(initialPurchases);

  return (
    <div className="my-purchases-section">
      <h3>My Purchases</h3>
      <div className="purchases-container">
        {purchases.map((purchase) => (
          <div key={purchase.id} className="purchase-card">
            <h4>{purchase.item}</h4>
            <p>Amount: {purchase.amount}</p>
            <p>Status: {purchase.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyPurchases;
