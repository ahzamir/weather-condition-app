import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaMicrophone } from 'react-icons/fa';
import { AiOutlineSetting } from 'react-icons/ai';
import { IoChevronBackOutline } from 'react-icons/io5';

const Navbar = () => (
  <header className="primary-bg w-100">
    <nav>
      <ul className="d-flex justify-content-between align-items-center w-100 list-style-none p-2">
        <li className="d-flex align-items-center justify-content-between">
          <NavLink exact="true" to="/">
            <IoChevronBackOutline className="text-white fs-5 me-2 fw-bold" />
          </NavLink>
          <NavLink exact="true" to="/" className="text-white fs-5 fw-bold text-decoration-none">
            Home
          </NavLink>
        </li>
        <li className="d-flex align-items-center justify-content-between">
          <FaMicrophone className="text-white fs-5 me-2 fw-bold" />
          <AiOutlineSetting className="text-white fs-5 fw-bold" />
        </li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
