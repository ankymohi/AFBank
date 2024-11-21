import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logoImage from '../assets/logo1.png';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({ pricing: false, resources: false });

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMouseEnter = (name) => {
    setDropdownOpen((prev) => ({ ...prev, [name]: true }));
  };

  const handleMouseLeave = (name) => {
    setDropdownOpen((prev) => ({ ...prev, [name]: false }));
  };

  const handleLinkClick = () => {
    setMenuOpen(false); // Close menu on link click (mobile-friendly)
  };

  return (
    <header className="header">
      <nav className="navbar">
        {/* Logo Section */}
        <div className="logo">
          <Link to="/"><img src={logoImage} alt="Logo" /></Link>
        </div>

        {/* Navigation Links */}
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li onClick={handleLinkClick}><Link to="/SellersListing">Marketplace</Link></li>
            <li onClick={handleLinkClick}><Link to="/ForSellers ">Para Vendedores</Link></li>
            
            {/* Hoverable Dropdown for Pricing */}
            <li 
              className="dropdown" 
              onMouseEnter={() => handleMouseEnter('pricing')} 
              onMouseLeave={() => handleMouseLeave('pricing')}
            >
              <Link>Preços&nbsp; <i className="fas fa-chevron-down"></i></Link>
              {dropdownOpen.pricing && (
                <ul className="dropdown-menu">
                  <li onClick={handleLinkClick}><Link to="/Sellers">Vendedores</Link></li>
                  <li onClick={handleLinkClick}><Link to="/Buyers">Compradores</Link></li>
                </ul>
              )}
            </li>
            
            {/* Hoverable Dropdown for Resources */}
            <li 
              className="dropdown" 
              onMouseEnter={() => handleMouseEnter('resources')} 
              onMouseLeave={() => handleMouseLeave('resources')}
            >
              <Link>Recursos&nbsp; <i className="fas fa-chevron-down"></i></Link>
              {dropdownOpen.resources && (
                <ul className="dropdown-menu">
                  <li onClick={handleLinkClick}><Link to="/resources/blog">Blog</Link></li>
                  <li onClick={handleLinkClick}><Link to="/resources/guides">Guias</Link></li>
                  <li onClick={handleLinkClick}><Link to="/resources/case-studies">Estudos de Caso</Link></li>
                </ul>
              )}
            </li>
          </ul>
        </div>

        {/* Call-to-Action Buttons */}
        <div className="cta-buttons">
          <Link to="/Login" className="btn-valuation1">
            <i className="fa fa-lock" style={{ color: '#ffc107' }} aria-hidden="true"></i>&nbsp; Entrar
          </Link>
          <Link to="/valuation" className="btn-valuation">
            Comece Agora &nbsp;<i className="fa fa-arrow-right" style={{ color: 'white' }}></i>
          </Link>
        </div>

        {/* Burger Menu */}
        <div 
          className={`burger ${menuOpen ? 'active' : ''}`} 
          onClick={toggleMenu} 
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          role="button"
        >
          <span className={menuOpen ? 'active' : ''}></span>
          <span className={menuOpen ? 'active' : ''}></span>
          <span className={menuOpen ? 'active' : ''}></span>
        </div>
      </nav>
    </header>
  );
}

export default Header;
