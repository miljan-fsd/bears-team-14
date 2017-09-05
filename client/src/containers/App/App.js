import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import api from '../../api';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Main from '../../components/Main';
import TempSettings from '../../components/TempSettings';

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

  applyToJob = id => {
    console.log('App.js - Applying to', id);
  };

  saveJob = id => {
    console.log('App.js - Save', id);
  };

  toggleAdmin = e => {
    const isAdmin = e.target.checked;
    this.setState(() => ({
      isAdmin,
    }));
  };

  render() {
    return (
      <Router>
        <div className="app-wrapper">
          <TempSettings toggleAdmin={this.toggleAdmin} />
          <Header isAdmin={this.state.isAdmin} />
          <Main
            {...this.state}
            createNewJob={this.createNewJob}
            deleteItem={this.deleteItem}
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
