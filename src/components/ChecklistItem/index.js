import React, { Component } from 'react';
import PropTypes from "prop-types";
import classnames from "classnames";

import { Consumer } from "Store";

import "./style.scss"

const PokeIcon = ({ name, form }) => (
  <span className={classnames({
    pkspr: true,
    [`pkmn-${name}`]: name,
    [`form-${form}`]: form
  })} />
);

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
          <div className={`ChecklistItem ChecklistItem_${key} ${this.props.className}`}>
            <label>

              {item.pkmn && (<PokeIcon name={item.pkmn.pkmn.toLowerCase()} form={item.pkmn.form} />)}

              <input
                type="checkbox"
                checked={hasValue(key)}
                onChange={({ target }) => setValue(key, target.checked)}
              />
              {item.task}
            </label>

            {item.tooltip && (
              <div className="tooltip-container">
                <div className="tooltip-trigger" title={item.tooltip} />
              </div>
            )}

          </div>
        )}
      </Consumer>
    );
  }
}

export default ChecklistItem;
