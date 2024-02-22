import React, { PureComponent } from 'react';
import { PanelProps } from '@grafana/data';
import './css/style.css';

class AppkubeTopUsedFunctionPanel extends PureComponent<PanelProps> {
  render() {
    return (
      <div className="top-used-function-panel">
        <div className="top-used-function-inner">
          <div className="top-used-function-heading">Top Used Function</div>
          <div className="top-used-function-price">
            {`$12,875`}
            <p>2%</p>
          </div>
          <div className="top-used-function-text">{`Compared to $21,504 last year`}</div>
          <div className="top-used-function-contents">
            <div className="content">
              <span>Supplier Serach</span>
              <p>7:52</p>
              <strong className="up">2,540</strong>
            </div>
            <div className="content">
              <span>Search Product</span>
              <p>6:50</p>
              <strong className="down">2,304</strong>
            </div>
            <div className="content">
              <span>Invoice</span>
              <p>6:12</p>
              <strong className="up">2,140</strong>
            </div>
            <div className="content">
              <span>Po</span>
              <p>13:52</p>
              <strong className="up">1,976</strong>
            </div>
            <div className="content">
              <span>Ticket</span>
              <p>5:13</p>
              <strong className="down">1,903</strong>
            </div>
            <div className="content">
              <span>Solved Ticket</span>
              <p>18:36</p>
              <strong className="down">1,320</strong>
            </div>
            <div className="content">
              <span>Pending Ticket</span>
              <p>4:59</p>
              <strong className="up">1,103</strong>
            </div>
            <div className="content">
              <span>Mail</span>
              <p>22:59</p>
              <strong className="up">1,043</strong>
            </div>
            <div className="content">
              <span>Budget</span>
              <p>23:42</p>
              <strong className="down">1,001</strong>
            </div>
            <div className="content">
              <span>Requester</span>
              <p>3:50</p>
              <strong className="up">870</strong>
            </div>
            <div className="content">
              <span>Approver</span>
              <p>3:21</p>
              <strong className="up">820</strong>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AppkubeTopUsedFunctionPanel;
