import React, { Component } from 'react';
import PropTypes from "prop-types";

import { Consumer } from "Store";

class ChecklistItem extends Component {
  static propTypes = {
    page: PropTypes.object.isRequired,
    task: PropTypes.object.isRequired,
    item: PropTypes.object.isRequired,
  };

  render() {
    const {
      page,
      task,
      item,
    } = this.props;

    const key = `${page.key}_${task && task.id}_${item.id}`;

    return (
      <Consumer>
        {({ setValue, hasValue }) => (
          <div>
            <label>
              <input
                type="checkbox"
                checked={hasValue(key)}
                onChange={({ target }) => setValue(key, target.checked)}
              />
              {item.task}
            </label>
            {item.tooltip && (<div className="tooltip-container">
              <div className="tooltip-trigger" title={item.tooltip} />
            </div>)}
          </div>
        )}
      </Consumer>
    );
  }
}

export default ChecklistItem;
