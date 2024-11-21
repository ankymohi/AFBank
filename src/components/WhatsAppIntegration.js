import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppIntegration.css'; // CSS for styling

const WhatsAppAICommunication = () => {
  const [isOpen, setIsOpen] = useState(false); // State for modal visibility

  const toggleModal = () => setIsOpen(!isOpen); // Function to toggle modal

  return (
    <div className={`whatsapp-ai-communication ${isOpen ? 'open' : ''}`}>
      {/* Only the WhatsApp Icon initially */}
      <div className="whatsapp-header" onClick={toggleModal}>
        <FaWhatsapp className="whatsapp-icon" />
      </div>

      {/* Conditional rendering for content */}
      {isOpen && (
        <div className="whatsapp-content">
          <h2>Chat with Equitymania AI</h2>
          <p>
            Communicate directly with the Equitymania AI powered by ChatGPT. This AI can provide guidance throughout the acquisition process,
            answer your questions, and help interpret financial data.
          </p>
          <h4>Benefits for Users:</h4>
          <ul>
            <li>📈 For buyers: AI assists in evaluating startups and answering due diligence questions.</li>
            <li>🛒 For sellers: AI helps with managing listings and responding to buyer inquiries.</li>
          </ul>
          <a 
            href="https://wa.me/yourWhatsAppNumber?text=Hi%20Equitymania%20AI,%20I%20need%20assistance%20with%20..." 
            target="_blank" 
            rel="noopener noreferrer"
            className="whatsapp-button"
          >
            Chat Now on WhatsApp
          </a>
          <button onClick={toggleModal} className="close-button">Close</button>
        </div>
      )}
    </div>
  );
};

export default WhatsAppAICommunication;
