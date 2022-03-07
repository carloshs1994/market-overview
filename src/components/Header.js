import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaMicrophone } from 'react-icons/fa';
import { RiSettings5Fill } from 'react-icons/ri';
import { MdArrowBackIos } from 'react-icons/md';

const Header = () => (
  <header>
    <NavLink to="/">
      {({ isActive }) => (isActive
        ? (
          <p>
            <span>M</span>
            arket
            <br />
            <span style={{ marginLeft: '1rem' }}>O</span>
            verview
          </p>
        )
        : <MdArrowBackIos style={{ marginLeft: '1rem' }} />)}
    </NavLink>
    <nav>
      <NavLink
        to="/VoiceSearch"
        style={({ isActive }) => (isActive
          ? { textDecoration: 'underline' }
          : { textDecoration: 'none' })}
      >
        <FaMicrophone />
      </NavLink>
      <NavLink
        className="settings-icon"
        to="/Settings"
        style={({ isActive }) => (isActive
          ? { textDecoration: 'underline' }
          : { textDecoration: 'none' })}
      >
        <RiSettings5Fill />
      </NavLink>
    </nav>
  </header>
);

export default Header;
