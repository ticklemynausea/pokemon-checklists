import React, { Component } from 'react';
import { Router, Route, Switch } from "react-router";
import createBrowserHistory from "history/createBrowserHistory";

import Menu from "components/Menu";
import ChecklistPage from "./components/ChecklistPage";
import Page from "components/Page";
import NotFound from "components/NotFound";

import data from "data";

import Store from "Store";

import "bootstrap/dist/css/bootstrap.min.css";
import 'styles/fonts.css';
import 'styles/legacy.css';
import 'styles/checklists.scss';

const history = createBrowserHistory();

class App extends Component {
  render() {
    const { routes, pages } = data;

    return (
      <Store>
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
                      component={() => (
                        <ChecklistPage
                          page={menuitem}
                          checklist={pages[menuitem.key]}
                        />)}
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
      </Store>
    );
  }
}

export default App;
