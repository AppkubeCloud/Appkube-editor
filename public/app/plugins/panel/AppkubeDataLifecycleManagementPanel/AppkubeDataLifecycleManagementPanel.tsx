import React, { PureComponent } from 'react';

import { PanelProps } from '@grafana/data';

import './css/style.css';
import DataLifecycleManagementChart from './Components/DataLifecycleManagementChart';

let potentialSavingData = [
  { color: '#FF708B', percentage: 10, name: 'Deep Archive', value: '5%' },
  { color: '#FFBA69', percentage: 15, name: 'Glacier', value: '10%' },
  { color: '#01F1E3', percentage: 20, name: 'Standard-IA', value: '15%' },
  { color: '#8676FF', percentage: 75, name: 'Standard', value: '70%' },
];

class AppkubeDataLifecycleManagementPanel extends PureComponent<PanelProps> {
  render() {
    return (
      <div className="flow-count-panel">
        <div className="flow-count-inner-panel">
          <div className="heading">
            <span>Data Lifecycle Management</span>
          </div>
          <DataLifecycleManagementChart data={potentialSavingData} />
        </div>
      </div>
    );
  }
}

export default AppkubeDataLifecycleManagementPanel;
