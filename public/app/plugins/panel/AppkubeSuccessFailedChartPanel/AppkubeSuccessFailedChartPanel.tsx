import React, { PureComponent } from 'react';

import { PanelProps } from '@grafana/data';

import './css/style.css';
import StackBarChart from './Components/StackBarChart';

class AppkubeSuccessFailedChartPanel extends PureComponent<PanelProps> {
  render() {
    return (
      <div className="success-and-failed-request-panel">
        <div className="success-and-failed-request-panel-inner">
          <div className="header">
            <div className="heading">Success and Failed Request</div>
            <div className="contents">
              <span className="failire">Failire</span>
              <span className="success">Success</span>
            </div>
            <div className="buttons">
              <button className="icon">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADNSURBVHgB7ZThDcIgEIWfxv92BNzAERjBDXQEN2g3KU7gCNZJiht0Az3iIQ0Ch7/tS760wONxSa8Af6eVsK6JA7Hl8YMwhOVxT9x5rihF3Ihnhp49/l0MG2dmHVVseG2sDfQbuoKni6r9aBMZNXHk0C5aa4jzbDzxHKRApwu+5Ta3EBQHKn4OCa8ldon5qRQoyUqGdeY0DVmKOBH7kkmjshUQukFJRt/QpQ/Q/nCw2NhXhMZWqJQzGuR/PRfapDbWXA4aoRKLd0sNWOT1As99PToFwXcPAAAAAElFTkSuQmCC"
                  alt=""
                />
              </button>
              <button className="icon">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADjSURBVHgB1VPRDYJADK3EARihbsIIjHAjsIG4gRvQDcQJZBMdwQ20l7SmXAp3xh95yUtK3+vjjjsA/h07UyMzJDoxH0mv1Ac985UwHYzoHF+vYgU+RuZB3pziLNrkDXqB0dgyj7CMqDXM64rns2WUlcV6cHyDaCTe2ZYtotiZZy/UhimCzBaBJKA2qyH4EWjqOmeuII/nN4E56DdDCVs6KBdxKDhhZHrkhHawcCi9WY0X5oUirFwbDbxA/jQ19FYSqEZcCUTz4qJ/uWHeYX7RFUG01hvcm5ocfXR6E/OU9Ag2gzffWkrwdvUaogAAAABJRU5ErkJggg=="
                  alt=""
                />
              </button>
            </div>
          </div>
          <StackBarChart />
        </div>
      </div>
    );
  }
}

export default AppkubeSuccessFailedChartPanel;
