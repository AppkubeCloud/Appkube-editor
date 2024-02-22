import React, { PureComponent } from 'react';
import { PanelProps } from '@grafana/data';
import './css/style.css';

class AppkubeS3TotalCostPanel extends PureComponent<PanelProps> {
  render() {
    return (
      <div className="service-total-cost-panel">
        <div className="service-total-cost-container">
          <div className="panel-details">
            <span className="title">Total Cost</span>
            <span className="number">$ 8872.16</span>
          </div>
        </div>
      </div>
    );
  }
}

export default AppkubeS3TotalCostPanel;
