import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.css';

import api from '../../api';

import { Logo, ProfileLink, Wrapper } from './styled';

const Header = props => {
  const { history, isAdmin, loggedIn, username } = props;

  const handleLogout = e => {
    e.preventDefault();
    api.logoutUser().then(() => {
      props.logoutUser();
      history && history.push('/');
    });
  };

  return (
    <Wrapper>
      <NavLink to="/">
        <Logo imgUrl="/logo.png">
          <p>
            Chingu<br />Voyage-1
          </p>
        </Logo>
      </NavLink>
      <NavLink activeClassName="selected" className="navbar-item" to="/jobs">
        Explore Jobs
      </NavLink>
      {isAdmin && (
        <NavLink activeClassName="selected" className="navbar-item" to="/admin">
          Admin Panel
        </NavLink>
      )}
      {!loggedIn && (
        <NavLink activeClassName="selected" className="navbar-item" to="/login">
          Log in
        </NavLink>
      )}
      {!loggedIn && (
        <NavLink activeClassName="selected" className="navbar-item" to="/join">
          Join
        </NavLink>
      )}
      {loggedIn && (
        <NavLink
          activeClassName="selected"
          className="navbar-item"
          to="/bookmarks"
        >
          My saved jobs
        </NavLink>
      )}
      {loggedIn && <ProfileLink>Hello {username}!</ProfileLink>}
      {loggedIn && <a onClick={handleLogout}>Logout</a>}
    </Wrapper>
  );
};

export default Header;
