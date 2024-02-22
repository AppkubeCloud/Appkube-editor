import React, { PureComponent } from 'react';
import { PanelProps } from '@grafana/data';
import './css/style.css';

class AppkubeSecurityPanel extends PureComponent<PanelProps> {
  render() {
    return (
      <div className="security-panel">
        <div className="security-container">
          <div className="icon">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABYSURBVHgB7ZK7DcAgDESfEYNkjuyvrBEmCYGCEonP0SBe5er8ZJ+5O77AxRzBUlBEgC/D95gxQBFxiPC1DZkey3VGw7dChOz9+hudHtFstFGPUkpgkpzxA/8bIT87aP2VAAAAAElFTkSuQmCC"
              alt=""
            />
          </div>
          <div className="panel-details">
            <span className="title">Security</span>
            <div className="percentage-info">
              <span className="number">99%</span>
              <div className="process-bar">
                <span className="process"></span>
                <span className="process"></span>
                <span className="process"></span>
                <span className="process"></span>
                <span className="process"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AppkubeSecurityPanel;
