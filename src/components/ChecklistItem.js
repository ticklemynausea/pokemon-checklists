import React, { Component } from 'react';
import PropTypes from "prop-types";

class ChecklistItem extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
  };

  render() {
    const { item } = this.props;

    return (<div>
      <label>
        <input type="checkbox" />
        {item.task}
      </label>
      {item.tooltip && (<div className="tooltip-container">
        <div className="tooltip-trigger" title={item.tooltip} />
      </div>)}
    </div>);
  }
}

export default ChecklistItem;
