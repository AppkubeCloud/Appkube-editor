import React, { PureComponent } from 'react';

import { PanelProps } from '@grafana/data';

import './css/style.css';

class AppkubeClusterHealthPanel extends PureComponent<PanelProps> {
  render() {
    return (
      <div className="cluster-health-panel">
        <div className="cluster-health-inner-panel">
          <div className="heading">
            <span>Cluster Health</span>
            <div className="time-periods">
              <ul>
                <li>Today</li>
                <li>1W</li>
                <li className="active">1M</li>
                <li>3M</li>
                <li>Custom</li>
              </ul>
            </div>
            <div className="buttons">
              <button>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADTSURBVHgBlVOJDcIwDDwqBugGNZt0hI7QEboBYQM2aDagG9BNYAQ2AKeykRM5PCedlNp35zZJdwCIOSJHZN6LWk2HwHwWLIUJk6MLTSFamAdNLnCW3mqLNiA1BuYRdaReL4PeCPI6nUxO69kxz9JLGpJ18m4PkxF6IdasGMXrQkNaMy3iT5BZtzVRgzoevwTUoN/cibm2sRsI+cXxNiw6IZN4s2P0zF4IwRyjBlzwfbc15OoFaIM+BJAZ5P4LPfOG/GIpRukNtriH/8qLU1uZp6IWXydrSgwityI8AAAAAElFTkSuQmCC"
                  alt=""
                />
              </button>
              <button>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC+SURBVHgBhVKLFcIgDLz6OoAbiBs4Ahu4giO4Ad0EnMARrJMUN+gGGmyilF/vvXuPHByEJB1yaOKZuOf4RXREz7ElPmODIj6I7wotn5H1zzRFok4ycLw3pUbLwoA6hvj1nm+88K2pMfzzGsUzaxBjwA05wiFT0L9GxeuxsO+Jx4I+99iGL4k7LHkHaGxDYanHSQyrEjcg1VciSONNw2RKDyi0B+CO/wAoFPJ3qI9cMMv8okMOzTxwHIZ8RNKuD7ctPJk3x1k4AAAAAElFTkSuQmCC"
                  alt=""
                />
              </button>
            </div>
          </div>
          <div className="lines-container">
            <div className="line-container">
              <label htmlFor="Healthy">Healthy</label>
              <div className="line green">
                <span style={{ width: '98.55%' }}>98.55%</span>
              </div>
            </div>
            <div className="line-container">
              <label htmlFor="Unhealthy">Unhealthy</label>
              <div className="line red">
                <span style={{ width: '45.9%' }}>45.9%</span>
              </div>
            </div>
            <div className="line-container">
              <label htmlFor="Critical">Critical</label>
              <div className="line orange">
                <span style={{ width: '25.54%' }}>25.54%</span>
              </div>
            </div>
          </div>
          <div className="lines-graph">
            <span>Sun</span>
            <span>Mon</span>
            <span>Tues</span>
            <span>Wed</span>
            <span>Thurs</span>
            <span>Fri</span>
            <span>Sat</span>
          </div>
        </div>
      </div>
    );
  }
}

export default AppkubeClusterHealthPanel;
