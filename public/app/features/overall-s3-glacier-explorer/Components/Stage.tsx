import React, { Component } from 'react';

import CustomDashboardLoader from 'app/features/custom-dashboard-loader';

interface LocalProps {
  dashId: string
};

class Stage extends Component<LocalProps> {
  constructor(props: LocalProps) {
    super(props);
    this.state = {};
  }

  render() {
    return <>
      {
        this.props.dashId ?
          <div className="dashboard-panels-container">
            <CustomDashboardLoader uid={this.props.dashId} slug="new-dashboard" />
          </div> :
          <div className="dashboard-loads">Please wait till dashboard loads...</div>
      }
    </>
  }
}

export default Stage;
