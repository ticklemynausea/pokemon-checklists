import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem, NavDropdown } from "react-bootstrap";

import MenuLink from "components/MenuLink";

import data from "data";

class Menu extends Component {
  render() {
    const { menus } = data;

    return (
      <Navbar inverse collapseOnSelect fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Pokémon Checklists</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            {menus.map((menu) => (
              menu.menuitems ? (
                <NavDropdown id={`dropdown-$(menu.key)`} title={menu.itemname} key={menu.key}>
                  {menu.menuitems.map((menuitem) => (
                    <MenuLink
                      key={menuitem.key}
                      item={menuitem}
                    />
                  ))}
                </NavDropdown>
              ) : (
                <MenuLink
                  key={menu.key}
                  item={menu}
                />
              )
            ))}
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={2} href="#">
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Menu;
