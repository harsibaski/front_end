import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo from "../Assests/Logo.png";
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="website-name">Bookaholic</div>
      <ul className="nav-links">
        <li>
          <Link to="/h">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        
        <li>
          <Link to="/upload">Upload</Link>
        </li>
        
        
        
      </ul>
      <Outlet />
    </nav>
  );
};

export default Navbar;
