import React, { PureComponent } from 'react';

import { PanelProps } from '@grafana/data';

import './css/style.css';

class AppkubeApiServersTablePanel extends PureComponent<PanelProps> {
  render() {
    return (
      <div className="api-servers-table-panel">
        <div className="api-servers-panel-heading">
          <span className="d-block title">API Servers</span>
        </div>
        <div className="common-table">
          <table cellPadding={0} cellSpacing={0}>
            <thead>
              <tr>
                <th>
                  <div className="table-header">server Id</div>
                </th>
                <th>
                  <div className="table-header">Server name</div>
                </th>
                <th>
                  <div className="table-header">HEALTH</div>
                </th>
                <th>
                  <div className="table-header">Request(s) Per Minute</div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="table-details">api-gateway-09</div>
                </td>
                <td>
                  <div className="table-details">api-gateway</div>
                </td>
                <td>
                  <div className="table-details">Healthy</div>
                </td>
                <td>
                  <div className="table-details">120</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="table-details">api-server-10</div>
                </td>
                <td>
                  <div className="table-details">api-server</div>
                </td>
                <td>
                  <div className="table-details">Healthy</div>
                </td>
                <td>
                  <div className="table-details">80</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="table-details">api-proxy-11</div>
                </td>
                <td>
                  <div className="table-details">api-proxy</div>
                </td>
                <td>
                  <div className="table-details">Unhealthy</div>
                </td>
                <td>
                  <div className="table-details">20</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="table-details">api-endpoint-001</div>
                </td>
                <td>
                  <div className="table-details">api-endpoint</div>
                </td>
                <td>
                  <div className="table-details">Unhealthy</div>
                </td>
                <td>
                  <div className="table-details">50</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="table-details">api-router-78</div>
                </td>
                <td>
                  <div className="table-details">api-router</div>
                </td>
                <td>
                  <div className="table-details">Healthy</div>
                </td>
                <td>
                  <div className="table-details">119</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="table-details">api-controller-13</div>
                </td>
                <td>
                  <div className="table-details">api-controller</div>
                </td>
                <td>
                  <div className="table-details">Healthy</div>
                </td>
                <td>
                  <div className="table-details">67</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default AppkubeApiServersTablePanel;
