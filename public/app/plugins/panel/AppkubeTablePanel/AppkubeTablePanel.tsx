import React, { PureComponent } from 'react';

import { PanelProps } from '@grafana/data';
import './css/style.css';

class AppkubeTablePanel extends PureComponent<PanelProps> {

  renderTable = (series: any) => {
    const data = JSON.parse(series[0].meta.custom.data);
    const tableBodyJSX: any[] = [];
    if (data.length > 0) {
      const keys = Object.keys(data[0]);
      const headJSX = keys.map((key) => {
        return (
          <th>
            <div className="table-header">{key}</div>
          </th>
        );
      });
      data.forEach((tableRow: any) => {
        const rows = keys.map((key) => {
          return (
            <td>
              <div className="table-details">{tableRow[key]}</div>
            </td>
          );
        });
        tableBodyJSX.push(
          <tr>
            {rows}
          </tr>
        )
      });
      return (
        <div className="notifications-table-panel">
          <div className="notifications-panel-heading">
            <span className="d-block title">{this.props.options.panelTitle}</span>
            <button>Filter</button>
          </div>
          <p className="subtitle">{this.props.options.panelDescription}</p>
          <div className="common-table">
            <table cellPadding={0} cellSpacing={0}>
              <thead>
                <tr>
                  {headJSX}
                </tr>
              </thead>
              <tbody>
                {tableBodyJSX}
              </tbody>
            </table>
          </div>
        </div>
      );
    } else {
      return <div style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>There is some error!</div>
    }

  }

  render() {
    const { data } = this.props;
    if (data && data.error) {
      return <div style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>{data?.error?.message}</div>;
    } else if (data && data.series && data.series[0].meta?.custom?.data) {
      const { series } = data;
      return this.renderTable(series);
    } else {
      return <div style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>No data available</div>;
    }
  }
}

export default AppkubeTablePanel;
