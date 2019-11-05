import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import axiosWithAuth from "../utils/api"
import PrivateRoute from "./PrivateRoute"
import Login from "./Login"
import FriendsList from "./FriendsList"
import Home from "./Home"

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Route
          path='/'
          exact
          render={() => (
            <Home />
          )}
        />
        <Route
          path='/login'
          render={props => (
            <Login {...props} />
          )}
        />
      <PrivateRoute
          path="/protected"
          exact
          component={FriendsList}
        />
      </div>
    )
  }

}
