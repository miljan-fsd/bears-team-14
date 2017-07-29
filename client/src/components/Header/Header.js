import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

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
              <Link className="navbar-item" to="/">
                <img src="http://via.placeholder.com/185x80" alt="Logo" />
              </Link>

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
                <Link className="navbar-item" to="/jobs">
                  Explore Jobs
                </Link>
              </div>
              <div className="navbar-end">
                <Link className="navbar-item" to="/login">
                  Log in
                </Link>

                <Link className="navbar-item" to="/join">
                  Join
                </Link>

                <Link className="navbar-item" to="/hiring">
                  For the Employers
                </Link>
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
