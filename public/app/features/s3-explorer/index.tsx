import React, { Component } from 'react';
import FiltersModal from './Components/FiltersModal';
const images: any = {
  slaIcon: '/public/img/lambda/sla.png',
  pageTitleIcon: '/public/img/s3-explorer/page-title-icon.png',
};

class S3Explorer extends Component<any, any> {
  popupRef: any;
  constructor(props: any) {
    super(props);
    this.state = {
      slaPopUpOpen: false,
      showFiltersModal: false,
      value: 0,
    };
    this.popupRef = React.createRef();
  }
  setActiveTab = (value: any) => {
    this.setState({
      value,
    });
  };

  toggleFiltersModal = () => {
    this.setState({
      showFiltersModal: !this.state.showFiltersModal,
    });
  };

  toggleSla = () => {
    this.setState((prevState: { slaPopUpOpen: any }) => ({
      slaPopUpOpen: !prevState.slaPopUpOpen,
    }));
  };

  render() {
    const { value, showFiltersModal } = this.state;
    return (
      <div className="eks-explorer-container">
        <div className="header">
          <span className="title">
            <div className="icon">
              <img src={images.pageTitleIcon} alt="" />
            </div>
            {'S3 (Simple Storage Service)'}
          </span>
          <div className="header-btns">
            <button className="filter-btn" onClick={this.toggleFiltersModal}>
              <i className="fa-solid fa-sliders"></i> Filters
            </button>
          </div>
        </div>
        <div className="tabs-container">
          <div className="tabs">
            <ul>
              <li className={value === 0 ? 'active' : ''} onClick={(e) => this.setActiveTab(0)}>
                Development
              </li>
              <li className={value === 1 ? 'active' : ''} onClick={(e) => this.setActiveTab(1)}>
                Test
              </li>
              <li className={value === 2 ? 'active' : ''} onClick={(e) => this.setActiveTab(2)}>
                Stage
              </li>
              <li className={value === 3 ? 'active' : ''} onClick={(e) => this.setActiveTab(3)}>
                Production
              </li>
            </ul>
          </div>
          <div className="right-part">
            <div className="time-duration-conatiner">
              <ul>
                <li>Today</li>
                <li>1W</li>
                <li className="active">1M</li>
                <li>3M</li>
                <li>Custom</li>
              </ul>
            </div>
            <button className="sla-btn" onClick={this.toggleSla}>
              <i className="fa-solid fa-gear"></i>SLA
              <i className="fa-solid fa-caret-down"></i>
            </button>
            {this.state.slaPopUpOpen && (
              <>
                <div className="sla-popup">
                  <ul>
                    <li className="sla-name active">
                      <a href="#">
                        <img src={images.slaIcon} alt="" />
                        <span className="name">Performance</span>
                      </a>
                    </li>
                    <li className="sla-name ">
                      <a href="#">
                        <img src={images.slaIcon} alt="" />
                        <span className="name">Reliablity</span>
                      </a>
                    </li>
                    <li className="sla-name">
                      <a href="#">
                        <img src={images.slaIcon} alt="" />
                        <span className="name">Availiablity</span>
                      </a>
                    </li>
                    <li className="sla-name">
                      <a href="#">
                        <img src={images.slaIcon} alt="" />
                        <span className="name">End Usage</span>
                      </a>
                    </li>
                    <li className="sla-name">
                      <a href="#">
                        <img src={images.slaIcon} alt="" />
                        <span className="name">Security</span>
                      </a>
                    </li>
                    <li className="sla-name">
                      <a href="#">
                        <img src={images.slaIcon} alt="" />
                        <span className="name">Cost</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="sla-shadow"></div>
              </>
            )}
          </div>
        </div>
        <div className="tabs-content-container">
          {value === 0 ? (
            'Development'
          ) : value === 1 ? (
            'Test'
          ) : value === 2 ? (
            'Stage'
          ) : value === 3 ? (
            'Production'
          ) : (
            <></>
          )}
        </div>
        <FiltersModal isOpen={showFiltersModal} toggleFiltersModal={this.toggleFiltersModal} />
      </div>
    );
  }
}
export default S3Explorer;
