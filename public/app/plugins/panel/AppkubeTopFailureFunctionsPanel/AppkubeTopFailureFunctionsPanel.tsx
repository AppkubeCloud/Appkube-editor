import React, { PureComponent } from 'react';

import { PanelProps } from '@grafana/data';

import './css/style.css';

class AppkubeTopFailureFunctionsPanel extends PureComponent<PanelProps> {
  render() {
    return (
      <div className="top-failure-function-panel">
        <div className="top-failure-function-inner">
          <div className="top-failure-function-heading">Top Failure Functions</div>
          <div className="top-failure-function-price">
            {`43,833`}
            <p>10%</p>
          </div>
          <div className="top-failure-function-contents">
            <div className="content">
              <span className="malachite">Finance</span>
              <p>3:24</p>
              <strong>154</strong>
            </div>
            <div className="content">
              <span className="orange">Travel</span>
              <p>3:11</p>
              <strong>132</strong>
            </div>
            <div className="content">
              <span className="purple">Presentation</span>
              <p>3:00</p>
              <strong>126</strong>
            </div>
            <div className="content">
              <span className="caribbean-green">Startup</span>
              <p>23:08</p>
              <strong>989</strong>
            </div>
            <div className="content">
              <span className="shocking-pink">Development</span>
              <p>21:06</p>
              <strong>944</strong>
            </div>
            <div className="content">
              <span className="fluorescent-orange">Design</span>
              <p>20:3</p>
              <strong>944</strong>
            </div>
            <div className="content">
              <span className="tropical-indigo">Product</span>
              <p>20:03</p>
              <strong>897</strong>
            </div>
            <div className="content">
              <span className="cerulean-blue">Research</span>
              <p>18:44</p>
              <strong>765</strong>
            </div>
            <div className="content">
              <span className="cerulean-blue">Other</span>
              <p>14:53</p>
              <strong>565</strong>
            </div>
            <div className="content">
              <span className="tropical-indigo">Product</span>
              <p>23:03</p>
              <strong>843</strong>
            </div>
            <div className="content">
              <span className="cerulean-blue">Research</span>
              <p>18:44</p>
              <strong>765</strong>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AppkubeTopFailureFunctionsPanel;
