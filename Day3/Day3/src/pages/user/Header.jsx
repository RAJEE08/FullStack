import React, { useState } from 'react';
import "../../assets/css/Header.css";
import { CgProfile } from "react-icons/cg";
import logo from "../../assets/images/logo.jpg";
import pplogo from "../../assets/images/pplogo.png";
import { RiCloseCircleLine } from "react-icons/ri";


function Header() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [showAccountPopup, setShowAccountPopup] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const toggleAccountPopup = () => {
    setShowAccountPopup(!showAccountPopup);
  };

  return (
    <header>
      <nav>
        <ul>
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="brand-name"><a href="/project6/user/home">CRAFTIFY</a></h1>
          <div className='list'>
            <li><a href="/wishlist">Wishlist</a></li>
            <li><a href="/project6/user/Contacts">Contact</a></li>
            <li className="profile" onClick={toggleDropdown}><CgProfile /></li>
          </div>
        </ul>
      </nav>
      {dropdownVisible && (
        <div className="dropdown-menu">
          <ul>
            <li><a  onClick={toggleAccountPopup}>Account</a></li>
            <li><a href="/orders">Orders</a></li>
            <li><a href="/project6/login">Logout</a></li>
          </ul>
        </div>
      )}
      {showAccountPopup && (
        <div className="popup">
          <button id="cls" onClick={toggleAccountPopup}><RiCloseCircleLine /></button>
          <div className="profile-info">
            <img src={pplogo} alt="Profile" className="profile-picture" />
            <div className="user-info">
              <p>Username</p>
              <p>Email</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
