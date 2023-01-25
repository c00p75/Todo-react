import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navBar.css';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';

const links = [
  {
    id: 1,
    path: '/',
    text: 'Home',
  },
  {
    id: 2,
    path: '/about',
    text: 'About',
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const closeMenu = () => {
    setNavbarOpen(false);
  };

  return (
    <nav className="navBar">
      <button id="hamburger" onClick={handleToggle} type="button">
        {navbarOpen ? (
          <MdClose style={{ width: '40px', height: '30px' }} />
        ) : (
          <FiMenu style={{ width: '40px', height: '30px' }} />
        )}
      </button>
      <ul className={`menuNav ${navbarOpen ? 'showMenu' : ''}`}>
        {links.map((link) => (
          <li key={link.id}>
            <NavLink to={link.path} exact="true" onClick={() => closeMenu()}>
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
