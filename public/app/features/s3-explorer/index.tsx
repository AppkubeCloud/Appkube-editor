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
      elementId: "",
      elementIds: []
    };
    this.popupRef = React.createRef();
  }

  componentDidMount = () => {
    const elementId = this.findParam("var-elementId", location.href);
    const elementIds: null | string[] | undefined = JSON.parse(
      localStorage.getItem("s3explorerElementIds") || '[]'
    );
    this.setState({ elementId: elementId });
    if (!elementId && !elementIds?.length) {
      alert("Please add element id");
    } else {
      if(elementIds?.length) {
        const currentId = elementIds.filter((item) => item === elementId);
        if(currentId.length) {
          this.getElementIdData(currentId[0]);
        } else {
          this.getElementIdData(elementId);
        }
      } else {
        this.getElementIdData(elementId);
      }
    }
  }

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

  getElementIdData = (elementId: string) => {
    let elementIds: null | string[] | undefined = JSON.parse(
      localStorage.getItem("s3explorerElementIds") || '[]'
    );
    elementIds!.push(elementId);
    elementIds = elementIds?.filter((value, index) => elementIds?.indexOf(value) === index);
    if(elementIds && elementIds.length) {
      localStorage.setItem("s3explorerElementIds", JSON.stringify(elementIds));
    } else {
      localStorage.setItem("s3explorerElementIds", JSON.stringify([this.state.elementId]));
    }
    this.setState({elementIds: elementIds});
  }

  removeElementId = (id: string) => {
    let elementIds = this.state.elementIds?.filter((item: string) => item !== id);
    localStorage.setItem("s3explorerElementIds", JSON.stringify(elementIds));
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
        <li>
            <button className={elementId === item ? 'active' : ''} 
            onClick={(e) => {
              if(item !== elementId) {
                e.stopPropagation();
                this.changeQueryID(item);
              }
            }}
            >
              {item}
              <i className="fa-solid fa-xmark"
              onClick={(e) => {
            if(elementIds.length > 1 && item !== elementId) {
              e.stopPropagation();
              this.removeElementId(item);
            }
          }}></i>
            </button>
        </li>
      )
    });
    return JSX;
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
    const { value, showFiltersModal, elementIds } = this.state;
    return (
      <div className="eks-explorer-container">
        <div className="header">
          <span className="title">
            <span className="icon">
              <img src={images.pageTitleIcon} alt="" />
            </span>
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
              {this.renderTabs(elementIds as string[])}
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
