import React, { PureComponent } from 'react';
import { PanelProps } from '@grafana/data';
import './css/style.css';

class AppkubeCostByHighestSpendTargetGroupsPanel extends PureComponent<PanelProps> {
  render() {
    return (
      <div className="cost-highest-spend-target-panel">
        <div className="cost-highest-spend-target-inner">
          <div className="header">
            <div className="heading">Cost by highest spend target groups</div>
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
          <div className="graph-container">
            <div className="graph">
              <label>Lambda</label>
              <div className="line">
                <span style={{ width: '70%', backgroundColor: '#FAA24B' }}>782</span>
              </div>
            </div>
            <div className="graph">
              <label>EC2</label>
              <div className="line">
                <span style={{ width: '80%', backgroundColor: '#F9D33D' }}>889</span>
              </div>
            </div>
            <div className="graph">
              <label>Containers</label>
              <div className="line">
                <span style={{ width: '55%', backgroundColor: '#88E143' }}>450</span>
              </div>
            </div>
            <div className="graph">
              <label>Ip Address</label>
              <div className="line">
                <span style={{ width: '75%', backgroundColor: '#53CA43' }}>805</span>
              </div>
            </div>
          </div>
          <div className="lines-graph-container">
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
            <span>Jun</span>
            <span>Jul</span>
            <span>Aug</span>
            <span>Sep</span>
            <span>Oct</span>
            <span>Nov</span>
            <span>Dec</span>
          </div>
        </div>
      </div>
    );
  }
}

export default AppkubeCostByHighestSpendTargetGroupsPanel;
