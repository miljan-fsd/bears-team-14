import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import api from '../../fakeApi';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Main from '../../components/Main';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.getItems();
  }

  async getItems() {
    let json = [];
    try {
      json = await api.getItems();
      this.setState(() => ({
        data: json.data,
      }));
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    return (
      <Router>
        <div className="app-wrapper">
          <Header />
          <Main data={this.state.data} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
