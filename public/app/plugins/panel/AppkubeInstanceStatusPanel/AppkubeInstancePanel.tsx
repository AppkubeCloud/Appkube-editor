import React, { PureComponent } from 'react';

import { PanelProps } from '@grafana/data';

import './css/style.css';
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

class AppkubeInstanceStatusPanel extends PureComponent<PanelProps> {

  renderData = (series: Series[]) => {
    const retData: React.ReactNode[] = [];
    const {data, error} = series[0].meta.custom;
    if (error) {
      retData.push(this.renderError());
    } else {
      if (JSON.parse(data)[0]) {
        let instanceData = JSON.parse(data)[0];
        retData.push(
          <>
            <div className="instance-name">
              <span className="d-block info">Instance ID</span>
              <span className="d-block info">Instance Type</span>
              <span className="d-block info">Availability Zone</span>
              <span className="d-block info">System Checks</span>
              <span className="d-block info">Custom Alerts</span>
            </div>
            <div className="instance-number">
              <span className="d-block details">{instanceData.InstanceID}</span>
              <span className="d-block details">{instanceData.InstanceType}</span>
              <span className="d-block details">{instanceData.AvailabilityZone}</span>
              <span className="d-block details">{instanceData.SystemChecksStatus}</span>
              <span className="d-block details">{!instanceData.CustomAlert ? "No Alerts" : instanceData.CustomAlert}</span>
            </div>
          </>
        );
      } else {
        retData.push(this.renderError());
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

  render() {
    const { data } = this.props;
    if (data && data.series && data.series.length > 0 && data?.series[0]?.meta?.custom?.data[0]) {
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
        <div className="instance-panel">
        <div className="instance-panel-heading">
          <span className="title">{this.props.options.instanceTitle}</span>
          <button>Filter</button>
        </div>
        <p className="subtitle">
          {this.props.options.instanceDescription}
        </p>
        <div className="instance-panel-contents">
          <div className="instance-panel-left width-50 d-flex align-items-center">
            <div className="progress-bar">
              <svg>
                <circle cx="60" cy="60" r="46"></circle>
                <circle cx="60" cy="60" r="49"></circle>
              </svg>
              <div className="bar-chart ">
                <span className="low"></span>
                <span className="medium"></span>
                <span className="high"></span>
              </div>
              <div className="number">
                <h4>
                  70<sup className="percantage"> %</sup>
                </h4>
              </div>
            </div>
            <div className="running-status">
              <span className="d-block">Instance Status</span>
              <div className="d-flex align-items-center">
                <span className="run">Running</span>
                <div className="d-flex align-items-center">
                  <i className="fa-solid fa-caret-up"></i>
                  <span className="d-block percantage">10%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="instance-panel-right">
            <div className="right-contents">
            {this.renderData(seriesData)}
              
            </div>
          </div>
        </div>
      </div>
      );
    } else {
      return <div>No data available</div>;
    }
  }
}

export default AppkubeInstanceStatusPanel;
