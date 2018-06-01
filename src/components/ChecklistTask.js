import React, { Component } from 'react';
import PropTypes from "prop-types";
import { ListGroup, ListGroupItem } from "react-bootstrap";

import ChecklistItem from "./ChecklistItem";

class ChecklistTask extends Component {
  static propTypes = {
    task: PropTypes.object.isRequired,
  };

  render() {
    const {
      task,
    } = this.props;

    return (<ListGroup bsClass="list-group checklist-task">
      <ListGroupItem>
        <h4 className="my-list-group-item-heading">
          <ChecklistItem item={task} />
        </h4>
      </ListGroupItem>
      {task.subtasks && (<ListGroupItem>
        <ListGroup bsClass="my-list-group">
          {task.subtasks.map((subtask) => (<ListGroupItem bsClass="my-list-group-item" key={subtask.id}>
            <ChecklistItem item={subtask} />
          </ListGroupItem>))}
        </ListGroup>
      </ListGroupItem>)}
    </ListGroup>);
  }
}

export default ChecklistTask;
