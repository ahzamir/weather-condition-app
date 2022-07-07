import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaMicrophone } from 'react-icons/fa';
import { AiOutlineSetting } from 'react-icons/ai';
import { IoChevronBackOutline } from 'react-icons/io5';

const Navbar = () => (
  <header className="padding">
    <nav>
      <ul>
        <li className="navLinks">
          <NavLink exact="true" to="/">
            <IoChevronBackOutline className="backIcon" />
          </NavLink>
          <NavLink exact="true" to="/" className="navlink">
            Home
          </NavLink>
        </li>
        <li className="icons">
          <FaMicrophone className="microphone" />
          <AiOutlineSetting className="settings" />
        </li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
