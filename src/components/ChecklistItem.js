import React, { Component } from 'react';
import PropTypes from "prop-types";

import { Tooltip, OverlayTrigger } from "react-bootstrap";

class ChecklistItem extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
  };

  render() {
    const { item } = this.props;
    const tooltip = (<Tooltip id={item.key}>
      {item.tooltip}
    </Tooltip>);

    return (<div>
      <label>
        <input type="checkbox" />
        {item.task}
      </label>
      {item.tooltip && (<div className="tooltip-container">
        <OverlayTrigger overlay={tooltip} placement="top">
        <div className="tooltip-trigger" />
      </OverlayTrigger>
      </div>)}
    </div>);
  }
}

export default ChecklistItem;
