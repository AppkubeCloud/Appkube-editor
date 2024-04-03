import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { backendSrv } from 'app/core/services/backend_srv';
import { DashboardSearchItem } from 'app/features/search/types';

import Availability from './Components/Availability';
import Compliance from './Components/Compliance';
import ConfigurationModal from './Components/ConfigurationModal';
import EndUsage from './Components/EndUsage';
import HostedServiceModal from './Components/HostedServiceModal';
import Performance from './Components/Performance';
import Reliability from './Components/Reliability';
import Security from './Components/Security';
import SlaModal from './Components/SlaModal';

const images = {
  awsIcon: '/public/img/ec2-explorer/aws.png',
  hostedIcon: '/public/img/ec2-explorer/hosted.png',
  costIcon: '/public/img/ec2-explorer/cost.svg',
  configurationIcon: '/public/img/ec2-explorer/configuration.png',
  organizationIcon: '/public/img/ec2-explorer/organization .png',
  intanceIcon: '/public/img/ec2-explorer/intance.png',
  cpuIcon: '/public/img/ec2-explorer/cpu.png',
  memoryIcon: '/public/img/ec2-explorer/memory-card.png',
  networkIcon: '/public/img/ec2-explorer/network.png',
  storageIcon: '/public/img/ec2-explorer/storage.png',
  hrmsIcon: '/public/img/ec2-explorer/hrms.png',
  procurementIcon: '/public/img/ec2-explorer/procurement.png',
  serviceDeskIcon: '/public/img/ec2-explorer/service-desk.png',
  statusIcon: '/public/img/ec2-explorer/status.png',
};

interface LocalState {
  value: number;
  showConfigurationModal: boolean;
  showHostedServiceModal: boolean;
  showSlaModal: boolean;
  elementId: string;
  elementIds: string[] | undefined;
  dashboardIDs: Record<string,string>
};

const LAMBDA_EXPLORER_ELEMENTS_IDS = "lambdaexplorerElementIds";
const DASHBOARD_NAMES = ["lambda-performance", "lambda-availability", "lambda-reliability", "lambda-endUsage", "lambda-security", "lambda-compliance"];

class LambdaExplorer extends Component<Record<string, string>, LocalState> {
  constructor(props: Record<string, string>) {
    super(props);
    this.state = {
      value: 0,
      showConfigurationModal: false,
      showHostedServiceModal: false,
      showSlaModal: false,
      elementId: "",
      elementIds: [],
      dashboardIDs: {
        "lambda-performance": "",
        "lambda-availability": "",
        "lambda-reliability": "",
        "lambda-endUsage": "",
        "lambda-security": "",
        "lambda-compliance": "",
      }
    };
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
    const elementId = this.findParam("var-elementId", location.href);
    const elementIds: null | string[] | undefined = JSON.parse(
      localStorage.getItem(LAMBDA_EXPLORER_ELEMENTS_IDS) || '[]'
    );
    this.setState({ elementId: elementId });
    if (!elementId && !elementIds?.length) {
      alert("Please add element id");
    } else {
      if (elementIds?.length) {
        const currentId = elementIds.filter((item) => item === elementId);
        if (currentId.length) {
          this.getElementIdData(currentId[0]);
        } else {
          this.getElementIdData(elementId);
        }
      } else {
        this.getElementIdData(elementId);
      }
    }
  }

  getElementIdData = (elementId: string) => {
    let elementIds: null | string[] | undefined = JSON.parse(
      localStorage.getItem(LAMBDA_EXPLORER_ELEMENTS_IDS) || '[]'
    );
    elementIds!.push(elementId);
    elementIds = elementIds?.filter((value, index) => elementIds?.indexOf(value) === index);
    if (elementIds && elementIds.length) {
      localStorage.setItem(LAMBDA_EXPLORER_ELEMENTS_IDS, JSON.stringify(elementIds));
    } else {
      localStorage.setItem(LAMBDA_EXPLORER_ELEMENTS_IDS, JSON.stringify([this.state.elementId]));
    }
    this.setState({ elementIds: elementIds });
  }

  setActiveTab = (value: number) => {
    this.setState({
      value,
    });
  };

  toggleConfigurationModal = () => {
    this.setState({
      showConfigurationModal: !this.state.showConfigurationModal,
    });
  };

  toggleHostedServiceModal = () => {
    this.setState({
      showHostedServiceModal: !this.state.showHostedServiceModal,
    });
  };

  toggleSlaModal = () => {
    this.setState({
      showSlaModal: !this.state.showSlaModal,
    });
  };

  findParam = (paramName: string, url: string) => {
    if (!url) {
      url = location.href;
    }
    paramName = paramName.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    const regexS = "[\\?&]" + paramName + "=([^&#]*)";
    const regex = new RegExp(regexS);
    const results = regex.exec(url);
    return results == null ? "" : results[1];
  }

  removeElementId = (id: string) => {
    let elementIds = this.state.elementIds?.filter((item) => item !== id);
    localStorage.setItem(LAMBDA_EXPLORER_ELEMENTS_IDS, JSON.stringify(elementIds));
    this.setState({ elementIds });
  }

