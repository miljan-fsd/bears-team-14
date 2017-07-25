import React, { Component } from 'react';
import './App.css';
import api from './fakeApi';

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
    const { data } = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome</h2>
        </div>
        <div className="App-intro">
          {!!data.length
            ? data.map((item, i) =>
                <div key={item.id}>
                  <p>
                    <strong>
                      {item.companyName}
                    </strong>
                    {' - '}
                    <span>
                      {item.info.title}
                    </span>
                  </p>
                </div>
              )
            : <div>Loading...</div>}
        </div>
      </div>
    );
  }
}

export default App;
