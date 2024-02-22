import React, { PureComponent } from 'react';
import { PanelProps } from '@grafana/data';
import './css/style.css';

class AppkubeCostOfAllProductsPanel extends PureComponent<PanelProps> {
  render() {
    return (
      <div className="cost-all-products-panel">
        <div className="cost-all-products-inner">
          <div className="heading">Cost of All Products</div>
          <div className="price">$9,38,642</div>
        </div>
      </div>
    );
  }
}

export default AppkubeCostOfAllProductsPanel;
