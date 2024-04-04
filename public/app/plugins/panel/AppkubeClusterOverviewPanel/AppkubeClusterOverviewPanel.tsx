import React, { PureComponent } from 'react';

import { PanelProps } from '@grafana/data';

import './css/style.css';
import OverviewChart from './Components/OverviewChart';
// import dummyData from './data.json';
import ErrorImg from './img/error.svg';

interface Series {
  name: string;
  refId: string;
  meta: {
    custom: {
      data: string;
      error: string;
      query: {
        queryString: string;
      };
    };
  };
}

interface DataItem {
  name: string;
  upPerc: number;
  downPerc: number;
}

class AppkubeClusterOverviewPanel extends PureComponent<PanelProps> {

  renderFrames = (series: Series[]) => {
    const retData: JSX.Element[] = [];
    for (let i = 0; i < series.length; i++) {
      const iSer = series[i];
      let cardJSX: JSX.Element | null = null;
      if (iSer && iSer.meta && iSer.meta.custom) {
        const { data, error } = iSer.meta.custom;
        if (error) {
          cardJSX = <>{this.renderError()}</>;
        } else {
          if (data) {
            cardJSX = this.renderData(JSON.parse(data));
          } else {
            cardJSX = <>{this.renderError()}</>;
          }
        }
      } else {
        cardJSX = this.renderError();
      }
      if (cardJSX) {
        retData.push(cardJSX);
      }
    }
    return retData;
  };

  renderError = () => {
    return (
      <div className="utilization-card">
        <div className="error-message-box">
          <span className="icon">
            <img src={ErrorImg} alt="" width="48" height="48" />
          </span>
          <span className="name">{'There is some error'}</span>
        </div>
      </div>
    );
  };

  renderData = (data: any) => {
    const chartData: DataItem[] = [];
    for(let item in data) {
      chartData.push({
        name: item,
        upPerc: data[item].uptimePercentage,
        downPerc: data[item].downtimePercentage
      });
    }

    return (
      <div className="cluster-overview-panel">
        <div className="cluster-overview-inner-panel">
          <div className="heading">
            <span>{this.props.options.title}</span>
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
          <OverviewChart data={chartData}/>
          <div className="cluster-count">
            <ul>
              <li className="node">Up Time Percentage</li>
              <li className="pod">Down Time Percentage</li>
            </ul>
          </div>
        </div>
      </div>
    );
  };

  render() {
    // const data = dummyData;
    const {data} = this.props;
    if (data && data.series && data.series.length > 0) {
      const seriesData: Series[] = data.series.map((seriesItem) => ({
        name: seriesItem.name || '',
        refId: seriesItem.refId || '',
        meta: {
          custom: {
            data: seriesItem.meta?.custom?.data || '',
            error: seriesItem.meta?.custom?.error || '',
            query: { queryString: seriesItem.meta?.custom?.query?.queryString || '' },
          },
        },
      }));
      return <>{this.renderFrames(seriesData)}</>;
    } else {
      return <div>No data available</div>;
    }
  }
}

export default AppkubeClusterOverviewPanel;
