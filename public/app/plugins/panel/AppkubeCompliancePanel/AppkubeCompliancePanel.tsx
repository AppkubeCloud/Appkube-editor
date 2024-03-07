import React, { PureComponent } from 'react';

import { PanelProps } from '@grafana/data';

import './css/style.css';

class AppkubeCompliancePanel extends PureComponent<PanelProps> {
  render() {
    return (
      <div className="complainces-panel">
        <div className="panel-title">
          <span className="d-block">Encryption Compliance</span>
        </div>
        <div className="complainces-panel-row">
          <div className="complainces-panel-column">
            <span className="title">Instance ID</span>
            <span className="details">i-0123456789abcdef0</span>
          </div>
          <div className="complainces-panel-column">
            <span className="title">Total Attached</span>
            <span className="details">5</span>
          </div>
          <div className="complainces-panel-column">
            <span className="title">Encrypted Volumes</span>
            <span className="details">4</span>
          </div>
          <div className="complainces-panel-column">
            <span className="title">Unencrypted Volumes</span>
            <span className="details">1</span>
          </div>
        </div>
        <div className="complainces-panel-row">
          <div className="complainces-panel-column">
            <span className="title">Encryption Algorithms</span>
            <span className="details">AES-256: 3 volumes</span>
            <span className="details">RSA-512: 1 volume</span>
          </div>
          <div className="complainces-panel-column">
            <span className="title">Volume Types</span>
            <span className="details">General Purpose SSD (gp2): 3 volumes</span>
            <span className="details">Provisioned IOPS SSD (io1): 1 volume</span>
            <span className="details">Magnetic (standard): 1 volume</span>
          </div>
          <div className="complainces-panel-column">
            <span className="title panel-important-data">Encryption Compliance Percentage</span>
            <span className="details">80%</span>
          </div>
        </div>
      </div>
    );
  }
}

export default AppkubeCompliancePanel;
