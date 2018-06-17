import React, { Component } from "react";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";

import MenuLink from "components/MenuLink";

import data from "data";

class Menu extends Component {
  render() {
    const { menus } = data;

    return (
      <Navbar inverse collapseOnSelect fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand">React-Bootstrap</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            {menus.map((menu) => (
              menu.isgroup === "1" ? (
                <NavDropdown id={`dropdown-$(menu.key)`} title={menu.itemname} key={menu.key}>
                  {menu.menuitems.map((menuitem) => (
                    <MenuItem
                      componentClass={MenuLink}
                      key={menuitem.key}
                      item={menuitem}
                    />
                  ))}
                </NavDropdown>
              ) : (
                <MenuItem
                  componentClass={MenuLink}
                  key={menu.key}
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
