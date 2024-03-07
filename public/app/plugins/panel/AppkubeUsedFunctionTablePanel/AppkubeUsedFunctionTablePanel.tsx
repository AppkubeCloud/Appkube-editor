import React, { PureComponent } from 'react';

import { PanelProps } from '@grafana/data';

import './css/style.css';

class AppkubeUsedFunctionTablePanel extends PureComponent<PanelProps> {
  render() {
    return (
      <div className="used-function-table-panel">
        <div className="used-function-table-inner-panel">
          <div className="d-block heading">Top Used Function</div>
          <div className="common-table">
            <table cellPadding={0} cellSpacing={0}>
              <thead>
                <tr>
                  <th>
                    <div className="table-header">Function Name</div>
                  </th>
                  <th>
                    <div className="table-header">Count</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="table-details">January</div>
                  </td>
                  <td>
                    <div className="table-details">3,210</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="table-details">January</div>
                  </td>
                  <td>
                    <div className="table-details">3,210</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="table-details">January</div>
                  </td>
                  <td>
                    <div className="table-details">3,210</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="table-details">January</div>
                  </td>
                  <td>
                    <div className="table-details">3,210</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="table-details">January</div>
                  </td>
                  <td>
                    <div className="table-details">3,210</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="table-details">January</div>
                  </td>
                  <td>
                    <div className="table-details">3,210</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="table-details">January</div>
                  </td>
                  <td>
                    <div className="table-details">3,210</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default AppkubeUsedFunctionTablePanel;
