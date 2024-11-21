import React, { useState } from 'react'
import './Pricing.css'; // Use styles similar to Register.css
const Pricing = () => {
  const [activePrice, setActivePrice] = useState('below250k');
  return (
   <>
 <div className="pricing-container">
      {/* Heading Outside the Card */}
      <div className="pricing-heading">
        <h2>A Custom Acquisition Plan that Scales with You</h2>
        <p>Scalable pricing based on your startup’s asking price.</p>
      </div>

      {/* Card */}
      <div className="pricing-card">
        {/* Left Section */}
        <div className="pricing-left">
          <div className="price-tabs">
            <button
              className={`price-tab ${activePrice === 'below250k' ? 'active' : ''}`}
              onClick={() => setActivePrice('below250k')}
            >
              $250k
            </button>
            <button
              className={`price-tab ${activePrice === '250kTo1M' ? 'active' : ''}`}
              onClick={() => setActivePrice('250kTo1M')}
            >
              $250k-$1M
            </button>
            <button
              className={`price-tab ${activePrice === 'above1M' ? 'active' : ''}`}
              onClick={() => setActivePrice('above1M')}
            >
              $1M+
            </button>
          </div>

          <div className="pricing-details">
            {activePrice === 'below250k' && (
              <>
                <h3>For asking prices below $250k</h3>
                <div className="percentage-highlight">8%</div>
                <p>closing fee when you sell<hr className='hr' ></hr></p>
                <p>Plus $25/mo to list</p>
              </>
            )}
            {activePrice === '250kTo1M' && (
              <>
                <h3>For asking prices between $250k-$1M</h3>
                <div className="percentage-highlight">7%</div>
                <p>closing fee when you sell</p>
                <hr className='hr' ></hr>
                <p>Plus $50/mo to list</p>
              </>
            )}
            {activePrice === 'above1M' && (
              <>
                <h3>For asking prices above $1M</h3>
                <div className="percentage-highlight">6%</div>
                <p>closing fee when you sell</p>
                <hr className='hr' ></hr>
                <p>Plus $100/mo to list</p>
              </>
            )}
          </div>

          <a href="#" className="cta-button">Get Started</a>
        </div>

        {/* Right Section */}
        <div className="pricing-right">
          <div className="feature">
            <h3>💼 Maximum Interest</h3>
            <p>Attract more buyers with marketing and listing support.</p>
          </div>

          <div className="feature">
            <h3>🔑 Expert Guidance</h3>
            <p>Sell for the highest price and best terms with our help.</p>
          </div>

          <div className="feature">
            <h3>🔒 Free and Secure Escrow</h3>
            <p>Close safely and easily with trusted escrow partners.</p>
          </div>
        </div>
      </div>
    </div>

</>

  )
}

export default Pricing
