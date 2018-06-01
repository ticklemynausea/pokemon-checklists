import React, { Component } from 'react';
import PropTypes from "prop-types";

import JSONViewer from "./JSONViewer";

class Page extends Component {
  static propTypes = {
    page: PropTypes.object.isRequired,
    checklist: PropTypes.array,
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
        <JSONViewer content={page} />
        <JSONViewer content={checklist} />
      </div>
    </div>);
  }
}

export default Page;
