import React, { PureComponent } from 'react';

import { PanelProps } from '@grafana/data';

import './css/style.css';
import { imageJSON } from './ds';
import ErrorImg from './img/error.svg';

class AppkubeUtlizationPanel extends PureComponent<PanelProps> {
  renderCPUUtilizationData = (data: any) => {
    return (
      <div className="utilization-card">
        <div className="card-title">
          <div className="icon">
            <img src={imageJSON.cpu_utilization} alt="" />
          </div>
          <span className="name">CPU Utilization</span>
        </div>
        <div className="utilization-details">
          <div className="info">
            <span className="name">Current Usage</span>
            <span className="percantage" title={data.CurrentUsage}>
              {Math.round(data.CurrentUsage)}%
            </span>
          </div>
          <div className="info">
            <span className="name">Average Usage</span>
            <span className="percantage" title={data.AverageUsage}>
              {Math.round(data.AverageUsage)}%
            </span>
          </div>
          <div className="info">
            <span className="name">Max Usage</span>
            <span className="percantage" title={data.MaxUsage}>
              {Math.round(data.MaxUsage)}%
            </span>
          </div>
        </div>
      </div>
    );
  };

  memoryUtilizationData = (data: any) => {
    return (
      <div className="utilization-card">
        <div className="card-title">
          <div className="icon">
            <img src={imageJSON.memory_utilization} alt="" />
          </div>
          <span className="name">Memory Utilization</span>
        </div>
        <div className="utilization-details">
          <div className="info">
            <span className="name">Current Usage</span>
            <span className="percantage" title={data.CurrentUsage}>
              {Math.round(data.CurrentUsage)} GB
            </span>
          </div>
          <div className="info">
            <span className="name">Average Usage</span>
            <span className="percantage" title={data.AverageUsage}>
              {Math.round(data.AverageUsage)} GB
            </span>
          </div>
          <div className="info">
            <span className="name">Max Usage</span>
            <span className="percantage" title={data.MaxUsage}>
              {Math.round(data.MaxUsage)} GB
            </span>
          </div>
        </div>
      </div>
    );
  };

  renderNetworkUtilizationData = (data: any) => {
    return (
      <div className="utilization-card">
        <div className="card-title">
          <div className="icon">
            <img src={imageJSON.network_utilization} alt="" />
          </div>
          <span className="name">Network Utilization</span>
        </div>
        <div className="utilization-details">
          <div className="info">
            <span className="name">Inbound Traffic</span>
            <span className="percantage" title={data.InboundTraffic}>
              {Math.round(data.InboundTraffic)} MB
            </span>
          </div>
          <div className="info">
            <span className="name">Outbound Traffic</span>
            <span className="percantage" title={data.OutboundTraffic}>
              {Math.round(data.OutboundTraffic)} MB
            </span>
          </div>
          <div className="info">
            <span className="name">Data Transferred</span>
            <span className="percantage" title={data.DataTrasferred}>
              {Math.round(data.DataTrasferred)} MB
            </span>
          </div>
        </div>
      </div>
    );
  };



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
              cardJSX = this.renderCPUUtilizationData(JSON.parse(data));
            } else {
              cardJSX = this.renderError();
            }
          }
        } else if (query.queryString === 'memory_utilization_panel') {
          if (error) {
            cardJSX = this.renderError();
          } else {
            if (data) {
              cardJSX = this.memoryUtilizationData(JSON.parse(data));
            } else {
              cardJSX = this.renderError();
            }
          }
        } else if (query.queryString === "network_utilization_panel") {
          if (error) {
            cardJSX = this.renderError();
          } else {
            if (data) {
              cardJSX = this.renderNetworkUtilizationData(JSON.parse(data));
            } else {
              cardJSX = this.renderError();
            }
          }
        }
      }
      else {
        cardJSX = this.renderError();
      }
      retData.push(cardJSX);
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
    if (data && data.series && data.series.length > 0) {
      const { series } = data;
      return <div className="appkube-utilization-panel">{this.renderFrames(series)}</div>;
    } else {
      return <div>No data available</div>;
    }
  }
}

export default AppkubeUtlizationPanel;
