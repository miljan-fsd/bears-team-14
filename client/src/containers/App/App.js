import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import api from '../../api';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Main from '../../components/Main';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      busy: false,
      createdNewId: null,
      data: [],
      featured: [],
      isAdmin: false,
      loading: true,
    };
  }

  componentDidMount() {
    this.getItems();
  }

  getItems = async () => {
    try {
      const data = await api.getItems();
      const featured = data.filter(item => item.isFeatured);

      this.setState(() => ({
        data,
        featured,
        loading: false,
        busy: false,
      }));

      const { username, isAdmin } = await api.checkLogin();
      if (username) this.loginUser(username, isAdmin);
    } catch (e) {
      console.error(e);
    }
  };

  deleteItem = async id => {
    this.setState(() => ({
      busy: true,
    }));
    try {
      await api.deleteItem(id);
      this.getItems();
    } catch (e) {
      console.error(e);
    }
  };

  updateItem = async (id, data) => {
    this.setState(() => ({
      busy: true,
    }));

    try {
      await api.updateItem(id, data);
      this.getItems();
    } catch (e) {
      console.error(e);
    }
  };

  createNewJob = async data => {
    this.setState(() => ({
      busy: true,
    }));

    try {
      const res = await api.createNewJob(data);

      this.setState(() => ({
        createdNewId: res.SUCCESS._id,
      }));

      this.getItems();
    } catch (e) {
      console.error(e);
    }
  };

  getUser = username => {
    api.getUser(username).then(data => {
      this.setState(() => ({
        savedJobs: data.savedJobs,
      }));
    });
  };

  applyToJob = id => {
    console.log('App.js - Applying to', id);
  };

  saveJob = id => {
    if (!this.state.loggedIn) return;
    api.userSaveJob(id).then(() => this.getUser());
  };

  loginUser = (username, isAdmin) => {
    this.setState(
      () => ({
        loggedIn: Boolean(username),
        isAdmin,
        username,
      }),
      () => {
        this.getUser(this.state.username);
      }
    );
  };

  logoutUser = () => {
    this.setState(() => ({
      loggedIn: null,
      isAdmin: null,
      username: null,
    }));
  };

  render() {
    const state = this.state;
    return (
      <Router>
        <div className="app-wrapper">
          <Route
            render={props => (
              <Header {...state} {...props} logoutUser={this.logoutUser} />
            )}
          />
          <Main
            {...this.state}
            createNewJob={this.createNewJob}
            deleteItem={this.deleteItem}
            handleLogin={this.loginUser}
            updateItem={this.updateItem}
            handleApply={this.applyToJob}
            handleSave={this.saveJob}
          />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
