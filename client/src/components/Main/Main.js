import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import './style.css';

import AdminPanel from '../AdminPanel';
import Bookmarks from '../Bookmarks';
import Home from '../Home';
import ItemDetails from '../ItemDetails';
import Jobs from '../Jobs';
import Login from '../Login';
import Join from '../Join';
import Hiring from '../Hiring';

import UpdateJob from '../UpdateJob';

class Main extends React.Component {
  render() {
    const { data, featured, ...rest } = this.props;

    return (
      <div className="main-wrapper">
        <Route
          exact
          path="/"
          render={props => (
            <Home {...props} {...rest} data={featured} total={data.length} />
          )}
        />
        <Route
          path="/admin"
          render={props => (
            <AdminPanel
              {...props}
              {...rest}
              featured={featured}
              data={data}
              total={data.length}
            />
          )}
        />
        <Route
          path="/job/:id"
          render={props => <ItemDetails {...props} {...rest} data={data} />}
        />
        <Route
          path="/jobs"
          render={props => <Jobs {...props} {...rest} data={data} />}
        />
        <Route path="/login" render={props => <Login {...props} {...rest} />} />
        <Route path="/join" render={props => <Join {...props} {...rest} />} />
        <Route path="/hiring" component={Hiring} />
        <Route
          path="/add"
          render={props => <UpdateJob {...props} {...rest} />}
        />
        <Route
          path="/edit/:id"
          render={props => (
            <UpdateJob {...props} {...rest} data={data} editMode />
          )}
        />
        <Route
          path="/bookmarks"
          render={props =>
            rest.loggedIn ? (
              <Bookmarks {...props} {...rest} data={data} />
            ) : (
              <Redirect to="/" />
            )}
        />
      </div>
    );
  }
}

export default Main;
