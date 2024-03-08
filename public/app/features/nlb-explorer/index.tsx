import React, { Component } from 'react';

import FiltersModal from './Components/FiltersModal';

const images: any = { slaIcon: '/public/img/lambda/sla.png' };

class NLBExplorer extends Component<any, any> {
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
      <div className="nlb-explorer-container">
        <div className="header">
          <span className="title">{'Network Load Balancer'}</span>
          <div className="right-part">
            <div className="header-btns">
              <button className="filter-btn" onClick={this.toggleFiltersModal}>
                <i className="fa-solid fa-sliders"></i> Filters
              </button>
              <button className="sla-btn" onClick={this.toggleSla}>
                <i className="fa-solid fa-gear"></i>SLA
                <i className="fa-solid fa-caret-down"></i>
              </button>
              {this.state.slaPopUpOpen && (
                <>
                  <div ref={this.popupRef} className="sla-popup">
                    <ul>
                      <li className="sla-name">
                        <button className="active">
                          <img src={images.slaIcon} alt="" />
                          <span className="name">Performance</span>
                        </button>
                      </li>
                      <li className="sla-name">
                        <button>
                          <img src={images.slaIcon} alt="" />
                          <span className="name">Reliablity</span>
                        </button>
                      </li>
                      <li className="sla-name">
                        <button>
                          <img src={images.slaIcon} alt="" />
                          <span className="name">Availiablity</span>
                        </button>
                      </li>
                      <li className="sla-name">
                        <button>
                          <img src={images.slaIcon} alt="" />
                          <span className="name">End Usage</span>
                        </button>
                      </li>
                      <li className="sla-name">
                        <button>
                          <img src={images.slaIcon} alt="" />
                          <span className="name">Security</span>
                        </button>
                      </li>
                      <li className="sla-name">
                        <button>
                          <img src={images.slaIcon} alt="" />
                          <span className="name">Cost</span>
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="sla-shadow" onClick={this.toggleSla}></div>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="tabs-container">
          <div className="tabs">
            <ul>
              <li>
                <button className={value === 0 ? 'active' : ''} onClick={(e) => this.setActiveTab(0)}>
                  Development
                </button>
              </li>
              <li>
                <button className={value === 1 ? 'active' : ''} onClick={(e) => this.setActiveTab(1)}>
                  Test
                </button>
              </li>
              <li>
                <button className={value === 2 ? 'active' : ''} onClick={(e) => this.setActiveTab(2)}>
                  Stage
                </button>
              </li>
              <li>
                <button className={value === 3 ? 'active' : ''} onClick={(e) => this.setActiveTab(3)}>
                  Production
                </button>
              </li>
            </ul>
          </div>
          <button className="change-product-btn">Change Product</button>
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
export default NLBExplorer;
