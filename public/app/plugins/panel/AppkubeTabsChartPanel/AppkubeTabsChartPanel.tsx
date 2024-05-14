import React, { PureComponent } from 'react';

import { PanelProps } from '@grafana/data';

import './css/style.css';
import MultilineChart from './Components/MultilineChart';

interface State {
  activeTabIndex: number;
}

const sampleData = [
  { date: new Date('2023-01-01'), last_quarter: 100, current_quarter: 120, forecasted_spend: 150 },
  { date: new Date('2023-02-01'), last_quarter: 110, current_quarter: 130, forecasted_spend: 160 },
  { date: new Date('2023-03-01'), last_quarter: 120, current_quarter: 125, forecasted_spend: 155 },
  { date: new Date('2023-04-01'), last_quarter: 115, current_quarter: 135, forecasted_spend: 165 },
  { date: new Date('2023-05-01'), last_quarter: 130, current_quarter: 140, forecasted_spend: 170 },
  { date: new Date('2023-06-01'), last_quarter: 135, current_quarter: 145, forecasted_spend: 175 },
];

const tabs = ["Invocation", "Duration", "Memory", "Concurrency"];

class AppkubeTabsChartPanel extends PureComponent<PanelProps, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      activeTabIndex: 0
    }
  }

  renderTabs = () => {
    const { activeTabIndex } = this.state;
    const tabsJSX: JSX.Element[] = [];
    tabs.forEach((tab, i) => {
      tabsJSX.push(
        <li className={`${activeTabIndex === i ? 'active' : ''}`} onClick={() => this.setState({ activeTabIndex: i })}>
          {tab}
        </li>
      );
    });
    return tabsJSX;
  }

  render() {
    const { activeTabIndex } = this.state;
    return (
      <>
        <div className="tabs-chart-panel">
          <div className="heading">
            <span>Lambda Fnl</span>
            <button>View Full</button>
          </div>
          <div className="tabs">
            <ul>
              {this.renderTabs()}
            </ul>
            <div className="tabs-contents">
              {activeTabIndex === 0 ? 
              <MultilineChart data={sampleData} /> : activeTabIndex === 1 ? 
              <MultilineChart data={sampleData} /> : activeTabIndex === 2 ? 
              <MultilineChart data={sampleData} /> : activeTabIndex === 3 ? 
              <MultilineChart data={sampleData} /> : 
              "No Data found!"}
            </div>
          </div>
          {/* <MultilineChart data={sampleData} /> */}
        </div>
      </>
    );
  }
}

export default AppkubeTabsChartPanel;
