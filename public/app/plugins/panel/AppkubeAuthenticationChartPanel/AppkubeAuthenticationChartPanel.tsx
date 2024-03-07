import React, { PureComponent } from 'react';

import { PanelProps } from '@grafana/data';

import './css/style.css';
import MultiColorStackTwo from './Components/MultiColorStackTwo';

class AppkubeAuthenticationChartPanel extends PureComponent<PanelProps> {
  render() {
    return (
      <div className="number-zone-chart-panel">
        <div className="number-zone-chart-inner-panel">
          <div className="heading">
            <span>User Access and Authentication</span>
          </div>
          <MultiColorStackTwo />
        </div>
      </div>
    );
  }
}

export default AppkubeAuthenticationChartPanel;
