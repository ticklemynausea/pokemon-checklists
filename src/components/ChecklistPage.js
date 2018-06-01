import React, { Component } from 'react';
import PropTypes from "prop-types";

import ChecklistPanel from "./ChecklistPanel";

class ChecklistPage extends Component {
  static propTypes = {
    page: PropTypes.object.isRequired,
    checklist: PropTypes.any.isRequired,
  };

  render() {
    const { page, checklist } = this.props;

    return (<div className="postgame container-fluid">
      <div id="row1" className="row">
        <div className="pageTitle col-sm-12 col-xs-12">
          {page.itemname}
        </div>
      </div>
      <div>
        {checklist.map(
          ([category, panels]) => (<ChecklistPanel key={category.key} category={category} panels={panels} />)
        )}
      </div>
    </div>);
  }
}

export default ChecklistPage;
