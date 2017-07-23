import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: '',
    };
  }

  async componentDidMount() {
    const json = await fetch('/api/test/').then(res => res.json());
    this.setState(() => ({
      data: json.data,
    }));
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Data from server: {this.state.data}
        </p>
      </div>
    );
  }
}

export default App;
