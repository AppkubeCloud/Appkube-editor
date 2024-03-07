import React, { PureComponent } from 'react';

import { PanelProps } from '@grafana/data';

import './css/style.css';

class AppkubeBreakdownPanel extends PureComponent<PanelProps> {
  render() {
    return (
      <div className="breakdown-panel">
        <div className="breakdown-inner-panel">
          <div className="breakdown-circle">
            <div className="percent">
              <svg>
                <circle cx="80" cy="80" r="78"></circle>
                <circle cx="80" cy="80" r="78" style={{ '--percent': '45' } as React.CSSProperties}></circle>
              </svg>
            </div>
            <div className="breakdown-inner">
              <div className="icon">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAnCAYAAACMo1E1AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJeSURBVHgB7ZfPcZtAGMXfIgtdVQIlKBUYVxBcgXEFkiajxLEPwpNJ5NiHOBXIqcByBVEJpANKUI5CYzZvsZyAAgSWWNKB34wEy/7hwX77+BZoaGj4jdi8MHkrx1LCxpYxDPhnn8UweS0l7sMb6bRauMfuOD6/FrPngpGsofoudghnLHX/g9yGgM+/r1l1QqDPQ69M239hCIzZ38qqyxUnJBbnN+Iuq25yJufyEVMGhU1R81ULp96VCKDBp5E84TgWqogr4v2TkCO8MAb2mL0WpzWt3kB2Oyb6EeAwoP3lEkPvVixQkauR7Efiz8L6L+I6HXzhsneVSfLYY1lxWmWMyTs5jThGURstcUrQRtlGBdZfITdxaUF3mD1KBKgrjgRASqCPkkwG0qKvecm+YYijrLDQEicMDGWEnzx9TZ/zwxaGZfvKAziJYhAaOM6L1zo+50IHwQdaw6l9KDLvXVtJYThsX5xAcgp7RU21fc40MeapwyRgTp+7ZNwEZfpyMfygBcVxx74nHMvLizmtN6d8jocBf5ayBLPNJKAkTMvuEkX1kFMKtDLbQodNX8vJKrJQi0mm0yuHAr8rU/44kr3a4ujsD8mymlpU4OJGqLeeXAzW2pTri1utYhP9BmXGzOeWApeoCNPxV4y/wn56C+IpgF3U5OJaeEw2D+OkNYMmn9NFa1rjj3c73kNYjLkgXHEPcau3h4CWON6YS9vNrOL3kcFsP7drm7hnW63dF/t3q4vj8qaITHON/hqfFiDKG3FZ9irmRPq7m35z9K8Z3drm6SG2jEqfaM4zNDQ0ZPMLtojHy2LtQ/4AAAAASUVORK5CYII="
                  alt=""
                />
              </div>
              <div className="percent-text">
                89 <sub>%</sub>
              </div>
            </div>
          </div>
          <div className="name">Warning breakdown</div>
          <div className="price">
            {`78956`}
            <p>10%</p>
          </div>
          <div className="detail">Last Updated 21 Hours Ago</div>
        </div>
      </div>
    );
  }
}

export default AppkubeBreakdownPanel;
