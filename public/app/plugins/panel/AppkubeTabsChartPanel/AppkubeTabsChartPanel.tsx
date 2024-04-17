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
      <li 
      className={`${activeTabIndex === i ? 'active' : ''}`}
      onClick={() => this.setState({activeTabIndex: i})} >
        {tab}
      </li>
      );
    });
    return tabsJSX;
  }

  render() {
    const {activeTabIndex} = this.state;
    return (
      <>
      <div className="multiline-chart-panel">
        <div className="heading">
          <span>All Products</span>
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
        <div>
        <div className="tabs">
          <ul>
            {this.renderTabs()}
          </ul>
        </div>
      </div>
        {activeTabIndex === 0 ? <MultilineChart data={sampleData} /> : activeTabIndex === 1 ? <>Sagar1</> : activeTabIndex === 2 ? <>Sagar2</> : activeTabIndex === 3 ? <>Sagar3</> : "No Data found!"}
        {/* <MultilineChart data={sampleData} /> */}
      </div>
      </>
    );
  }
}

export default AppkubeTabsChartPanel;
