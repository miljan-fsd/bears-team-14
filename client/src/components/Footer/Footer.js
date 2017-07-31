import React, { Component } from 'react';

import './style.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="columns">
          <div className="column">
            <aside className="menu">
              <p className="menu-label">
                <strong>For Talent</strong>
              </p>
              <ul className="menu-list">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/jobs">Explore Jobs</a>
                </li>
                <li>
                  <a href="/join">Join Jobbatical</a>
                </li>
              </ul>
            </aside>
          </div>

          <div className="column">
            <aside className="menu">
              <p className="menu-label">
                <strong>For Business</strong>
              </p>
              <ul className="menu-list">
                <li>
                  <a href="/">What we offer</a>
                </li>
                <li>
                  <a href="/">Pricing</a>
                </li>
                <li>
                  <a href="/">Customers</a>
                </li>
              </ul>
            </aside>
          </div>

          <div className="column">
            <aside className="menu">
              <p className="menu-label">
                <strong>Jobbatical</strong>
              </p>
              <ul className="menu-list">
                <li>
                  <a href="/">Our story & People</a>
                </li>
                <li>
                  <a href="/">Support</a>
                </li>
                <li>
                  <a href="/">Join the Team</a>
                </li>
                <li>
                  <a href="/">Blog</a>
                </li>
              </ul>
            </aside>
          </div>

          <div className="column">
            <aside className="menu">
              <p className="menu-label">
                <strong>Follow Us</strong>
              </p>
              <ul className="menu-list">
                <li>
                  <a href="/">Facebook</a>
                </li>
                <li>
                  <a href="/">Twitter</a>
                </li>
                <li>
                  <a href="/">LinkedIn</a>
                </li>
                <li>
                  <a href="/">Google+</a>
                </li>
                <li>
                  <a href="/">Instagram</a>
                </li>
              </ul>
            </aside>
          </div>
        </div>

        <div className="columns">
          <div className="column is-two-thirds">
            <p className="address">
              &copy; Jobbatical OÜ Niine 11, 10414, Tallinn, Estonia &nbsp;
              <a className="has-text-black" href="mailto:hello@jobbatical.com">
                hello@jobbatical.com
              </a>
            </p>
          </div>

          <div className="column">
            <a className="has-text-dark" href="/">
              Terms of service
            </a>
            &nbsp;
            <a className="has-text-dark" href="/">
              Privacy policy
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
