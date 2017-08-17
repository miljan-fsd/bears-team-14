import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
// import api from '../../fakeApi';
import api from '../../api';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Main from '../../components/Main';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      featured: [],
    };
  }

  componentDidMount() {
    this.getItems();
  }

  async getItems() {
    try {
      const data = await api.getItems();
      const featured = data.filter(item => item.isFeatured);
      this.setState(() => ({
        data,
        featured,
      }));
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    const { data, featured } = this.state;
    return (
      <Router>
        <div className="app-wrapper">
          <Header />
          <Main data={data} featured={featured} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
