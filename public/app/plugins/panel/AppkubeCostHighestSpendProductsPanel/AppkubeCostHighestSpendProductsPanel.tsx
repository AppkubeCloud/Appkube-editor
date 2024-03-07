import React, { PureComponent } from 'react';

import { PanelProps } from '@grafana/data';

import './css/style.css';

class AppkubeCostHighestSpendProductsPanel extends PureComponent<PanelProps> {
  render() {
    return (
      <div className="cost-highest-spend-products-table-panel">
        <div className="cost-highest-spend-products-inner">
          <div className="heading">{'Cost by highest spend products'}</div>
          <div className="common-table">
            <table cellPadding={0} cellSpacing={0}>
              <thead>
                <tr>
                  <th>
                    <div className="table-header">Product Name</div>
                  </th>
                  <th>
                    <div className="table-header">Current Month</div>
                  </th>
                  <th>
                    <div className="table-header">Last Month</div>
                  </th>
                  <th>
                    <div className="table-header">Trends</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="table-details">Appkube</div>
                  </td>
                  <td>
                    <div className="table-details">$61485</div>
                  </td>
                  <td>
                    <div className="table-details">$45896</div>
                  </td>
                  <td>
                    <div className="table-details green">+15%</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="table-details">Xformation</div>
                  </td>
                  <td>
                    <div className="table-details">$89742</div>
                  </td>
                  <td>
                    <div className="table-details">$32568</div>
                  </td>
                  <td>
                    <div className="table-details green">+35%</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="table-details">Procurement</div>
                  </td>
                  <td>
                    <div className="table-details">$36985</div>
                  </td>
                  <td>
                    <div className="table-details">$73691</div>
                  </td>
                  <td>
                    <div className="table-details green">+18%</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="table-details">Crm</div>
                  </td>
                  <td>
                    <div className="table-details">$15975</div>
                  </td>
                  <td>
                    <div className="table-details">$44365</div>
                  </td>
                  <td>
                    <div className="table-details green">+19%</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="table-details">Service Desk</div>
                  </td>
                  <td>
                    <div className="table-details">$95834</div>
                  </td>
                  <td>
                    <div className="table-details">$25697</div>
                  </td>
                  <td>
                    <div className="table-details green">+25%</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="table-details">Crms</div>
                  </td>
                  <td>
                    <div className="table-details">$95834</div>
                  </td>
                  <td>
                    <div className="table-details">$25697</div>
                  </td>
                  <td>
                    <div className="table-details green">+25%</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="table-details">Hrms</div>
                  </td>
                  <td>
                    <div className="table-details">$95834</div>
                  </td>
                  <td>
                    <div className="table-details">$25697</div>
                  </td>
                  <td>
                    <div className="table-details green">+25%</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="table-details">Hrm</div>
                  </td>
                  <td>
                    <div className="table-details">$95834</div>
                  </td>
                  <td>
                    <div className="table-details">$25697</div>
                  </td>
                  <td>
                    <div className="table-details green">+25%</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="table-details">Cms</div>
                  </td>
                  <td>
                    <div className="table-details">$95834</div>
                  </td>
                  <td>
                    <div className="table-details">$25697</div>
                  </td>
                  <td>
                    <div className="table-details green">+25%</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="table-details">Supply Chain</div>
                  </td>
                  <td>
                    <div className="table-details">$95834</div>
                  </td>
                  <td>
                    <div className="table-details">$25697</div>
                  </td>
                  <td>
                    <div className="table-details green">+25%</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="table-details">Procurement</div>
                  </td>
                  <td>
                    <div className="table-details">$95834</div>
                  </td>
                  <td>
                    <div className="table-details">$25697</div>
                  </td>
                  <td>
                    <div className="table-details green">+25%</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="table-details">Ems</div>
                  </td>
                  <td>
                    <div className="table-details">$95834</div>
                  </td>
                  <td>
                    <div className="table-details">$25697</div>
                  </td>
                  <td>
                    <div className="table-details green">+25%</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default AppkubeCostHighestSpendProductsPanel;
