import React from 'react';
import { Route } from 'react-router-dom';

import './style.css';

import Home from '../Home';
import ItemDetails from '../ItemDetails';
import Jobs from '../Jobs';
import Login from '../Login';
import Join from '../Join';
import Hiring from '../Hiring';

const Main = props =>
  <div>
    <Route exact path="/" render={() => <Home data={props.data} />} />
    <Route path="/job/:id" component={ItemDetails} />
    <Route path="/jobs" component={Jobs} />
    <Route path="/login" component={Login} />
    <Route path="/join" component={Join} />
    <Route path="/hiring" component={Hiring} />
  </div>;

export default Main;
