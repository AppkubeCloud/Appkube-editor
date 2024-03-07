import React, { PureComponent } from 'react';

import { PanelProps } from '@grafana/data';

import './css/style.css';

class AppkubePerfomancePanel extends PureComponent<PanelProps> {
  render() {
    return (
      <div className="performance-panel">
        <div className="performance-container">
          <div className="icon">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASCAYAAABfJS4tAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIfSURBVHgBhVTRUdtAEH17DJC/uATTgfORGewvdYCoIKICSAWxKjCpAFwBUIGdH5OZfNgdoA6i35CJNm9PJ1kSEt4ZS/Lt7bu3e29XMGSRjtwrrlURiWDClZEtK7DjI3OCp38buR8KlwHABb8SHLaMAGnfAW3gzzpxx3jg19izUzyS4ZIMd/gpWbUHR5iIwzfZ71vrKS6xlvzt2QY609/8qUx1hXMd45CdayIzffExM91atm3GBHEOq8D0e7GRmw5ARH9E5nnBLGr2IZbsV8beZ/gsl7WPJ94Fpg8dwLELjFq/qS569vlsMdXYYxobvhPWMuPy1+b+KgvzWSZkvAx53rTAmQEzSX2MYNFia+8m6BHrF2r30qxduAvPvLVeYpWsrXT8H9li8ZeMGqZSrotyvXnbv2RnKvDff8o9DVuGTGMDHuEdY3Pkg04d9rn6lGPEHd/OHgVw3S2FSM0068Rc+JgCjxKkZJeUFyc4q9MmmLxiG5og8wQEH8kyQZllSlnOK0S7E3W48yLYyFmZLhtiSG7SJ7eZ3nb3VbLETBOPWTsctoHJnEzSViC1SRlNCqtp2d7rFui+ue4Ze7UHDrVjnW3DyPe+4qrVYX1WltFk6rWuJ/hUlfLNEBIOoWq4eAaKJ5xSXlXtjaEgJtBFdYl9Q0h6WFjgnJ4vOGAEz6nztHiW265PMJzmmN5YTEKsr+wHvc3gNSX1Ax84kHpHJfAfP9YkXqGrNTIAAAAASUVORK5CYII="
              alt=""
            />
          </div>
          <div className="panel-details">
            <span className="title">Performance</span>
            <div className="percentage-info">
              <span className="number">99.99%</span>
              <progress id="file" value="100" max="100">{`100`}</progress>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AppkubePerfomancePanel;
