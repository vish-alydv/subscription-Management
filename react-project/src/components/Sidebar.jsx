import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>SubCash</h2>

      <ul>
        <li>Dashboard</li>
        <li>Subscriptions</li>
        <li>Payments</li>
        <li>Calendar</li>
        <li>Settings</li>
      </ul>
    </div>
  );
}

export default Sidebar;