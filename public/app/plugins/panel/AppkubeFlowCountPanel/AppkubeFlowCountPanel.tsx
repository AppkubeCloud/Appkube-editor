import React, { PureComponent } from 'react';

import { PanelProps } from '@grafana/data';

import './css/style.css';
import FlowCountChart from './Components/FlowCountChart';
import dummyData from './data.json';
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

interface BarChartData {
  month: string;
  value: number;
}

interface Event {
  Field: string;
  Value: string;
}

interface Statistics {
  BytesScanned: number;
  RecordsMatched: number;
  RecordsScanned: number;
}

interface ResultsItem {
  Results: Event[][];
  Statistics: Statistics;
  Status: string;
}

class AppkubeFlowCountPanel extends PureComponent<PanelProps> {
  renderFrames = (series: Series[]) => {
    const retData: JSX.Element[] = [];
    for (let i = 0; i < series.length; i++) {
      const iSer = series[i];
      let cardJSX: JSX.Element | null = null;
      if (iSer && iSer.meta && iSer.meta.custom) {
        const { data, error } = iSer.meta.custom;
        if (error) {
          cardJSX = <>{this.renderError()}</>;
        } else {
          if (data) {
            cardJSX = this.renderData(JSON.parse(data));
          } else {
            cardJSX = <>{this.renderError()}</>;
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

  renderData = (data: ResultsItem[]) => {
    const chartData: BarChartData[] = [];
    data.map((item: ResultsItem) => {
      item.Results.map((result: Event[]) => {
        chartData.push({
          month: result[0].Value.replace(/([A-Z])/g, ' $1').trim(),
          value: parseFloat(result[1].Value)
        })
      })
    })

    return (
      <div className="flow-count-panel">
        <div className="flow-count-inner-panel">
          <div className="heading">
            <span>{this.props.options.title}</span>
            <div className="buttons">
              {/* Buttons content */}
            </div>
          </div>
          {/* Transform chartData to BarChartData[] */}
          <FlowCountChart data={chartData} />
        </div>
      </div>
    );
  };

  render() {
    const data = dummyData;
    if (data && data.series && data.series.length > 0) {
      const seriesData: Series[] = data.series.map((seriesItem) => ({
        name: seriesItem.name || '',
        refId: seriesItem.refId || '',
        meta: {
          custom: {
            data: seriesItem.meta?.custom?.data || '',
            error: seriesItem.meta?.custom?.error || '',
            query: { queryString: seriesItem.meta?.custom?.query?.queryString || '' },
          },
        },
      }));
      return <>{this.renderFrames(seriesData)}</>;
    } else {
      return <div>No data available</div>;
    }
  }
}

export default AppkubeFlowCountPanel;
