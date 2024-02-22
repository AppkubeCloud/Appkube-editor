import React, { PureComponent } from 'react';
import { PanelProps } from '@grafana/data';
import './css/style.css';

class AppkubeEksResourcesPanel extends PureComponent<PanelProps> {
  render() {
    return (
      <div className="eks-resourses-panel">
        <div className="resourses-inner">
          <div className="resourses-heading">Resourses</div>
          <div className="resourses-boxes">
            <div className="resourses-box">
              <div className="heading">Network Throughput</div>
              <div className="price">
                <strong>12%</strong>
              </div>
            </div>
            <div className="resourses-box">
              <div className="heading">Disk I/O Usage</div>
              <div className="price">
                <strong>15%</strong>
              </div>
            </div>
            <div className="resourses-box">
              <div className="heading">Pod Restart Rate</div>
              <div className="price">
                <strong>8%</strong>
              </div>
            </div>
            <div className="resourses-box">
              <div className="heading">Node Failure Rate</div>
              <div className="price">
                <strong>3%</strong>
              </div>
            </div>
            <div className="resourses-box">
              <div className="heading">Container Crash Rate:</div>
              <div className="price">
                <strong>5%</strong>
              </div>
            </div>
            <div className="resourses-box">
              <div className="heading">Cluster Scaling Events</div>
              <div className="price">
                <strong>2%</strong>
              </div>
            </div>
            <div className="resourses-box">
              <div className="heading">Storage Allocation</div>
              <div className="price">
                <strong>28%</strong>
              </div>
            </div>
            <div className="resourses-box">
              <div className="heading">Ingress/Egress Traffic</div>
              <div className="price">
                <strong>20%</strong>
              </div>
            </div>
            <div className="resourses-box">
              <div className="heading">API Server Errors</div>
              <div className="price">
                <strong>6%</strong>
              </div>
            </div>
            <div className="resourses-box">
              <div className="heading">Node CPU Reservation</div>
              <div className="price">
                <strong>17%</strong>
              </div>
            </div>
            <div className="resourses-box">
              <div className="heading">Node Memory Reservation</div>
              <div className="price">
                <strong>18%</strong>
              </div>
            </div>
            <div className="resourses-box">
              <div className="heading">Pod CPU reservation</div>
              <div className="price">
                <strong>11%</strong>
              </div>
            </div>
            <div className="resourses-box">
              <div className="heading">Pod Memory Reservation</div>
              <div className="price">
                <strong>9%</strong>
              </div>
            </div>
            <div className="resourses-box">
              <div className="heading">Control Plane Metrics</div>
              <div className="price">
                <strong>13%</strong>
              </div>
            </div>
            <div className="resourses-box">
              <div className="heading">Load Balancer Latency</div>
              <div className="price">
                <strong>8%</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AppkubeEksResourcesPanel;
