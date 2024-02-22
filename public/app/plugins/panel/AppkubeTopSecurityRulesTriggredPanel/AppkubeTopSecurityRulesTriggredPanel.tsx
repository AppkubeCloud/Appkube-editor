import React, { PureComponent } from 'react';
import { PanelProps } from '@grafana/data';
import './css/style.css';

class AppkubeTopSecurityRulesTriggredPanel extends PureComponent<PanelProps> {
  render() {
    return (
      <div className="security-rules-triggre-panel">
        <div className="security-rules-triggre-inner-panel">
          <div className="d-block heading">
            <span>Top Security Rules Triggred</span>
            <button>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC+SURBVHgBhVKLFcIgDLz6OoAbiBs4Ahu4giO4Ad0EnMARrJMUN+gGGmyilF/vvXuPHByEJB1yaOKZuOf4RXREz7ElPmODIj6I7wotn5H1zzRFok4ycLw3pUbLwoA6hvj1nm+88K2pMfzzGsUzaxBjwA05wiFT0L9GxeuxsO+Jx4I+99iGL4k7LHkHaGxDYanHSQyrEjcg1VciSONNw2RKDyi0B+CO/wAoFPJ3qI9cMMv8okMOzTxwHIZ8RNKuD7ctPJk3x1k4AAAAAElFTkSuQmCC"
                alt=""
              />
            </button>
          </div>
          <div className="lines-container">
            <div className="line-container">
              <label>Change thread namespace</label>
              <div className="line">
                <span style={{ width: '100%' }}></span>
              </div>
            </div>
            <div className="line-container">
              <label>Secure EKS Control Plane</label>
              <div className="line">
                <span style={{ width: '80%' }}></span>
              </div>
            </div>
            <div className="line-container">
              <label>VPC Security</label>
              <div className="line">
                <span style={{ width: '70%' }}></span>
              </div>
            </div>
            <div className="line-container">
              <label>Node Security</label>
              <div className="line">
                <span style={{ width: '60%' }}></span>
              </div>
            </div>
            <div className="line-container">
              <label>Secure Container Images</label>
              <div className="line">
                <span style={{ width: '50%' }}></span>
              </div>
            </div>
            <div className="line-container">
              <label>IAM Roles and Policies</label>
              <div className="line">
                <span style={{ width: '48%' }}></span>
              </div>
            </div>
            <div className="line-container">
              <label>Logging and Monitoring</label>
              <div className="line">
                <span style={{ width: '44%' }}></span>
              </div>
            </div>
          </div>
          <div className="lines-graph">
            <span>0</span>
            <span>10</span>
            <span>20k</span>
            <span>30k</span>
            <span>40k</span>
            <span>50k</span>
            <span>60k</span>
          </div>
          <div className="count-box">
            <span></span>
            Count
          </div>
        </div>
      </div>
    );
  }
}

export default AppkubeTopSecurityRulesTriggredPanel;
