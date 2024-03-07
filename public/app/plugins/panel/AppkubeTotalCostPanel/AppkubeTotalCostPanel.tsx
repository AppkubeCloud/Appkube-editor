import React, { PureComponent } from 'react';

import { PanelProps } from '@grafana/data';

import './css/style.css';

class AppkubeTotalCostPanel extends PureComponent<PanelProps> {
  render() {
    return (
      <div className="total-cost-panel">
        <div className="total-cost-inner">
          <div className="cost-circle">
            <span>
              {`32`}
              <sub>%</sub>
            </span>
          </div>
          <div className="cost-contents">
            <span>Cost</span>
            <strong>
              {`$43,833`}
              <p>10%</p>
            </strong>
          </div>
        </div>
      </div>
    );
  }
}

export default AppkubeTotalCostPanel;
