import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class MenuLink extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
  }

  render() {
    const { link, itemname } = this.props.item;

    return (
      <Link to={link}>
        {itemname}
      </Link>
   );
  }
}

export default MenuLink;
