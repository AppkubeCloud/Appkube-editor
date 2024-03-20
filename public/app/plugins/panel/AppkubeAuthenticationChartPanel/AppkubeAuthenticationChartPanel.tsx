import React, { PureComponent } from 'react';

import { PanelProps } from '@grafana/data';

import './css/style.css';
import MultiColorStackTwo from './Components/MultiColorStackTwo';

class AppkubeAuthenticationChartPanel extends PureComponent<PanelProps> {
  render() {
    return (
      <div className="authentication-chart-panel">
        <div className="heading">User Access and Authentication</div>
        <MultiColorStackTwo />
      </div>
    );
  }
}

export default AppkubeAuthenticationChartPanel;
