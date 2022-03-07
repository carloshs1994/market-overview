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
        : (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <MdArrowBackIos style={{ marginLeft: '1rem', fontSize: '1.5rem' }} />
            <p>Back</p>
          </div>
        ))}
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
