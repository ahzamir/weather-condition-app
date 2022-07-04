import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/weatherinfo',
      text: 'Wheather Info',
    },
  ];
  return (
    <header>
      <nav className="navBar">
        <ul className="pageLinksSection">
          {links.map((link) => (
            <li key={link.id}>
              <NavLink exact="true" to={link.path} className="pageLink">
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
