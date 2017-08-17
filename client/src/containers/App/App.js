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
    };
  }

  componentDidMount() {
    this.getItems();
  }

  async getItems() {
    try {
      const data = await api.getItems();
      const featured = data
        .filter(item => item.isFeatured)
        .slice(0, maxFeatured);

      this.setState(() => ({
        data,
        featured,
        loading: false,
      }));
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    const { data, featured, loading } = this.state;
    return (
      <Router>
        <div className="app-wrapper">
          <Header />
          <Main data={data} featured={featured} loading={loading} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
