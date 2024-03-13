import React, { PureComponent } from 'react';

import { PanelProps } from '@grafana/data';

import './css/style.css';

class AppkubeImageBadgePanel extends PureComponent<PanelProps> {
  render() {
    return (
      <div className="image-badge-panel">
        <div className="badge-box">
          <div className="badge-circle">
            <img src={this.props.options.badgeImage} alt="" />
          </div>
          <div className="badge-contents">
            <span title={this.props.options.badgeTitle}>{this.props.options.badgeTitle}</span>
            <strong>{`540,549`}</strong>
          </div>
        </div>
      </div>
    );
  }
}

export default AppkubeImageBadgePanel;
