import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa'; // hamburger & close icons
import logo from './logo.png';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(prev => !prev);
  const closeDropdown = () => setDropdownOpen(false);

  const toggleMobileMenu = () => setMobileMenuOpen(prev => !prev);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
        <span className="navbar-brand">ConsultCraft</span>
      </div>

      {/* Hamburger Icon */}
<div className="hamburger" onClick={toggleMobileMenu}>
  {mobileMenuOpen ? <FaTimes /> : <FaBars />}
</div>

{/* Mobile Overlay */}
{/* Mobile Overlay */}
{mobileMenuOpen && (
  <div className="mobile-overlay">
    {/* Close Button (X) */}
    <div className="close-btn" onClick={closeMobileMenu}>
      <FaTimes />
    </div>

    <ul className="mobile-links">
      <li>
        <NavLink to="/" end onClick={closeMobileMenu}>Home</NavLink>
      </li>
      <li>
        <NavLink to="/products/sportscove" onClick={closeMobileMenu}>SportsCove</NavLink>
      </li>
      <li>
        <NavLink to="/products/consultcove" onClick={closeMobileMenu}>ConsultCove</NavLink>
      </li>
      <li>
        <NavLink to="/about" onClick={closeMobileMenu}>About</NavLink>
      </li>
      <li>
        <NavLink to="/sctribe" onClick={closeMobileMenu}>Sportscove Tribe</NavLink>
      </li>
      <li>
        <NavLink to="/contact" onClick={closeMobileMenu}>Contact</NavLink>
      </li>
    </ul>
  </div>
)}



      {/* Links */}
      <ul className={`navbar-links ${mobileMenuOpen ? 'active' : ''}`}>
        <li>
          <NavLink to="/" end className="nav-link" onClick={closeMobileMenu}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" className="nav-link" onClick={closeMobileMenu}>About</NavLink>
        </li>

        {/* Products dropdown */}
        <li className="nav-link dropdown">
          <span className="nav-link-text" onClick={toggleDropdown}>Products</span>
          {dropdownOpen && (
            <div className="dropdown-menu">
              <NavLink to="/products/sportscove" className="dropdown-item" onClick={() => { closeDropdown(); closeMobileMenu(); }}>
                Sportscove
              </NavLink>
              <NavLink to="/products/consultcove" className="dropdown-item" onClick={() => { closeDropdown(); closeMobileMenu(); }}>
                Consultcove
              </NavLink>
            </div>
          )}
        </li>

        <li>
          <NavLink to="/sctribe" className="nav-link" onClick={closeMobileMenu}>Sportscove Tribe</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="nav-link" onClick={closeMobileMenu}>Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
