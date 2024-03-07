import React, { PureComponent } from 'react';

import { PanelProps } from '@grafana/data';

import './css/style.css';

class AppkubeResoursesPanel extends PureComponent<PanelProps> {
  render() {
    return (
      <div className="resourses-panel">
        <div className="resourses-inner">
          <div className="resourses-heading">Resourses</div>
          <div className="resourses-boxes">
            <div className="resourses-box">
              <div className="heading">Function</div>
              <div className="price">
                <strong>18,6875</strong>
                <span>10%</span>
              </div>
              <div className="detail">Compared to $21,490 last year</div>
            </div>
            <div className="resourses-box">
              <div className="heading">Errors</div>
              <div className="price">
                <strong>2,875</strong>
                <span>10%</span>
              </div>
              <div className="detail">Compared to $21,490 last year</div>
            </div>
            <div className="resourses-box">
              <div className="heading">Throttles</div>
              <div className="price">
                <strong>285</strong>
                <span>10%</span>
              </div>
              <div className="detail">Compared to $21,490 last year</div>
            </div>
            <div className="resourses-box">
              <div className="heading">Throttles</div>
              <div className="price">
                <strong>365</strong>
                <span>10%</span>
              </div>
              <div className="detail">Compared to $21,490 last year</div>
            </div>
            <div className="resourses-box">
              <div className="heading">Trends</div>
              <div className="price">
                <strong>123</strong>
                <span>10%</span>
              </div>
              <div className="detail">Compared to $21,490 last year</div>
            </div>
            <div className="resourses-box">
              <div className="heading">Failure Function</div>
              <div className="price">
                <strong>15</strong>
                <span>10%</span>
              </div>
              <div className="detail">Compared to $21,490 last year</div>
            </div>
            <div className="resourses-box">
              <div className="heading">CPU Used</div>
              <div className="price">
                <strong>256MB</strong>
                <span>10%</span>
              </div>
              <div className="detail">Compared to $21,490 last year</div>
            </div>
            <div className="resourses-box">
              <div className="heading">Net Received</div>
              <div className="price">
                <strong>1562</strong>
                <span>10%</span>
              </div>
              <div className="detail">Compared to $21,490 last year</div>
            </div>
            <div className="resourses-box">
              <div className="heading">Request</div>
              <div className="price">
                <strong>16522</strong>
                <span>10%</span>
              </div>
              <div className="detail">Compared to $21,490 last year</div>
            </div>
            <div className="resourses-box">
              <div className="heading">Memory Used</div>
              <div className="price">
                <strong>512MB</strong>
                <span>10%</span>
              </div>
              <div className="detail">Compared to $21,490 last year</div>
            </div>
            <div className="resourses-box">
              <div className="heading">****</div>
              <div className="price">
                <strong>12,875</strong>
                <span>10%</span>
              </div>
              <div className="detail">Compared to $21,490 last year</div>
            </div>
            <div className="resourses-box">
              <div className="heading">-----</div>
              <div className="price">
                <strong>12,875</strong>
                <span>10%</span>
              </div>
              <div className="detail">Compared to $21,490 last year</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AppkubeResoursesPanel;
