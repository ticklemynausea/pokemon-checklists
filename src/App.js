import React, { Component } from 'react';
import { Router, Route, Switch } from "react-router";
import createBrowserHistory from "history/createBrowserHistory";

import './App.css';
import Menu from "./components/Menu";

import Page from "./components/Page";
import NotFound from "./components/NotFound";

import data from "./data";

import "bootstrap/dist/css/bootstrap.min.css";

const history = createBrowserHistory();

class App extends Component {
  render() {
    const { routes, pages } = data;
    console.log(pages);

    return (
      <Router history={history}>
        <div className="App">
          <Menu />
          <Switch>
            {routes.map((menu) => (
              menu.isgroup === "1" ? (
                menu.menuitems.map((menuitem) => (
                  <Route
                    key={menuitem.key}
                    exact
                    path={menuitem.link}
                    component={() => (<Page page={menuitem} checklist={pages[menuitem.key]} />)}
                  />
                ))
              ) : (
                <Route
                  key={menu.key}
                  exact
                  path={menu.link}
                  component={() => (
                    <Page page={menu} />
                  )}
                />
              )
            ))}
            <Route exact path="*" component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
