import React, { Component } from 'react';
import { Router, Switch } from "react-router";
import createBrowserHistory from "history/createBrowserHistory";

import logo from './logo.svg';
import './App.css';
import Menu from "./components/Menu";

import "bootstrap/dist/css/bootstrap.min.css";

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="App">
          <Menu />
          <Switch>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
