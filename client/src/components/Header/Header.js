import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.css';

const Header = props => {
  const { isAdmin, loggedIn } = props;
  return (
    <div>
      <div className="navbar">
        <div className="navbar-brand">
          <NavLink to="/">
            <img src="http://via.placeholder.com/185x80" alt="Logo" />
          </NavLink>
          <NavLink
            activeClassName="selected"
            className="navbar-item"
            to="/jobs"
          >
            Explore Jobs
          </NavLink>
          {isAdmin && (
            <NavLink
              activeClassName="selected"
              className="navbar-item"
              to="/admin"
            >
              Admin Panel
            </NavLink>
          )}
          {!loggedIn && (
            <NavLink
              activeClassName="selected"
              className="navbar-item"
              to="/login"
            >
              Log in
            </NavLink>
          )}
          {!loggedIn && (
            <NavLink
              activeClassName="selected"
              className="navbar-item"
              to="/join"
            >
              Join
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
