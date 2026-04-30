import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <input type="text" placeholder="Search subscription..." />

      <div className="profile">
        <span>👤</span>
      </div>
    </div>
  );
}

export default Navbar;