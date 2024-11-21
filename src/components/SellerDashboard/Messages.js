import React, { useState } from 'react';
import './Messages.css';

const Messages = () => {
  // Sample data for messages
  const initialMessages = [
    {
      id: 1,
      sender: 'Alice',
      preview: 'Hey, I have a question about your listing...',
      content: 'Hey, I have a question about your listing. Could you please provide more details about the pricing and profit margins?',
      date: '2024-09-20',
    },
    {
      id: 2,
      sender: 'Bob',
      preview: 'Can we arrange a call to discuss the investment?',
      content: 'Can we arrange a call to discuss the investment opportunity? I would like to learn more before making a decision.',
      date: '2024-09-19',
    },
  ];

  const [messages, setMessages] = useState(initialMessages);
  const [selectedMessage, setSelectedMessage] = useState(null); // To store the selected message for detailed view

  // Function to handle message selection
  const handleSelectMessage = (message) => {
    setSelectedMessage(message);
  };

  // Function to handle reply
  const handleSendReply = (e) => {
    e.preventDefault();
    alert('Reply sent!');
    // Logic to send the reply can be added here (e.g., API call)
  };

  return (
    <div className="messages-section">
      <h3>Messages</h3>
      <div className="messages-container">
        {/* Message List */}
        <div className="message-list">
          {messages.map((message) => (
            <div
              key={message.id}
              className="message-preview"
              onClick={() => handleSelectMessage(message)}
            >
              <p><strong>{message.sender}</strong></p>
              <p>{message.preview}</p>
              <p className="message-date">{message.date}</p>
            </div>
          ))}
        </div>

        {/* Message Detail View */}
        {selectedMessage ? (
          <div className="message-detail">
            <h4>Conversation with {selectedMessage.sender}</h4>
            <p>{selectedMessage.content}</p>

            {/* Reply Form */}
            <form className="reply-form" onSubmit={handleSendReply}>
              <textarea
                placeholder="Type your reply here..."
                rows="4"
                required
              ></textarea>
              <button type="submit">Send Reply</button>
            </form>
          </div>
        ) : (
          <div className="no-message-selected">
            <p>Select a message to view the conversation.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Messages;
