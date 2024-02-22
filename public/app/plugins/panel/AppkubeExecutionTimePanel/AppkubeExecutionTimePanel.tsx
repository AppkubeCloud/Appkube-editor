import React, { PureComponent } from 'react';
import { PanelProps } from '@grafana/data';
import './css/style.css';

class AppkubeExecutionTimePanel extends PureComponent<PanelProps> {
  render() {
    return (
      <div className="execution-time-table-panel">
        <div className="heading">Execution TIme</div>
        <div className="common-table">
          <table cellPadding={0} cellSpacing={0}>
            <thead>
              <tr>
                <th>
                  <div className="table-header">Name</div>
                </th>
                <th>
                  <div className="table-header">Response time</div>
                </th>
                <th>
                  <div className="table-header">Duration</div>
                </th>
                <th>
                  <div className="table-header ms-text">0.0ms</div>
                  <div className="table-header ms-text">25ms</div>
                  <div className="table-header ms-text">50ms</div>
                  <div className="table-header ms-text">75ms</div>
                  <div className="table-header ms-text">100ms</div>
                  <div className="table-header ms-text">125ms</div>
                  <div className="table-header ms-text">150ms</div>
                  <div className="table-header ms-text">175ms</div>
                  <div className="table-header ms-text">200ms</div>
                  <div className="table-header ms-text">225ms</div>
                  <div className="table-header ms-text">250ms</div>
                  <div className="table-header ms-text">275ms</div>
                  <div className="table-header ms-text">300ms</div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="table-details">Test-dev-hello</div>
                </td>
                <td>
                  <div className="table-details">200</div>
                </td>
                <td>
                  <div className="table-details">250ms</div>
                </td>
                <td>
                  <div className="line green" style={{ width: '80%' }}></div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="table-details">Test-dev-hello</div>
                </td>
                <td>
                  <div className="table-details">200</div>
                </td>
                <td>
                  <div className="table-details">250ms</div>
                </td>
                <td>
                  <div className="line green" style={{ width: '75%' }}></div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="table-details">Test-dev-hello</div>
                </td>
                <td>
                  <div className="table-details">200</div>
                </td>
                <td>
                  <div className="table-details">250ms</div>
                </td>
                <td>
                  <div className="line green" style={{ width: '70%' }}></div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="table-details">Test-dev-hello</div>
                </td>
                <td>
                  <div className="table-details">200</div>
                </td>
                <td>
                  <div className="table-details">250ms</div>
                </td>
                <td>
                  <div className="line green" style={{ width: '77%' }}></div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="table-details">Test-dev-hello</div>
                </td>
                <td>
                  <div className="table-details">200</div>
                </td>
                <td>
                  <div className="table-details">250ms</div>
                </td>
                <td>
                  <div className="line red" style={{ width: '90%' }}></div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="table-details">Test-dev-hello</div>
                </td>
                <td>
                  <div className="table-details">200</div>
                </td>
                <td>
                  <div className="table-details">250ms</div>
                </td>
                <td>
                  <div className="line green" style={{ width: '60%' }}></div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="table-details">Test-dev-hello</div>
                </td>
                <td>
                  <div className="table-details">200</div>
                </td>
                <td>
                  <div className="table-details">250ms</div>
                </td>
                <td>
                  <div className="line green" style={{ width: '65%' }}></div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="table-details">Test-dev-hello</div>
                </td>
                <td>
                  <div className="table-details">200</div>
                </td>
                <td>
                  <div className="table-details">250ms</div>
                </td>
                <td>
                  <div className="line green" style={{ width: '60%' }}></div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="table-details">Test-dev-hello</div>
                </td>
                <td>
                  <div className="table-details">200</div>
                </td>
                <td>
                  <div className="table-details">250ms</div>
                </td>
                <td>
                  <div className="line red" style={{ width: '85%' }}></div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="table-details">Test-dev-hello</div>
                </td>
                <td>
                  <div className="table-details">200</div>
                </td>
                <td>
                  <div className="table-details">250ms</div>
                </td>
                <td>
                  <div className="line green" style={{ width: '60%' }}></div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="table-details">Test-dev-hello</div>
                </td>
                <td>
                  <div className="table-details">200</div>
                </td>
                <td>
                  <div className="table-details">250ms</div>
                </td>
                <td>
                  <div className="line green" style={{ width: '70%' }}></div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="table-details">Test-dev-hello</div>
                </td>
                <td>
                  <div className="table-details">200</div>
                </td>
                <td>
                  <div className="table-details">250ms</div>
                </td>
                <td>
                  <div className="line red" style={{ width: '60%' }}></div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="table-details">Test-dev-hello</div>
                </td>
                <td>
                  <div className="table-details">200</div>
                </td>
                <td>
                  <div className="table-details">250ms</div>
                </td>
                <td>
                  <div className="line green" style={{ width: '70%' }}></div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default AppkubeExecutionTimePanel;
