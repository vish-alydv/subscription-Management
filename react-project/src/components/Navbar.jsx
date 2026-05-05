import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="search-box">
        <span>Search</span>
        <input type="text" placeholder="Search subscription..." />
      </div>

      <div className="profile">
        <span>SK</span>
      </div>
    </div>
  );
}

export default Navbar;
