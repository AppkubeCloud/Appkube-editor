import React, { PureComponent } from 'react';

import { PanelProps } from '@grafana/data';

import './css/style.css';

class AppkubeInstanceStatusPanel extends PureComponent<PanelProps> {
  render() {
    return (
      <div className="instance-panel">
        <div className="instance-panel-heading">
          <span className="title">Instance Status</span>
          <button>Filter</button>
        </div>
        <p className="subtitle">
          {`'Check the overall health of the EC2 instance, including its status (e.g., running, topped) and any system-level issues'`}
        </p>
        <div className="instance-panel-contents">
          <div className="instance-panel-left width-50 d-flex align-items-center">
            <div className="progress-bar">
              <svg>
                <circle cx="60" cy="60" r="46"></circle>
                <circle cx="60" cy="60" r="49"></circle>
              </svg>
              <div className="bar-chart ">
                <span className="low"></span>
                <span className="medium"></span>
                <span className="high"></span>
              </div>
              <div className="number">
                <h4>
                  70<sup className="percantage"> %</sup>
                </h4>
              </div>
            </div>
            <div className="running-status">
              <span className="d-block">Instance Status</span>
              <div className="d-flex align-items-center">
                <span className="run">Running</span>
                <div className="d-flex align-items-center">
                  <i className="fa-solid fa-caret-up"></i>
                  <span className="d-block percantage">10%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="instance-panel-right">
            <div className="right-contents">
              <div className="instance-name">
                <span className="d-block info">Instance ID</span>
                <span className="d-block info">Instance Type</span>
                <span className="d-block info">Availability Zone</span>
                <span className="d-block info">System Checks</span>
                <span className="d-block info">Custom Alerts</span>
              </div>
              <div className="instance-number">
                <span className="d-block details">i-1234</span>
                <span className="d-block details">t2.micro</span>
                <span className="d-block details">us-east-1a</span>
                <span className="d-block details">Passed</span>
                <span className="d-block details">No Alerts</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AppkubeInstanceStatusPanel;
