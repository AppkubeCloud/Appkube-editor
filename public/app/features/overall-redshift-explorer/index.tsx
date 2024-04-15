import React, { Component } from 'react';

import { backendSrv } from 'app/core/services/backend_srv';
import { DashboardSearchItem } from 'app/features/search/types';

import Development from './Components/Development';
import FiltersModal from './Components/FiltersModal';
import Production from './Components/Production';
import Stage from './Components/Stage';
import Test from './Components/Test';

interface LocalState {
  slaButtonsPopupOpen: boolean,
  showFiltersModal: boolean,
  value: number,
  dashboardIDs: Record<string, string>;
}
const images = {
  pageTitleIcon: '/public/img/overall-explorer/page-title-icon.png',
}

const DASHBOARD_NAMES = ["overall-redshift-development", "overall-redshift-test", "overall-redshift-stage", "overall-redshift-production"];

class OverallRedshiftExplorer extends Component<Record<string, string>, LocalState> {
  popupRef: any;
  constructor(props: Record<string, string>) {
    super(props);
    this.state = {
      slaButtonsPopupOpen: false,
      showFiltersModal: false,
      value: 0,
      dashboardIDs: {
        "overall-redshift-development": "",
        "overall-redshift-test": "",
        "overall-redshift-stage": "",
        "overall-redshift-production": ""
      }
    };
    this.popupRef = React.createRef();
  }

  componentDidMount = () => {
    backendSrv.search({ type: 'dash-db', limit: 1000 }).then((result: DashboardSearchItem[]) => {
      if (result && result.length > 0) {
        const dashIDs: Record<string, string> = {};
        result.forEach((db) => {
          if (DASHBOARD_NAMES.indexOf(db.title) !== -1) {
            dashIDs[db.title] = db.uid;
          }
        });
        this.setState({
          dashboardIDs: dashIDs
        });
      } else {
        alert("There are no dashboards available");
      }
    });
  }

  toggleSlaButtonsPopup = () => {
    this.setState({
      slaButtonsPopupOpen: !this.state.slaButtonsPopupOpen,
    });
  };

  toggleFiltersModal = () => {
    this.setState({
      showFiltersModal: !this.state.showFiltersModal,
    });
  };

  setActiveTab = (value: any) => {
    this.setState({
      value,
    });
  };

  render() {
    const { slaButtonsPopupOpen, value, showFiltersModal, dashboardIDs } = this.state;
    return (
      <div className="overall-explorers-container">
        <div className="heading">
          <h1><img src={images.pageTitleIcon} alt="" /> Amazon Redshift</h1>
          <div className="buttons">
            <button className="filters-btn" onClick={this.toggleFiltersModal}>
              <i className="fa-solid fa-sliders"></i> Filters
            </button>
          </div>
        </div>
        <div className="tabs-container">
          <div className="header">
            <div className="tabs-left">
              <button className={value === 0 ? 'active' : ''} onClick={(e) => this.setActiveTab(0)}>Development</button>
              <button className={value === 1 ? 'active' : ''} onClick={(e) => this.setActiveTab(1)}>Test</button>
              <button className={value === 2 ? 'active' : ''} onClick={(e) => this.setActiveTab(2)}>Stage</button>
              <button className={value === 3 ? 'active' : ''} onClick={(e) => this.setActiveTab(3)}>Production</button>
            </div>
            <div className="tabs-right">
              <ul className="calendar">
                <li>Today</li>
                <li>1W</li>
                <li className="active">1M</li>
                <li>3M</li>
                <li>Custom</li>
              </ul>
              <div className="sla-menu-popup">
                <button className="sla-btn" onClick={this.toggleSlaButtonsPopup}>
                  <i className="fa-solid fa-gear"></i> SLA <i className="fa-solid fa-sort-down"></i>
                </button>
                {slaButtonsPopupOpen === true && (
                  <>
                    <div className={slaButtonsPopupOpen ? "sla-buttons-popup active" : "sla-buttons-popup"}>
                      <button className="active"><i className="fa-solid fa-circle-dot"></i> Performance</button>
                      <button><i className="fa-solid fa-circle-dot"></i> Reliability</button>
                      <button><i className="fa-solid fa-circle-dot"></i> Availability</button>
                      <button><i className="fa-solid fa-circle-dot"></i> End Usage</button>
                      <button><i className="fa-solid fa-circle-dot"></i> Security</button>
                      <button><i className="fa-solid fa-circle-dot"></i> Cost</button>
                    </div>
                    <div className="sla-buttons-popup-bg" onClick={this.toggleSlaButtonsPopup}></div>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="tabs-contents">
            {value === 0 ? (
              <Development dashId={dashboardIDs["overall-redshift-development"]} />
            ) : value === 1 ? (
              <Test dashId={dashboardIDs["overall-redshift-test"]} />
            ) : value === 2 ? (
              <Stage dashId={dashboardIDs["overall-redshift-stage"]} />
            ) : value === 3 ? (
              <Production dashId={dashboardIDs["overall-redshift-production"]} />
            ) : (
              <></>
            )}
          </div>
        </div>
        <FiltersModal isOpen={showFiltersModal} toggleFiltersModal={this.toggleFiltersModal} />
      </div>
    );
  }
}

export default OverallRedshiftExplorer;
