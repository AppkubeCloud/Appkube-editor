import React, { Component } from 'react';

import { Modal } from '@grafana/ui';

export interface ConfirmModalProps {
  isOpen: boolean;
}
class FiltersModal extends Component<any> {
  constructor(props: any) {
    super(props);
    this.state = {
      filtersModalOpen: false,
    };
  }

  handleFiltersModalClose = () => {
    this.props.toggleFiltersModal();
  };

  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        onDismiss={this.handleFiltersModalClose}
        title={'Filters'}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="lambda-filters-modal"
      >
        <div className="select-department-container">
          <div className="heading">Select Department</div>
          <div className="radio-buttons-group">
            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="Hr" />
              <label className="form-check-label" htmlFor="Hr">
                HR
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="Invoice" />
              <label className="form-check-label" htmlFor="Invoice">
                Invoice
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="Vendor" />
              <label className="form-check-label" htmlFor="Vendor">
                Vendor
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="Analytics" />
              <label className="form-check-label" htmlFor="Analytics">
                Analytics
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="Finance" />
              <label className="form-check-label" htmlFor="Finance">
                Finance
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="Operations" />
              <label className="form-check-label" htmlFor="Operations">
                Operations
              </label>
            </div>
          </div>
          <div className="buttons">
            <button className="btn clear-btn">Clear</button>
            <button className="btn submit-btn">Submit</button>
          </div>
        </div>
      </Modal>
    );
  }
}

export default FiltersModal;
