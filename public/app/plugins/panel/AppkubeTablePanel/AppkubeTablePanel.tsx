import React, { PureComponent } from 'react';

import { PanelProps } from '@grafana/data';
import './css/style.css';

class AppkubeTablePanel extends PureComponent<PanelProps> {
  render() {
    return (
      <div className="notifications-table-panel">
        <div className="notifications-panel-heading">
          <span className="d-block title">Alerts and Notifications</span>
          <button>Filter</button>
        </div>
        <p className="subtitle">
          {`'A list of recent alerts and notifications related to the instance's availability'`}
        </p>
        <div className="common-table">
          <table cellPadding={0} cellSpacing={0}>
            <thead>
              <tr>
                <th>
                  <div className="table-header">Timestamp</div>
                </th>
                <th>
                  <div className="table-header">Alert</div>
                </th>
                <th>
                  <div className="table-header">Description</div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="table-details">2023-11-06 09:45 AM</div>
                </td>
                <td>
                  <div className="table-details">Instance was stopped and then started</div>
                </td>
                <td>
                  <div className="table-details">Instance was stopped and then started. No issues detected.</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="table-details">2023-11-08 9:30 AM</div>
                </td>
                <td>
                  <div className="table-details">High CPU Utilization (Threshold: 90%) for 5 minutes</div>
                </td>
                <td>
                  <div className="table-details">Instance performance may be impacted</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="table-details">2023-11-10 11:30 AM</div>
                </td>
                <td>
                  <div className="table-details">Disk Space Running Low (Threshold: 10 GB)</div>
                </td>
                <td>
                  <div className="table-details">Consider cleaning up or expanding storage</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default AppkubeTablePanel;
