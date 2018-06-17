import React, { Component } from 'react';
import PropTypes from "prop-types";

import JSONViewer from "components/JSONViewer";

class Page extends Component {
  static propTypes = {
    page: PropTypes.object.isRequired,
  };

  render() {
    const { page } = this.props;

    return (<div className="postgame container-fluid">
      <div id="row1" className="row">
        <div className="pageTitle col-sm-12 col-xs-12">
          {page.itemname}
        </div>
      </div>
      <div>
        <JSONViewer content={page} />
      </div>
    </div>);
  }
}

export default Page;
