import React, { PureComponent } from 'react';
import { PanelProps } from '@grafana/data';
import './css/style.css';

class AppkubeMessagesTablePanel extends PureComponent<PanelProps> {
  render() {
    return (
      <div className="messages-table-panel">
        <div className="messages-panel-heading">
          <span className="d-block title">Top Warnings Messages</span>
        </div>
        <div className="common-table">
          <table cellPadding={0} cellSpacing={0}>
            <thead>
              <tr>
                <th>
                  <div className="table-header">Warnings Message</div>
                </th>
                <th>
                  <div className="table-header">FunctionName</div>
                </th>
                <th>
                  <div className="table-header">VERSION</div>
                </th>
                <th>
                  <div className="table-header">FREQUENCY</div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="table-details">January</div>
                </td>
                <td>
                  <div className="table-details">8,430</div>
                </td>
                <td>
                  <div className="table-details">3,210</div>
                </td>
                <td>
                  <div className="table-details">10%</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="table-details">January</div>
                </td>
                <td>
                  <div className="table-details">8,430</div>
                </td>
                <td>
                  <div className="table-details">3,210</div>
                </td>
                <td>
                  <div className="table-details">10%</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="table-details">February</div>
                </td>
                <td>
                  <div className="table-details">12,543</div>
                </td>
                <td>
                  <div className="table-details">1,879</div>
                </td>
                <td>
                  <div className="table-details">23%</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="table-details">February</div>
                </td>
                <td>
                  <div className="table-details">12,543</div>
                </td>
                <td>
                  <div className="table-details">1,879</div>
                </td>
                <td>
                  <div className="table-details">23%</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="table-details">February</div>
                </td>
                <td>
                  <div className="table-details">12,543</div>
                </td>
                <td>
                  <div className="table-details">1,879</div>
                </td>
                <td>
                  <div className="table-details">23%</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="table-details">February</div>
                </td>
                <td>
                  <div className="table-details">12,543</div>
                </td>
                <td>
                  <div className="table-details">1,879</div>
                </td>
                <td>
                  <div className="table-details">23%</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="table-details">February</div>
                </td>
                <td>
                  <div className="table-details">12,543</div>
                </td>
                <td>
                  <div className="table-details">1,879</div>
                </td>
                <td>
                  <div className="table-details">23%</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default AppkubeMessagesTablePanel;
