import React from "react";
import {Link, NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    // <div className="container">
      <nav className="navbar navbar-expand-xxl navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            User Profile
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/"className="nav-link " exact aria-current="page" >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/about' className="nav-link" >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/contact' className="nav-link" >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <Link to='/users/add' className="btn btn-outline-light">Add User</Link>
        </div>
       
      </nav>
    // </div>
  );
};

export default Navbar;
