import React, { PureComponent } from "react";
import { Link } from 'react-router-dom';
import "./Navbar.scss";

class NavbarComponent extends PureComponent {
  render() {
    return (
      <div className="navbar">
        <div className="navbar-logo">
          <h2 className="navbar-logo">GrandCoffee</h2>
        </div>
        <ul className="navbar-list">
          <Link to="/" className="navbar-list-link">Home </Link>
          <Link to="/About" className="navbar-list-link">About Us</Link>
          <Link to="/Gallery" className="navbar-list-link">Gallery</Link>
          <Link to="/Service" className="navbar-list-link">Services</Link>
          <Link to="/Contact" className="navbar-list-link">Contact Us</Link>
        </ul>
        <input
          className="navbar-search"
          type="text"
          placeholder="search Your Coffee"
        />
      </div>
    );
  }
}

export default NavbarComponent;
