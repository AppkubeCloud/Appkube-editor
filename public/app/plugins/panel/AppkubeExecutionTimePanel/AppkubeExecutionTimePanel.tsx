import React, { PureComponent } from 'react';

import { PanelProps } from '@grafana/data';
import './css/style.css';

import ErrorImg from './img/error.svg';

const data = [{"FunctionName":"List-Org-Github","ResponseTime":69.33500000000001,"Duration":69.33500000000001},{"FunctionName":"List-Org-Github","ResponseTime":75.67,"Duration":75.67},{"FunctionName":"List-Org-Github","ResponseTime":72.98,"Duration":72.98},{"FunctionName":"List-Org-Github","ResponseTime":157097.03,"Duration":157097.03},{"FunctionName":"List-Org-Github","ResponseTime":399649.38,"Duration":399649.38},{"FunctionName":"List-Org-Github","ResponseTime":405867.88,"Duration":405867.88},{"FunctionName":"List-Org-Github","ResponseTime":437.28,"Duration":437.28},{"FunctionName":"List-Org-Github","ResponseTime":407.06,"Duration":407.06},{"FunctionName":"List-Org-Github","ResponseTime":413.76,"Duration":413.76},{"FunctionName":"List-Org-Github","ResponseTime":455.46,"Duration":455.46},{"FunctionName":"List-Org-Github","ResponseTime":418.16,"Duration":418.16},{"FunctionName":"List-Org-Github","ResponseTime":599160.48,"Duration":599160.48},{"FunctionName":"List-Org-Github","ResponseTime":3046.755,"Duration":3046.755},{"FunctionName":"List-Org-Github","ResponseTime":453.7,"Duration":453.7},{"FunctionName":"List-Org-Github","ResponseTime":432.25,"Duration":432.25},{"FunctionName":"List-Org-Github","ResponseTime":217.395,"Duration":217.395}];

class AppkubeExecutionTimePanel extends PureComponent<PanelProps> {

  renderFrames = (series: any) => {
    const retData: any = [];
    for (let i = 0; i < series.length; i++) {
      const iSer = series[i];
      let cardJSX: any = [];
      if (iSer && iSer.meta && iSer.meta.custom && iSer.meta.custom) {
        const { query, data, error } = iSer.meta.custom;
        if (query.queryString === 'cpu_utilization_panel') {
          if (error) {
            cardJSX = this.renderError();
          } else {
            if (data) {
              cardJSX = this.renderData(JSON.parse(data));
            } else {
              cardJSX = this.renderError();
            }
          }
      }
    } else {
        cardJSX = this.renderError();
      }
      retData.push(cardJSX);
    }
    return retData;
  };

  renderData = (data: any) => {
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

  renderError = () => {
    return (
      <div className="utilization-card">
        <div className="error-message-box">
          <span className="icon">
            <img src={ErrorImg} alt="" width="48" height="48" />
          </span>
          <span className="name">{'There is some error'}</span>
        </div>
      </div>
    );
  };

  generateEqualDistanceNumbers = (maxValue: number) => {
    const stepSize = Math.ceil(maxValue / 10); // Calculate step size based on maxValue
    const numbers = [];
    for (let i = stepSize; i <= maxValue; i += stepSize) {
      numbers.push(i);
    }
    return numbers;
  }

  renderDummyData = () => {
    const tableRowJSX: JSX.Element[] = [];
    const tableHeadMsJSX: JSX.Element[] = [];
    let max = 0;
    data.map((item, index) => {
      if(Number(item.ResponseTime) > max) {
        max = Math.ceil(item.ResponseTime / 1000) * 1000;
      };
      tableRowJSX.push(
        <tr key={index}>
            <td>
                <div className="table-details">{item.FunctionName}</div>
              </td>
              <td>
                <div className="table-details">{item.Duration}</div>
              </td>
              <td>
                <div className="table-details">{Math.ceil(item.ResponseTime / 500) * 500}ms</div>
              </td>
              <td>
              <div 
              className={`line ${(100 * item.ResponseTime) / max > 75 ? 'red' : 'green'}`}
              style={{ width: `${(100 * item.ResponseTime) / max}%` }}
              ></div>
          </td>
        </tr>
      )
    });
    const msArray: number[] = this.generateEqualDistanceNumbers(max);
    msArray.map((item) => {
      tableHeadMsJSX.push(
        <div className="table-header ms-text">{item}ms</div>
      )
    })
    const JSX: JSX.Element[] = [
      <div className="execution-time-table-panel" key="0">
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
                  {tableHeadMsJSX}
                </th>
              </tr>
            </thead>
            <tbody>
              {tableRowJSX}
            </tbody>
          </table>
        </div>
      </div>
    ];
    return JSX;
  }

  render() {
    // const { data } = this.props;
    // if (data && data.series && data.series.length > 0) {
    //   const { series } = data;
    //   return this.renderFrames(series)
    // } else {
    //   return <div>No data available</div>;
    // }
    if(data.length) {
      return this.renderDummyData()
    } else {
      return <div>No Data Available!</div>
    }
  }
}

export default AppkubeExecutionTimePanel;
