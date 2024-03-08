import React, { Component } from 'react';

import { Modal } from '@grafana/ui';

const images: any = {
  hostedIcon: '/public/img/ec2-explorer/hosted.png',
};
export interface ConfirmModalProps {
  isOpen: boolean;
}
class SlaModal extends Component<any> {
  constructor(props: any) {
    super(props);
    this.state = {
      slaModalOpen: false,
    };
  }

  handleSlaModalClose = () => {
    this.props.toggleSlaModal();
  };

  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        onDismiss={this.handleSlaModalClose}
        title={
          <div className="d-block w-100 heading">
            <div className="d-inline-block icon">
              <span>
                <img src={images.hostedIcon} alt="" />
              </span>
            </div>
            <div className="d-inline-block content">
              <div className="d-block w-100 name">SLA</div>
              <div className="d-block w-100 percantage">83.66%</div>
            </div>
          </div>
        }
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="ec2-sla-common-modal ec2-common-modal"
      >
        <div className="sla-modal-container">
          <div className="d-block w-100 sla-container">
            <div className="d-block w-100 sla-bar">
              <div className="d-inline-block sla-name">Peformance</div>
              <div className="d-inline-block percantage">
                <span style={{ backgroundColor: '#FAA24B', width: '89%' }}>89%</span>
              </div>
            </div>
            <div className="d-block w-100 sla-bar">
              <div className="d-inline-block sla-name">Reliabilitiy</div>
              <div className="d-inline-block percantage">
                <span style={{ backgroundColor: '#00B929', width: '99%' }}>99%</span>
              </div>
            </div>
            <div className="d-block w-100 sla-bar">
              <div className="d-inline-block sla-name">Availability</div>
              <div className="d-inline-block percantage">
                <span style={{ backgroundColor: '#FF2D2E', width: '67%' }}>67%</span>
              </div>
            </div>
            <div className="d-block w-100 sla-bar">
              <div className="d-inline-block sla-name">Security</div>
              <div className="d-inline-block percantage">
                <span style={{ backgroundColor: '#00B929', width: '99%' }}>99%</span>
              </div>
            </div>
            <div className="d-block w-100 sla-bar">
              <div className="d-inline-block sla-name">End Usage</div>
              <div className="d-inline-block percantage">
                <span style={{ backgroundColor: '#00B929', width: '99%' }}>99%</span>
              </div>
            </div>
          </div>
          <div className="data-status-info d-flex align-items-center justify-content-center">
            <div className="d-flex align-items-center">
              <div className="icon green"></div>
              <span className="percantage">{'>98%'}</span>
            </div>
            <div className="d-flex align-items-center">
              <div className="icon orange"></div>
              <span className="percantage">{'>90%'}</span>
            </div>
            <div className="d-flex align-items-center">
              <div className="icon red"></div>
              <span className="percantage">{'<90%'}</span>
            </div>
          </div>
          <button className="btn btn-cancel" onClick={this.handleSlaModalClose}>
            Cancel
          </button>
        </div>
      </Modal>
    );
  }
}

export default SlaModal;
