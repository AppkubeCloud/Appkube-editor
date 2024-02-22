import React, { Component } from 'react';
import { Modal } from '@grafana/ui';

const images: any = {
  hostedIcon: '/public/img/ec2-explorer/hosted.png',
  hrmsIcon: '/public/img/ec2-explorer/hrms.png',
  storageIcon: '/public/img/ec2-explorer/storage.png',
  procurementIcon: '/public/img/ec2-explorer/procurement.png',
  serviceDeskIcon: '/public/img/ec2-explorer/service-desk.png',
};
export interface ConfirmModalProps {
  isOpen: boolean;
}
class HostedServiceModal extends Component<any> {
  createData(name: any, enviroment: any, module: any, services: any) {
    return { name, enviroment, module, services };
  }
  constructor(props: any) {
    super(props);
    this.state = {
      hostedServiceModalOpen: false,
    };
  }

  handleHostedServiceModalClose = () => {
    this.props.toggleHostedServiceModal();
  };

  render() {
    const rows = [
      this.createData(
        <div className="product-name">
          <div className="d-flex align-items-center">
            <div className="icon hrms">
              <img src={images.hrmsIcon} alt="" />
            </div>
            <span className="name">HRMS</span>
            <div className="tag">
              <span className="d-block">3 TIER</span>
            </div>
          </div>
        </div>,
        'Production',
        'Web Tire',
        '-'
      ),
      this.createData(
        <div className="product-name">
          <div className="d-flex align-items-center">
            <div className="icon da">
              <img src={images.storageIcon} alt="" />
            </div>
            <span className="name">DA</span>
            <div className="tag da">
              <span className="d-block">SOA</span>
            </div>
          </div>
        </div>,
        'Stage',
        'Admissions',
        'JAVA'
      ),
      this.createData(
        <div className="product-name">
          <div className="d-flex align-items-center">
            <div className="icon procurement">
              <img src={images.procurementIcon} alt="" />
            </div>
            <span className="name">Procurement</span>
            <div className="tag">
              <span className="d-block">3 TIER</span>
            </div>
          </div>
        </div>,
        'Test',
        'Auxiliary Layer',
        '-'
      ),
      this.createData(
        <div className="product-name">
          <div className="d-flex align-items-center">
            <div className="icon service-desk">
              <img src={images.serviceDeskIcon} alt="" />
            </div>
            <span className="name">Service Desk</span>
            <div className="tag">
              <span className="d-block">3 TIER</span>
            </div>
          </div>
        </div>,
        'Development',
        'App Tire',
        '-'
      ),
    ];
    return (
      <Modal
        isOpen={this.props.isOpen}
        onDismiss={this.handleHostedServiceModalClose}
        title={
          <div className="d-block w-100 heading">
            <div className="d-inline-block icon">
              <span>
                <img src={images.hostedIcon} alt="" />
              </span>
            </div>
            <div className="d-inline-block content">
              <div className="d-block w-100 name">Hosted Services</div>
              <div className="d-block w-100 percantage">002</div>
            </div>
          </div>
        }
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="ec2-hosted-common-modal ec2-common-modal"
      >
        <div className="hostedService-modal-container">
          <table className="hostedService-table">
            <thead>
              <tr>
                <th>
                  <div className="service-header">
                    <span>Product</span>
                  </div>
                </th>
                <th>
                  <div className="service-header">Environment</div>
                </th>
                <th>
                  <div className="service-header">Module</div>
                </th>
                <th>
                  <div className="service-header">Services</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row: any) => (
                <tr key={row.name}>
                  <td scope="row">{row.name}</td>
                  <td align="center">
                    <div className="info">{row.enviroment}</div>
                  </td>
                  <td align="center">
                    <div className="info">{row.module}</div>
                  </td>
                  <td align="center">
                    <div className="info">{row.services}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="btn btn-cancel" onClick={this.handleHostedServiceModalClose}>
            Cancel
          </button>
        </div>
      </Modal>
    );
  }
}

export default HostedServiceModal;
