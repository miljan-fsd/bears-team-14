import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import './style.css';

import Home from '../Home';
import Jobs from '../Jobs';
import Login from '../Login';
import Join from '../Join';
import Hiring from '../Hiring';

class Header extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="navbar">
            <div className="navbar-brand">
              <NavLink to="/">
                <img src="http://via.placeholder.com/185x80" alt="Logo" />
              </NavLink>

              <div
                className="navbar-burger burger"
                data-target="mainNavigation"
              >
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

          <Route exact path="/" component={Home} />
          <Route path="/jobs" component={Jobs} />
          <Route path="/login" component={Login} />
          <Route path="/join" component={Join} />
          <Route path="/hiring" component={Hiring} />
        </div>
      </Router>
    );
  }
}

export default Header;