  changeQueryID = (item: string) => {
    let params = new URLSearchParams(location.search);
    params.set('var-elementId', item);
    window.location.search = params.toString();
  }

  renderTabs = (elementIds: string[]) => {
    const JSX: JSX.Element[] = [];
    let elementId = this.findParam("var-elementId", location.href);
    elementIds.forEach((item) => {
      JSX.push(
        <div
          className={`${elementId === item ? 'active' : ''} 
        page-name  
        d-flex 
        align-items-center 
        justify-content-between`}
          onClick={(e) => {
            if (item !== elementId) {
              e.stopPropagation();
              this.changeQueryID(item);
            }
          }}>
          <span>{item}</span>
          <i className="fa-solid fa-xmark"
            onClick={(e) => {
              if (elementIds.length > 1 && item !== elementId) {
                e.stopPropagation();
                this.removeElementId(item);
              }
            }}></i>
        </div>
      )
    });
    return JSX;
  }

  render() {
    const { value, showConfigurationModal, showHostedServiceModal, showSlaModal, elementId, elementIds, dashboardIDs } = this.state;
    return (
      <>
        <div className="aws-topology-container">
          <div className="aws-top-header-container">
            <div className="page-info d-flex align-items-center">
              {this.renderTabs(elementIds as string[])}
            </div>
          </div>
          {/* This is needed for data source to detect the element. don't change id */}
          <input style={{ display: "none" }} id="elementId" value={elementId as string} />
          <div className="aws-container d-flex justify-content-between align-items-center">
            <div className="name d-flex align-items-center">
              <div className="icon">
                <img src={images.awsIcon} alt="" />
              </div>
              <span>Amazon Web Services</span>
            </div>
            <div className="toggle-icon">
              <i className="fa-solid fa-caret-down"></i>
            </div>
          </div>
          <div className="breadCrumb-container d-flex justify-content-between align-items-center">
            <ul>
              <li>
                <Link to="/">AWS (6579077475645)</Link>
              </li>
              <li>
                <i className="fa-solid fa-chevron-right"></i>
              </li>
              <li>
                <Link to="/">VPC 1</Link>
              </li>
              <li>
                <i className="fa-solid fa-chevron-right"></i>
              </li>
              <li>
                <Link to="/">App Service</Link>
              </li>
              <li>
                <i className="fa-solid fa-chevron-right"></i>
              </li>
              <li className="active">
                <Link to="/">LAMBDA</Link>
              </li>
            </ul>
            <div className="alerts d-flex align-items-center">
              <span>Alerts</span>
              <i className="fa-solid fa-bell"></i>
            </div>
          </div>
          <div className="aws-panel-tabs">
            <div className="manage-dashboard-tabs">
              <ul>
                <li>
                  <button className={value === 0 ? 'active-tab' : ''} onClick={(e) => this.setActiveTab(0)}>
                    Performance
                  </button>
                </li>
                <li>
                  <button className={value === 1 ? 'active-tab' : ''} onClick={(e) => this.setActiveTab(1)}>
                    Availability
                  </button>
                </li>
                <li>
                  <button className={value === 2 ? 'active-tab' : ''} onClick={(e) => this.setActiveTab(2)}>
                    Reliability
                  </button>
                </li>
                <li>
                  <button className={value === 3 ? 'active-tab' : ''} onClick={(e) => this.setActiveTab(3)}>
                    EndUsage
                  </button>
                </li>
                <li>
                  <button className={value === 4 ? 'active-tab' : ''} onClick={(e) => this.setActiveTab(4)}>
                    Security
                  </button>
                </li>
                <li>
                  <button className={value === 5 ? 'active-tab' : ''} onClick={(e) => this.setActiveTab(5)}>
                    Compliance
                  </button>
                </li>
              </ul>
            </div>
            <div className="tabs-content">
            {value === 0 ? (
                <Performance dashId={dashboardIDs["lambda-performance"]}/>
              ) : value === 1 ? (
                <Availability dashId={dashboardIDs["lambda-availability"]}/>
              ) : value === 2 ? (
                <Reliability dashId={dashboardIDs["lambda-reliability"]}/>
              ) : value === 3 ? (
                <EndUsage dashId={dashboardIDs["lambda-endUsage"]}/>
              ) : value === 4 ? (
                <Security dashId={dashboardIDs["lambda-security"]}/>
              ) : value === 5 ? (
                <Compliance dashId={dashboardIDs["lambda-compliance"]}/>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
        <ConfigurationModal isOpen={showConfigurationModal} toggleConfigurationModal={this.toggleConfigurationModal} />
        <HostedServiceModal isOpen={showHostedServiceModal} toggleHostedServiceModal={this.toggleHostedServiceModal} />
        <SlaModal isOpen={showSlaModal} toggleSlaModal={this.toggleSlaModal} />
      </>
    );
  }
}

export default LambdaExplorer;
