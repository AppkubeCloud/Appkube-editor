import React, { PureComponent } from 'react';

import { PanelProps } from '@grafana/data';

import './css/style.css';

class AppkubeTopBackendErrorsPanel extends PureComponent<PanelProps> {
  render() {
    return (
      <div className="top-backend-errors-panel">
        <div className="top-backend-errors-panel-inner">
          <div className="header">
            <div className="heading">
              <div className="threat-calls-box">
                <div className="icon">
                  <span>
                    <p>
                      {'56'}
                      <sub>%</sub>
                    </p>
                  </span>
                  <div className="percent purple">
                    <svg>
                      <circle cx="28" cy="28" r="26"></circle>
                      <circle cx="28" cy="28" r="26" style={{ '--percent': '15' } as React.CSSProperties}></circle>
                    </svg>
                  </div>
                </div>
                <div className="contents">
                  <div className="name">Top Backend Errors</div>
                  <div className="price up">
                    <strong>43,833</strong>
                    <span>10%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="buttons">
              <button className="icon">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADNSURBVHgB7ZThDcIgEIWfxv92BNzAERjBDXQEN2g3KU7gCNZJiht0Az3iIQ0Ch7/tS760wONxSa8Af6eVsK6JA7Hl8YMwhOVxT9x5rihF3Ihnhp49/l0MG2dmHVVseG2sDfQbuoKni6r9aBMZNXHk0C5aa4jzbDzxHKRApwu+5Ta3EBQHKn4OCa8ldon5qRQoyUqGdeY0DVmKOBH7kkmjshUQukFJRt/QpQ/Q/nCw2NhXhMZWqJQzGuR/PRfapDbWXA4aoRKLd0sNWOT1As99PToFwXcPAAAAAElFTkSuQmCC"
                  alt=""
                />
              </button>
              <button className="icon">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADjSURBVHgB1VPRDYJADK3EARihbsIIjHAjsIG4gRvQDcQJZBMdwQ20l7SmXAp3xh95yUtK3+vjjjsA/h07UyMzJDoxH0mv1Ac985UwHYzoHF+vYgU+RuZB3pziLNrkDXqB0dgyj7CMqDXM64rns2WUlcV6cHyDaCTe2ZYtotiZZy/UhimCzBaBJKA2qyH4EWjqOmeuII/nN4E56DdDCVs6KBdxKDhhZHrkhHawcCi9WY0X5oUirFwbDbxA/jQ19FYSqEZcCUTz4qJ/uWHeYX7RFUG01hvcm5ocfXR6E/OU9Ag2gzffWkrwdvUaogAAAABJRU5ErkJggg=="
                  alt=""
                />
              </button>
            </div>
          </div>
          <div className="common-table">
            <table cellPadding={0} cellSpacing={0}>
              <thead>
                <tr>
                  <th>
                    <div className="table-header">Error message</div>
                  </th>
                  <th>
                    <div className="table-header">Error name</div>
                  </th>
                  <th>
                    <div className="table-header">Error Code</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="table-details">Data base authentication in valid</div>
                  </td>
                  <td>
                    <div className="table-details">Invalid Target</div>
                  </td>
                  <td>
                    <div className="table-details">510</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="table-details">Data base authentication in valid</div>
                  </td>
                  <td>
                    <div className="table-details">Target Connection Error</div>
                  </td>
                  <td>
                    <div className="table-details">510</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="table-details">Data base authentication in valid</div>
                  </td>
                  <td>
                    <div className="table-details">Target Timeout</div>
                  </td>
                  <td>
                    <div className="table-details">520</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="table-details">Data base authentication in valid</div>
                  </td>
                  <td>
                    <div className="table-details">Health Unavailable</div>
                  </td>
                  <td>
                    <div className="table-details">505</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="table-details">Data base authentication in valid</div>
                  </td>
                  <td>
                    <div className="table-details">Invalid Configuration Rrequest</div>
                  </td>
                  <td>
                    <div className="table-details">500</div>
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

export default AppkubeTopBackendErrorsPanel;
