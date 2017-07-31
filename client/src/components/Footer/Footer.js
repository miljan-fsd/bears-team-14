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
              <ul className="menu-list social">
                <li>
                  <a className="is-clearfix" href="/">
                    Facebook
                    <i
                      className="fa fa-facebook-square facebook is-pulled-right"
                      aria-hidden="true"
                    />
                  </a>
                </li>
                <li>
                  <a className="is-clearfix" href="/">
                    Twitter
                    <i
                      className="fa fa-twitter-square twitter is-pulled-right"
                      aria-hidden="true"
                    />
                  </a>
                </li>
                <li>
                  <a className="is-clearfix" href="/">
                    LinkedIn
                    <i
                      className="fa fa-linkedin-square linkedin is-pulled-right"
                      aria-hidden="true"
                    />
                  </a>
                </li>
                <li>
                  <a className="is-clearfix" href="/">
                    Google+
                    <i
                      className="fa fa-google-plus-square google-plus is-pulled-right"
                      aria-hidden="true"
                    />
                  </a>
                </li>
                <li>
                  <a className="is-clearfix" href="/">
                    Instagram
                    <i
                      className="fa fa-instagram instagram is-pulled-right"
                      aria-hidden="true"
                    />
                  </a>
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
