import React from 'react';
import './Messages.css';

const Messages = () => {
  // Sample message data
  const messages = [
    {
      id: 1,
      from: 'Seller 1',
      content: 'Your order has been shipped!',
      date: '2024-09-27',
    },
    {
      id: 2,
      from: 'Seller 2',
      content: 'Your payment has been received.',
      date: '2024-09-26',
    },
  ];

  return (
    <div className="messages-section">
      <h3>Messages</h3>
      <div className="messages-container">
        {messages.map((message) => (
          <div key={message.id} className="message-card">
            <h4>{message.from}</h4>
            <p>{message.content}</p>
            <small>{message.date}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Messages;
