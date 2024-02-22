import React, { PureComponent } from 'react';
import { PanelProps } from '@grafana/data';
import './css/style.css';

class AppkubeTopResourcesRequestCountPanel extends PureComponent<PanelProps> {
  render() {
    return (
      <div className="resources-request-count-panel">
        <div className="resources-request-count-inner-panel">
          <div className="d-block heading">
            <span>Top Resources Request Count </span>
            <button>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC+SURBVHgBhVKLFcIgDLz6OoAbiBs4Ahu4giO4Ad0EnMARrJMUN+gGGmyilF/vvXuPHByEJB1yaOKZuOf4RXREz7ElPmODIj6I7wotn5H1zzRFok4ycLw3pUbLwoA6hvj1nm+88K2pMfzzGsUzaxBjwA05wiFT0L9GxeuxsO+Jx4I+99iGL4k7LHkHaGxDYanHSQyrEjcg1VciSONNw2RKDyi0B+CO/wAoFPJ3qI9cMMv8okMOzTxwHIZ8RNKuD7ctPJk3x1k4AAAAAElFTkSuQmCC"
                alt=""
              />
            </button>
          </div>
          <div className="lines-container">
            <div className="line-container">
              <div className="line">
                <span style={{ width: '100%' }}>api/users</span>
              </div>
            </div>
            <div className="line-container">
              <div className="line">
                <span style={{ width: '80%' }}>Cart/cart/link</span>
              </div>
            </div>
            <div className="line-container">
              <div className="line">
                <span style={{ width: '70%' }}>Cart/cart/link</span>
              </div>
            </div>
            <div className="line-container">
              <div className="line">
                <span style={{ width: '60%' }}>Cart/cart/link</span>
              </div>
            </div>
            <div className="line-container">
              <div className="line">
                <span style={{ width: '50%' }}>Frontend/Cart/addresss</span>
              </div>
            </div>
            <div className="line-container">
              <div className="line">
                <span style={{ width: '48%' }}>Frontend/Cart/addresss</span>
              </div>
            </div>
            <div className="line-container">
              <div className="line">
                <span style={{ width: '44%' }}>Metadata.google/internal/computermetadata/v1</span>
              </div>
            </div>
            <div className="line-container">
              <div className="line">
                <span style={{ width: '44%' }}>Frontend/Cart/addresss</span>
              </div>
            </div>
            <div className="line-container">
              <div className="line">
                <span style={{ width: '44%' }}>Metadata.google/internal/computermetadata/v5</span>
              </div>
            </div>
            <div className="line-container">
              <div className="line">
                <span style={{ width: '44%' }}>Frontend/Cart/addresss</span>
              </div>
            </div>
          </div>
          <div className="lines-graph">
            <span>0</span>
            <span>20</span>
            <span>40k</span>
            <span>60k</span>
            <span>80k</span>
            <span>100k</span>
            <span>120k</span>
          </div>
          <div className="count-box">
            <span></span>
            Count
          </div>
        </div>
      </div>
    );
  }
}

export default AppkubeTopResourcesRequestCountPanel;
