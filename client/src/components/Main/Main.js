import React from 'react';
import { Route } from 'react-router-dom';

import './style.css';

import AdminPanel from '../AdminPanel';
import Home from '../Home';
import ItemDetails from '../ItemDetails';
import Jobs from '../Jobs';
import Login from '../Login';
import Join from '../Join';
import Hiring from '../Hiring';

class Main extends React.Component {
  render() {
    const { data, featured, ...rest } = this.props;

    return (
      <div className="main-wrapper">
        <Route
          exact
          path="/"
          render={props =>
            <Home {...props} data={featured} total={data.length} />}
        />
        <Route
          path="/admin"
          render={props =>
            <AdminPanel
              {...props}
              {...rest}
              featured={featured}
              data={data}
              total={data.length}
            />}
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
