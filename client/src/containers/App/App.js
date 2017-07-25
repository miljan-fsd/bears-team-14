import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import './App.css';
import api from '../../fakeApi';

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
      <Router>
        <Switch>
          <Route path="/about" component={() => <div>About page</div>} />
          <Route exact path="/">
            <div className="App">
              <div className="App-header">
                <h2>Welcome</h2>
                <Link to="/about" style={{ color: 'white' }}>
                  About
                </Link>
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
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    );
  }
}

export default App;
