import React, { PureComponent } from 'react';

import { PanelProps } from '@grafana/data';

import './css/style.css';
import OverallBucketComplianceChart from './Components/OverallBucketComplianceChart';

let potentialSavingData = [
  { color: '#ff2d2e', percentage: 30, name: 'Noncompliant', value: '25%' },
  { color: '#53ca43', percentage: 75, name: 'Compliant', value: '70%' },
];

class AppkubeOverallBucketCompliancePanel extends PureComponent<PanelProps> {
  render() {
    return (
      <div className="overall-bucket-compliance-panel">
        <div className="overall-bucket-compliance-inner-panel">
          <div className="heading">
            <span>Overall Bucket Compliance</span>
          </div>
          <OverallBucketComplianceChart data={potentialSavingData} />
          <div className="cotal-buckets-contants">
            <ul>
              <li>
                Total compliant buckets <span>70%</span>
              </li>
              <li>
                Total Non-compliant buckets <span>30%</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default AppkubeOverallBucketCompliancePanel;
