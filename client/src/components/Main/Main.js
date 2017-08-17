import React from 'react';
import { Route } from 'react-router-dom';

import './style.css';

import Home from '../Home';
import ItemDetails from '../ItemDetails';
import Jobs from '../Jobs';
import Login from '../Login';
import Join from '../Join';
import Hiring from '../Hiring';

class Main extends React.Component {
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  render() {
    const { data, featured } = this.props;

    return (
      <div className="main-wrapper">
        <Route
          exact
          path="/"
          render={props => <Home {...props} data={featured} />}
        />
        <Route path="/job/:id" component={ItemDetails} />
        <Route path="/jobs" render={props => <Jobs {...props} data={data} />} />
        <Route path="/login" component={Login} />
        <Route path="/join" component={Join} />
        <Route path="/hiring" component={Hiring} />
      </div>
    );
  }
}

export default Main;
