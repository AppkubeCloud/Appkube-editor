import React, { PureComponent } from 'react';

import { PanelProps } from '@grafana/data';

import './css/style.css';
import CostingChart from './Components/CostingChart';

class AppkubeNetworkCostingPanel extends PureComponent<PanelProps> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="network-costing-panel">
        <div className="heading">Network Costing</div>
        <div className="sub-heading">Provides insights into the expenses associated with different instarice types.</div>
        <div className="costing-container">
          <div className="costing-table">
            <table>
              <thead>
                <tr>
                  <th>Instance Type</th>
                  <th>Total Cost</th>
                  <th>Cost per Hour</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Pod-to-pod</td>
                  <td>$2,500</td>
                  <td>$3.25</td>
                </tr>
                <tr>
                  <td>Pod to Dabatabse</td>
                  <td>$1,500</td>
                  <td>$2.00</td>
                </tr>
                <tr>
                  <td>ELB</td>
                  <td>$2.000</td>
                  <td>$0.71</td>
                </tr>
                <tr>
                  <td>Worker Node</td>
                  <td>$1.000</td>
                  <td>$0.10</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="costing-chart">
            <CostingChart />
          </div>
        </div>
      </div>
    );
  }
}

export default AppkubeNetworkCostingPanel;
