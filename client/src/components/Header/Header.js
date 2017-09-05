import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './style.css';

class Header extends Component {
  render() {
    const { isAdmin } = this.props;
    return (
      <div>
        <div className="navbar">
          <div className="navbar-brand">
            <NavLink to="/">
              <img src="http://via.placeholder.com/185x80" alt="Logo" />
            </NavLink>

            <div className="navbar-burger burger" data-target="mainNavigation">
              <span />
              <span />
              <span />
            </div>
          </div>

          <div id="mainNavigation" className="navbar-menu">
            <div className="navbar-start">
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
            </div>
            <div className="navbar-end">
              <NavLink
                activeClassName="selected"
                className="navbar-item"
                to="/login"
              >
                Log in
              </NavLink>

              <NavLink
                activeClassName="selected"
                className="navbar-item"
                to="/join"
              >
                Join
              </NavLink>

              <NavLink
                activeClassName="selected"
                className="navbar-item"
                to="/hiring"
              >
                For the Employers
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
