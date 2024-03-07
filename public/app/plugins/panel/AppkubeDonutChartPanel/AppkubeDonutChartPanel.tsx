import React, { PureComponent } from 'react';

import { PanelProps } from '@grafana/data';

import './css/style.css';
import BackupDonutChart from './Components/BackupDonutChart';
import RecoveryDonutChart from './Components/RecoveryDonutChart';

class AppkubeDonutChartPanel extends PureComponent<PanelProps> {
  constructor(props: PanelProps) {
    super(props);
  }
  render() {
    return (
      <div className="recovery-donut-chart-panel">
        <div className="recovery-donut-chart-inner-panel">
          <div className="heading">Backup And Recovery</div>
          <div className="chart-container">
            <div className="chart-box">
              <BackupDonutChart />
              <div className="name">Backup</div>
              <div className="text">Backup 2 Hours Age</div>
            </div>
            <div className="chart-box">
              <RecoveryDonutChart />
              <div className="name">Recovery</div>
              <div className="text">Data recovered On 09-22-2022</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AppkubeDonutChartPanel;
