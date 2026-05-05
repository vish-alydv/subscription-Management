import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>SubCash</h2>

      <ul>
        <li>
          <NavLink to="/">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/subscriptions">Subscriptions</NavLink>
        </li>
        <li>
          <span>Payments</span>
        </li>
        <li>
          <span>Calendar</span>
        </li>
        <li>
          <span>Settings</span>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
