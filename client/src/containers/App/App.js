import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
// import api from '../../fakeApi';
import api from '../../api';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Main from '../../components/Main';

const maxFeatured = 9;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      featured: [],
      loading: true,
      busy: false,
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
      const res = await api.deleteItem(id);
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
      const res = await api.updateItem(id, data);
      this.getItems();
    } catch (e) {
      console.error(e);
    }
  };

  render() {
    return (
      <Router>
        <div className="app-wrapper">
          <Header />
          <Main
            {...this.state}
            deleteItem={this.deleteItem}
            updateItem={this.updateItem}
          />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
