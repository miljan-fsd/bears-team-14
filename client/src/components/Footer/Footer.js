import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/jobs">Explore Jobs</Link>
                </li>
                <li>
                  <Link to="/join">Join Jobbatical</Link>
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
                  <Link to="/">What we offer</Link>
                </li>
                <li>
                  <Link to="/">Pricing</Link>
                </li>
                <li>
                  <Link to="/">Customers</Link>
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
                  <Link to="/">Our story & People</Link>
                </li>
                <li>
                  <Link to="/">Support</Link>
                </li>
                <li>
                  <Link to="/">Join the Team</Link>
                </li>
                <li>
                  <Link to="/">Blog</Link>
                </li>
              </ul>
            </aside>
          </div>

          <div className="column">
            <aside className="menu">
              <p className="menu-label">
                <strong>Follow Us</strong>
              </p>
              <ul className="menu-list social">
                <li>
                  <Link className="is-clearfix" to="/">
                    Facebook
                    <i
                      className="fa fa-facebook-square facebook is-pulled-right"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
                <li>
                  <Link className="is-clearfix" to="/">
                    Twitter
                    <i
                      className="fa fa-twitter-square twitter is-pulled-right"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
                <li>
                  <Link className="is-clearfix" to="/">
                    LinkedIn
                    <i
                      className="fa fa-linkedin-square linkedin is-pulled-right"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
                <li>
                  <Link className="is-clearfix" to="/">
                    Google+
                    <i
                      className="fa fa-google-plus-square google-plus is-pulled-right"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
                <li>
                  <Link className="is-clearfix" to="/">
                    Instagram
                    <i
                      className="fa fa-instagram instagram is-pulled-right"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              </ul>
            </aside>
          </div>
        </div>

        <div className="columns">
          <div className="column is-two-thirds">
            <p className="address">
              &copy; Jobbatical OÜ Niine 11, 10414, Tallinn, Estonia &nbsp;
              <Link className="has-text-black" to="mailto:hello@jobbatical.com">
                hello@jobbatical.com
              </Link>
            </p>
          </div>

          <div className="column">
            <Link className="has-text-dark" to="/">
              Terms of service
            </Link>
            &nbsp;
            <Link className="has-text-dark" to="/">
              Privacy policy
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
