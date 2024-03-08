import React, { Component } from 'react';

import { Modal } from '@grafana/ui';

const images: any = {
  hostedIcon: '/public/img/ec2-explorer/hosted.png',
  intanceIcon: '/public/img/ec2-explorer/intance.png',
  cpuIcon: '/public/img/ec2-explorer/cpu.png',
  memoryIcon: '/public/img/ec2-explorer/memory-card.png',
  networkIcon: '/public/img/ec2-explorer/network.png',
  storageIcon: '/public/img/ec2-explorer/storage.png',
};
export interface ConfirmModalProps {
  isOpen: boolean;
}
class ConfigurationModal extends Component<any> {
  constructor(props: any) {
    super(props);
    this.state = {
      configurationModalOpen: false,
    };
  }

  handleConfigurationModalClose = () => {
    this.props.toggleConfigurationModal();
  };

  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        onDismiss={this.handleConfigurationModalClose}
        title={
          <div className="d-block w-100 heading">
            <div className="d-inline-block icon">
              <span>
                <img src={images.hostedIcon} alt="" />
              </span>
            </div>
            <div className="d-inline-block content">
              <div className="d-block w-100 name">Configuration</div>
              <div className="d-block w-100 percantage">ID-12345</div>
            </div>
          </div>
        }
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="ec2-configuration-common-modal ec2-common-modal"
      >
        <div className="configuration-modal-container">
          <div className="d-flex align-items-center configuration-container">
            <div className="icon instance">
              <img src={images.intanceIcon} alt="" />
            </div>
            <div className="contents">
              <span className="configuration-name">Instance ID</span>
              <span className="configuration-info">i-01234567</span>
            </div>
          </div>
          <div className="d-flex align-items-center configuration-container">
            <div className="icon cpu">
              <img src={images.cpuIcon} alt="" />
            </div>
            <div className="contents">
              <span className="configuration-name">CPU</span>
              <span className="configuration-info">15GB</span>
            </div>
          </div>
          <div className="d-flex align-items-center configuration-container">
            <div className="icon memory">
              <img src={images.memoryIcon} alt="" />
            </div>
            <div className="contents">
              <span className="configuration-name">Memory</span>
              <span className="configuration-info">25GB</span>
            </div>
          </div>
          <div className="d-flex align-items-center configuration-container">
            <div className="icon network">
              <img src={images.networkIcon} alt="" />
            </div>
            <div className="contents">
              <span className="configuration-name">Network</span>
              <span className="configuration-info">2NIC Card</span>
            </div>
          </div>
          <div className="d-flex align-items-center configuration-container">
            <div className="icon storage">
              <img src={images.storageIcon} alt="" />
            </div>
            <div className="contents">
              <span className="configuration-name">Storage</span>
              <span className="configuration-info">64GB</span>
            </div>
          </div>
          <div className="d-flex align-items-center configuration-container">
            <div className="icon storage">
              <img src={images.storageIcon} alt="" />
            </div>
            <div className="contents">
              <span className="configuration-name">VPC ID</span>
              <span className="configuration-info">Default</span>
            </div>
          </div>
          <div className="d-flex align-items-center configuration-container">
            <div className="icon network">
              <img src={images.networkIcon} alt="" />
            </div>
            <div className="contents">
              <span className="configuration-name">Hostname Type</span>
              <span className="configuration-info">ip-172-32-32-222</span>
            </div>
          </div>
          <button className="btn btn-cancel" onClick={this.handleConfigurationModalClose}>
            Cancel
          </button>
        </div>
      </Modal>
    );
  }
}

export default ConfigurationModal;
