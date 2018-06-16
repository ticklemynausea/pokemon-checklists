import React, { Component } from 'react';
import PropTypes from "prop-types";
import { ListGroup, ListGroupItem } from "react-bootstrap";

import ChecklistItem from "./ChecklistItem";

class ChecklistTask extends Component {
  static propTypes = {
    page: PropTypes.object.isRequired,
    task: PropTypes.object.isRequired,
  };

  render() {
    const {
      page,
      task,
    } = this.props;

    return (
      <div className={`checklist-task checklist-task-${task.row}-${task.col}`}>
        <ListGroup bsClass="my-list-group">
          <ListGroupItem>
            <h4 className="my-list-group-item-heading">
              <ChecklistItem
                page={page}
                task={task}
                item={task}
              />
            </h4>
          </ListGroupItem>
          {task.subtasks && (<ListGroupItem>
            <ListGroup bsClass="my-list-group my-list-group-flex">
              {task.subtasks.map((subtask) => (<ListGroupItem bsClass="my-list-group-item" key={subtask.id}>
                <ChecklistItem
                  page={page}
                  task={task}
                  item={subtask}
                />
              </ListGroupItem>))}
            </ListGroup>
          </ListGroupItem>)}
        </ListGroup>
      </div>
    );
  }
}

export default ChecklistTask;
