import React, { PureComponent } from 'react';

import { PanelProps } from '@grafana/data';

import './css/style.css';

class AppkubeLCUPanel extends PureComponent<PanelProps> {
  render() {
    return (
      <div className="success-request-graph-panel">
        <div className="success-request-graph-container">
          <span className="title">Lcu</span>
          <div className="graph-info">
            <div className="graph-status">
              <span className="color failure"></span>
              <span className="name">New Connection</span>
            </div>
            <div className="graph-status">
              <span className="color success"></span>
              <span className="name">Active Connection</span>
            </div>
            <div className="graph-status">
              <span className="color success"></span>
              <span className="name">Bytes</span>
            </div>
          </div>
          <div className="icon">
            <div className="refresh-icon">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC+SURBVHgBhVKLFcIgDLz6OoAbiBs4Ahu4giO4Ad0EnMARrJMUN+gGGmyilF/vvXuPHByEJB1yaOKZuOf4RXREz7ElPmODIj6I7wotn5H1zzRFok4ycLw3pUbLwoA6hvj1nm+88K2pMfzzGsUzaxBjwA05wiFT0L9GxeuxsO+Jx4I+99iGL4k7LHkHaGxDYanHSQyrEjcg1VciSONNw2RKDyi0B+CO/wAoFPJ3qI9cMMv8okMOzTxwHIZ8RNKuD7ctPJk3x1k4AAAAAElFTkSuQmCC"
                alt=""
              />
            </div>
            <div className="resize-icon">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADTSURBVHgBlVOJDcIwDDwqBugGNZt0hI7QEboBYQM2aDagG9BNYAQ2AKeykRM5PCedlNp35zZJdwCIOSJHZN6LWk2HwHwWLIUJk6MLTSFamAdNLnCW3mqLNiA1BuYRdaReL4PeCPI6nUxO69kxz9JLGpJ18m4PkxF6IdasGMXrQkNaMy3iT5BZtzVRgzoevwTUoN/cibm2sRsI+cXxNiw6IZN4s2P0zF4IwRyjBlzwfbc15OoFaIM+BJAZ5P4LPfOG/GIpRukNtriH/8qLU1uZp6IWXydrSgwityI8AAAAAElFTkSuQmCC"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AppkubeLCUPanel;
