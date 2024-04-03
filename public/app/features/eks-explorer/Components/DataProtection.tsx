import React, { Component } from 'react';

import CustomDashboardLoader from 'app/features/custom-dashboard-loader';

class DataProtection extends Component {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="dashboard-panels-container">
        <CustomDashboardLoader uid={'OvHGEgJSk'} slug="new-dashboard" />
      </div>
    );
  }
}

export default DataProtection;
