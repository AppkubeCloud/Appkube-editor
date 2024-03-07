import React, { PureComponent } from 'react';

import { PanelProps } from '@grafana/data';

import './css/style.css';
import StackLineBarChart from './Components/StackLineBarChart';

class AppkubeClusterCapacityPanel extends PureComponent<PanelProps> {
  render() {
    return (
      <div className="cluster-capacity-panel">
        <div className="cluster-capacity-inner-panel">
          <div className="heading">Cluster Capacity</div>
          <div className="graph-container">
            <div className="graph">
              <StackLineBarChart />
              <div className="graph-heading">CPU</div>
            </div>
            <div className="contents">
              <ul>
                <li>
                  <span className="red">Avaliable</span>
                  <p>60.8%</p>
                </li>
                <li>
                  <span className="blue">Used</span>
                  <p>38.8%</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AppkubeClusterCapacityPanel;
