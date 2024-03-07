import React, { PureComponent } from 'react';

import { PanelProps } from '@grafana/data';

import './css/style.css';

class AppkubeKubernetesCostPanel extends PureComponent<PanelProps> {
  render() {
    return (
      <div className="kubernetes-cost-panel">
        <div className="kubernetes-cost-inner">
          <div className="heading">Kubernetes Cost</div>
          <div className="price">$762.82</div>
        </div>
      </div>
    );
  }
}

export default AppkubeKubernetesCostPanel;
