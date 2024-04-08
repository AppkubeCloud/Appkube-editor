import React, { PureComponent } from 'react';

import { PanelProps } from '@grafana/data';
import './css/style.css';

// import dummyData from './data.json'
import ErrorImg from './img/error.svg';

interface Series {
  name: string;
  refId: string;
  meta: {
    custom: {
      data: string;
      error: string;
      query: {
        queryString: string;
      };
    };
  };
}

// interface Data {
//   state: string;
//   series: Series[]
// }

interface DataItem {
  FunctionName: string,
  ResponseTime: number,
  Duration: number
}

// const data: Data = dummyData;

class AppkubeExecutionTimePanel extends PureComponent<PanelProps> {

  renderFrames = (series: Series[]) => {
    const retData: JSX.Element[] = [];
    for (let i = 0; i < series.length; i++) {
      const iSer = series[i];
      let cardJSX: JSX.Element | null = null;
      if (iSer && iSer.meta && iSer.meta.custom) {
        const { query, data, error } = iSer.meta.custom;
        if (query.queryString === 'execution_time_panel') {
          if (error) {
            cardJSX = <>{this.renderError()}</>;
          } else {
            if (data) {
              cardJSX = <>{this.renderData(JSON.parse(data))}</>;
            } else {
              cardJSX = <>{this.renderError()}</>;
            }
          }
        }
      } else {
        cardJSX = this.renderError();
      }
      if (cardJSX) {
        retData.push(cardJSX);
      }
    }
    return retData;
  };

  renderData = (data: DataItem[]) => {
    const tableRowJSX: JSX.Element[] = [];
    const tableHeadMsJSX: JSX.Element[] = [];
    let max = 0;

    data.map((item: DataItem) => {
      if (Number(item.ResponseTime) > max) {
        max = Math.ceil(item.ResponseTime / 1000) * 1000;
      }
    });

    data.map((item: DataItem, index: number) => {
      tableRowJSX.push(
        <tr key={index}>
          <td>
            <div className="table-details">{item.FunctionName}</div>
          </td>
          <td>
            <div className="table-details">{item.Duration}</div>
          </td>
          <td>
            <div className="table-details">{item.ResponseTime} ms</div>
          </td>
          <td>
            <div className="response-time">
              <div
                className={`line ${(100 * item.ResponseTime) / max > 75 ? 'red' : 'green'}`}
                style={{ width: `${(100 * item.ResponseTime) / max}%` }}
              ></div>
            </div>
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
        <div className="heading">Execution Time</div>
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
                  <div className="table-header-ms">
                    {tableHeadMsJSX}
                  </div>
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

  render() {
    const { data } = this.props;
    if (data && data.series && data.series.length > 0) {
      const seriesData: Series[] = data.series.map((seriesItem) => ({
        name: seriesItem.name || '',
        refId: seriesItem.refId || '',
        meta: {
          custom: {
            data: seriesItem.meta?.custom?.data || '',
            error: seriesItem.meta?.custom?.error || '',
            query: { queryString: seriesItem.meta?.custom?.query?.queryString || '' }
          }
        },
      }));

      return (
        <>
          {this.renderFrames(seriesData)}
        </>
      );
    } else {
      return <div>No data available</div>;
    }
  }
}

export default AppkubeExecutionTimePanel;
