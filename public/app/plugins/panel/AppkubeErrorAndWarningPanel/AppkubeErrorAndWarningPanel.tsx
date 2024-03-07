import React, { PureComponent } from 'react';

import { PanelProps } from '@grafana/data';

import './css/style.css';
import BubblePlot from './Components/BubblePlot';

class AppkubeErrorAndWarningPanel extends PureComponent<PanelProps> {
  render() {
    return (
      <div className="error-warning-panel">
        <div className="error-warning-inner">
          <div className="error-warning-header">
            <span className="error-warning-title">Errors & Warning Events</span>
            <div className="error-warning-percentage">
              <div className="error-warning-info">
                <span className="dot-icon error"></span>
                <span className="name">Errors</span>
              </div>
              <div className="error-warning-info">
                <span className="dot-icon warning"></span>
                <span className="name">Warning</span>
              </div>
            </div>
          </div>
          <BubblePlot />
        </div>
      </div>
    );
  }
}

export default AppkubeErrorAndWarningPanel;
