import React, { Component } from "react";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import { Link } from "react-router-dom";

import MenuLink from "./MenuLink";

import { menus } from "../data/menu.json";

const safeid = (key, name) => `key-${name.replace(/ /g, "_")}`;

class Menu extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand">React-Bootstrap</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            {menus.map((menu) => (console.log(menu),
              menu.isgroup === "1" ? (
                <NavDropdown id={safeid("dropdown", menu.itemname)} title={menu.itemname} key={menu.itemname}>
                  {menu.menuitems.map((menuitem) => (
                    <MenuItem
                      componentClass={MenuLink}
                      key={menuitem.link}
                      item={menuitem}
                    />
                  ))}
                </NavDropdown>
              ) : (
                <MenuItem
                  componentClass={MenuLink}
                  key={menu.link}
                  item={menu}
                />
              )
            ))}
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={2} href="#">
              Link Right
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Menu;
