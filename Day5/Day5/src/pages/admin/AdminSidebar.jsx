// AdminSidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/AdminSidebar.css';
import logo from "../../assets/images/logo.jpg";

const AdminSidebar = ({ onDashboardClick }) => {
  return (
    <div className="admin-sidebar">
        <div className='brandlogo'>
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="brand-name">CRAFTIFY</h1>
        </div>
      <div className="profile-picture">
        {/* Your profile picture component goes here */}
        <img src="profile-picture.jpg" alt="Profile" />
      </div>
      <ul>
        <li>
          <a href="/project6/admin/Dashboard" onClick={onDashboardClick}>
            Dashboard
          </a>
        </li>
        <li>
          <Link to="/admin/feedbacks">Feedbacks</Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
