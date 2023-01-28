import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoChevronBackOutline } from 'react-icons/io5';

const Navbar = () => (
  <header className="w-100">
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="d-flex justify-content-between align-items-center w-100 list-style-none p-3 p-md-3">
        <div className="d-flex align-items-center justify-content-between">
          <NavLink exact="true" to="/">
            <IoChevronBackOutline className="text-white fs-5 me-2 fw-bold" />
          </NavLink>
          <NavLink exact="true" to="/" className="text-white fs-5 fw-bold text-decoration-none">
            Home
          </NavLink>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <h1 className="text-white fs-5 fw-bold">
            World Weather
          </h1>
        </div>
      </div>
    </nav>
  </header>
);

export default Navbar;
