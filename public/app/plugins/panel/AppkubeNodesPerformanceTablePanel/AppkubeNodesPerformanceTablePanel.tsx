import React, { PureComponent } from 'react';
import { PanelProps } from '@grafana/data';
import './css/style.css';

class AppkubeNodesPerformanceTablePanel extends PureComponent<PanelProps> {
  render() {
    return (
      <div className="nodes-performance-table-panel">
        <div className="nodes-performance-panel-heading">
          <span className="d-block title">Nodes Performance</span>
        </div>
        <div className="search-box">
          <button>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHJSURBVHgBrZRNUsJAEIW7J4nr3MC4VbT0BOIJwDVCyAmEExBOIJwg/MhaPAHeQArUrXgD9gnT9kwAgwQhVb6qVCaZ6W+6J6+DsENB8GoDWA4A2fGbaOx5V3PYI9wGTfOGiQ0CyKesHksJba+S6+wFckaOYVqBBhHMiYOJ4JmnVFa2QHkJJK45wgHEmUS69Uq5cSpQwYR1NAIihx/bMgr9XeUF/akvABtqIyng5jdUA7uP758aJqnpuuc+7FHQm1QFikBDo/AkubkIem9VDeMSD4EpeZWLjgRq6qMQZi05JwykghrIkOqQRVHUigl4vwEkQGe5YgwZtCxTxdiDwcfxGshfzE4syCSMHbAhgUQzNVD+g4xiW13ybV4qnX6tgYvYa2BY6GZggf6YCDb7dZh8L2ARdtjIM96temiW2rdCexEoDJsbQHV27HpPP5j4xDvX/oZN86sm4OxaHD9Lzv+0Xn9SFCQe1q3FJoeFOt8oDjCsvIHgbvR4SgviVimm4XPPFtT5pGXIwBeKwjqYZnHVgry25t7lulvABNjmAP4ZIF/L3xdnw+c9TNprWVWgNme4Xy6fNVOBWaSrMqyRGstFeAX/IQVVlxp/A0qC0j4rq2aSAAAAAElFTkSuQmCC"
              alt=""
            />
          </button>
          <input type="text" className="search-input" placeholder="Search pod" />
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

export default AppkubeNodesPerformanceTablePanel;
