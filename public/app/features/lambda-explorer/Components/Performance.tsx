import React, { Component } from 'react';

import CustomDashboardLoader from 'app/features/custom-dashboard-loader';

class Performance extends Component {
  constructor(props: Record<string, string>) {
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

export default Performance;
