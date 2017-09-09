import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import api from '../../api';

import './style.css';
import Flash from '../Flash';

class Login extends Component {
  state = {
    errorStatus: '',
  };
  userLogin = e => {
    e.preventDefault();

    const username = this.username.value;
    const password = this.password.value;

    api
      .loginUser(username, password)
      .then(json => {
        if (json.error) return json.error;
        this.props.handleLogin(username, (json.isAdmin = false));
      })
      .then(error => {
        this.password.value = '';
        this.setState(
          () => ({
            errorStatus:
              error.status === 401
                ? 'Incorrect username and/or password'
                : 'Error',
          }),
          () =>
            setTimeout(() => {
              this.setState(() => ({
                errorStatus: '',
              }));
            }, 3000)
        );
      })
      .catch(err => console.log('Login error:', err));
  };

  componentDidMount() {
    if (this.props.loggedIn) {
      this.props.history.replace('/');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.replace(`/`);
    }
  }

  render() {
    const { errorStatus } = this.state;

    return (
      <div className="login">
        {errorStatus && <Flash danger>{errorStatus}</Flash>}
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <div className="head-field has-text-centered">
              <h2 className="is-size-4">Log in to Jobbatical</h2>
            </div>
            <div className="box">
              <div className="field has-addons">
                <a
                  href="https://web.facebook.com"
                  className="button is-large is-fullwidth facebook-btn"
                >
                  <span className="icon is-medium">
                    <i className="fa fa-facebook-square" />
                  </span>
                  <span>Log in with Facebook</span>
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
                  <span>Log in with Google</span>
                </a>
              </div>

              <div className="field has-addons">
                <a
                  href="https://www.linkedin.com"
                  className="button is-large is-fullwidth linkedin-btn"
                >
                  <span className="icon is-medium">
                    <i className="fa fa-linkedin-square" />
                  </span>
                  <span>Log in with LinkedIn</span>
                </a>
              </div>

              <div className="divider line">OR</div>

              <form onSubmit={this.userLogin}>
                <div className="field">
                  <label className="label" htmlFor="text">
                    Username
                  </label>
                  <div className="control has-icons-left">
                    <input
                      autoFocus
                      className="input is-large"
                      type="text"
                      placeholder="username"
                      name="username"
                      ref={el => (this.username = el)}
                      required
                    />
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
                      ref={el => (this.password = el)}
                      required
                    />
                    <span className="icon is-medium is-left">
                      <i className="fa fa-lock" />
                    </span>
                  </div>
                </div>

                <div className="field has-addons">
                  <button
                    type="submit"
                    className="button is-fullwidth is-large is-primary"
                  >
                    <span>LOG IN</span>
                    <span className="icon is-medium">
                      <i className="fa fa-sign-in" />
                    </span>
                  </button>
                </div>
              </form>
              <hr />
              <div className="columns">
                <div className="column">
                  <Link className="is-size-10" to="/forgot-password">
                    Forgot password?
                  </Link>
                </div>
                <div className="column">
                  <Link className="is-size-10" to="/support">
                    Need other help?
                  </Link>
                </div>
                <div className="column">
                  <Link className="is-size-10" to="join">
                    Sugn up here
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
