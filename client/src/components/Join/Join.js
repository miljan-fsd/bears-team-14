import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './style.css';

class Join extends Component {
  render() {
    return (
      <div className="join">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="columns">
              <div className="column is-one-third">
                <h2 className="title">Join the adventure on Jobbatical!</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Sequi natus aliquam, voluptatum iure pariatur vero.
                </p>

                <div className="has-text-centered">
                  <img
                    src="http://via.placeholder.com/180x265"
                    alt="Jobbatical-Dude"
                  />
                </div>
              </div>

              <div className="column is-two-thirds">
                <div className="box">
                  <div className="field has-addons">
                    <a
                      href="https://web.facebook.com"
                      className="button is-large is-fullwidth facebook-btn"
                    >
                      <span className="icon is-medium">
                        <i className="fa fa-facebook-square" />
                      </span>
                      <span>Sign up with Facebook</span>
                    </a>
                  </div>
                  <div className="field has-addons">
                    <a
                      href="https://google.com"
                      className="button is-large is-fullwidth google-btn"
                    >
                      <span className="icon is-medium">
                        <i className="fa fa-google" />
                      </span>
                      <span>Sign up with Google</span>
                    </a>
                  </div>
                  <div className="divider line">OR</div>
                  <form action="#">
                    <div className="columns">
                      <div className="column">
                        <div className="field">
                          <label className="label" htmlFor="fname">
                            First Name
                          </label>
                          <div className="control has-icons-left">
                            <input
                              className="input is-large"
                              type="text"
                              placeholder="first name"
                              name="fname"
                            />
                            <span className="icon is-medium is-left">
                              <i className="fa fa-user" />
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="column">
                        <div className="field">
                          <label className="label" htmlFor="lname">
                            Last name
                          </label>
                          <div className="control has-icons-left">
                            <input
                              className="input is-large"
                              type="tex"
                              placeholder="last name"
                              name="lname"
                            />
                            <span className="icon is-medium is-left">
                              <i className="fa fa-user" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="field">
                      <label className="label" htmlFor="email">
                        Your Email
                      </label>
                      <div className="control has-icons-left">
                        <input
                          className="input is-large"
                          type="email"
                          placeholder="name@example.com"
                          name="email"
                        />
                        <span className="icon is-medium is-left">
                          <i className="fa fa-envelope" />
                        </span>
                      </div>
                    </div>

                    <div className="field">
                      <label className="label" htmlFor="password">
                        Password
                      </label>
                      <div className="control has-icons-left">
                        <input
                          className="input is-large"
                          type="password"
                          placeholder="password"
                          name="password"
                        />
                        <span className="icon is-medium is-left">
                          <i className="fa fa-lock" />
                        </span>
                      </div>
                    </div>

                    <div className="columns sign-up">
                      <div className="column is-size-12">
                        By signing up, you agree to Jobbatical’s{' '}
                        <Link to="/">Terms of Service</Link> and{' '}
                        <Link to="/">Privacy Policy</Link>.
                      </div>
                      <div className="column">
                        <div className="field has-addons">
                          <button
                            type="submit"
                            className="button is-fullwidth is-large is-primary"
                          >
                            <span>SIGN UP</span>
                            <span className="icon is-medium">
                              <i className="fa fa-sign-in" />
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                  <hr />
                  <div className="is-size-12">
                    Already have an account?{' '}
                    <Link to="/login">Log in here!</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Join;
