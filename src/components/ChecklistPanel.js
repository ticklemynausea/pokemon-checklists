import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Panel, Grid, Row, Col } from "react-bootstrap";

import ChecklistTask from "./ChecklistTask";

class ChecklistPanel extends Component {
  static propTypes = {
    category: PropTypes.object.isRequired,
    panels: PropTypes.array.isRequired,
  };

  render() {
    const {
      category,
      panels,
    } = this.props;

    return (
      <Panel>
        <Panel.Heading>
          <Panel.Title componentClass="h3">
            {category.name}
          </Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <Grid>
            <Row>
              <Col>
                {panels.map((panel) => (
                  <ChecklistTask key={panel.id} task={panel} />
                ))}
              </Col>
            </Row>
          </Grid>
        </Panel.Body>
      </Panel>
    );
  }
}

export default ChecklistPanel;
