import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <NavLink
      to="/"
      style={({ isActive }) => (isActive
        ? { textDecoration: 'underline' }
        : { textDecoration: 'none' })}
    >
      Home
    </NavLink>
    <NavLink
      to="/Details"
      style={({ isActive }) => (isActive
        ? { textDecoration: 'underline' }
        : { textDecoration: 'none' })}
    >
      Details
    </NavLink>
  </header>
);

export default Header;
