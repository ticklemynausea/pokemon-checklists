import React, { Component } from 'react';
import PropTypes from "prop-types";
import { ListGroup, ListGroupItem } from "react-bootstrap";

import ChecklistItem from "components/ChecklistItem";

import "./style.scss"

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
      <div className={`ChecklistTask ChecklistTask_${task.id}`}>
        <ListGroup bsClass="list">
          <ListGroupItem>
            <h4 className="list-item-heading">
              <ChecklistItem
                page={page}
                task={task}
                item={task}
              />
            </h4>
          </ListGroupItem>
          {task.subtasks && (<ListGroupItem>
            <ListGroup bsClass="list list-flex">
              {task.subtasks.map((subtask) => (<ListGroupItem bsClass="list-item" key={subtask.id}>
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
