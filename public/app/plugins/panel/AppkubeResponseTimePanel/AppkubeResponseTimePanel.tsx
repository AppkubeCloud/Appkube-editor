import React, { PureComponent } from 'react';
import { PanelProps } from '@grafana/data';
import './css/style.css';

class AppkubeResponseTimePanel extends PureComponent<PanelProps> {
  render() {
    return (
      <div className="response-time-table-panel">
        <div className="response-time-panel-heading">
          <span className="d-block title">Response Time</span>
        </div>
        <div className="common-table">
          <table cellPadding={0} cellSpacing={0}>
            <thead>
              <tr>
                <th>
                  <div className="table-header">Service name</div>
                </th>
                <th>
                  <div className="table-header">Time</div>
                </th>
                <th>
                  <div className="table-header">LABLE</div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="table-details">Service 1</div>
                </td>
                <td>
                  <div className="table-details">0.2ms</div>
                </td>
                <td>
                  <div className="lable-box green">Fast</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="table-details">Service 2</div>
                </td>
                <td>
                  <div className="table-details">1.5ms</div>
                </td>
                <td>
                  <div className="lable-box red">Slow</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="table-details">Service 3</div>
                </td>
                <td>
                  <div className="table-details">0.4ms</div>
                </td>
                <td>
                  <div className="lable-box blue">Avg</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="table-details">Service 4</div>
                </td>
                <td>
                  <div className="table-details">0.2ms</div>
                </td>
                <td>
                  <div className="lable-box green">Fast</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="table-details">Service 5</div>
                </td>
                <td>
                  <div className="table-details">0.2ms</div>
                </td>
                <td>
                  <div className="lable-box green">Fast</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default AppkubeResponseTimePanel;
