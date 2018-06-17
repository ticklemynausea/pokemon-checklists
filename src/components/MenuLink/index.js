import React, { Component } from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import { MenuItem } from "react-bootstrap";

const Anchor = ({ href, target, children }) => (
  <a href={href} target={target}>
    {children}
  </a>
);

class MenuLink extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
  }

  renderExternalLink() {
    const { link, itemname } = this.props.item;

    return (
      <MenuItem componentClass={Anchor} href={link} target="_blank">
         {itemname}
      </MenuItem>
    );
  }

  renderLink() {
    const { link, itemname } = this.props.item;

    return (
      <MenuItem componentClass={Link} href={link} to={link} onSelect={this.onSelect}>
        {itemname}
      </MenuItem>
    );
  }

  onSelect = () => {
    // This is an ugly hack to have the dropdown menu close upon
    // a click on a link. I'd rather have this than have to
    // manage menu state
    document.body.click()
  }

  render() {
    const { link } = this.props.item;

    return link.startsWith("http") ?
      this.renderExternalLink() :
      this.renderLink();
  }
}

export default MenuLink;
