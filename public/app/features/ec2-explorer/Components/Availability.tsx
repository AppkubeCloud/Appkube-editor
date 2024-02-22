import React, { Component } from "react";

class Availability extends Component {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="availabily-container">
        <div className="d-flex width-100">
          <div className="boxs width-50 m-r-2">
            <div className="instance-panel">
              <div className="d-flex align-items-center justify-content-between">
                <span className="d-block title">Instance Status</span>
                <button>Filter</button>
              </div>
              <p className="subtitle">
                Check the overall health of the EC2 instance, including its
                status (e.g., running, stopped) and any system-level issues
              </p>
              <div className="d-block p-t-15">
                <div className="d-flex width-100">
                  <div className="width-50">
                    <div className="circle-wrap">
                      <div className="circle">
                        <div className="mask full">
                          <div className="fill"></div>
                        </div>
                        <div className="mask half">
                          <div className="fill"></div>
                        </div>
                        <div className="inside-circle"> 75% </div>
                      </div>
                    </div>
                  </div>
                  <div className="width-50">
                    <div className="d-flex width-100">
                      <div className="instance-name  width-50 m-r-2">
                        <span className="d-block info">Instance ID</span>
                        <span className="d-block info">Instance Type</span>
                        <span className="d-block info">Availability Zone</span>
                        <span className="d-block info">System Checks</span>
                        <span className="d-block info">Custom Alerts</span>
                      </div>
                      <div className="instance-number width-50">
                        <span className="d-block details">i-1234</span>
                        <span className="d-block details">t2.micro</span>
                        <span className="d-block details">us-east-1a</span>
                        <span className="d-block details">Passed</span>
                        <span className="d-block details">No Alerts</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="boxs width-50">
            <div className="table-panel">
              <div className="d-flex align-items-center justify-content-between">
                <span className="d-block title">Alerts and Notifications</span>
                <button>Filter</button>
              </div>
              <p className="subtitle">
                A list of recent alerts and notifications related to the
                instance's availability
              </p>
              <div className="common-table">
                <table cellPadding={0} cellSpacing={0}>
                  <thead>
                    <tr>
                      <th>
                        <div className="table-header">
                          <span className="d-block">timestamp</span>
                        </div>
                      </th>
                      <th>
                        <div className="table-header">
                          <span className="d-block">Alert</span>{" "}
                        </div>
                      </th>
                      <th>
                        <div className="table-header">
                          {" "}
                          <span className="d-block">Description</span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <span className="table-details">
                          2023-11-06 09:45 AM
                        </span>
                      </td>
                      <td>
                        <span className="table-details">
                          Instance was stopped and then started
                        </span>
                      </td>
                      <td>
                        <span className="table-details">
                          Instance was stopped and then started. No issues
                          detected.
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="table-details">
                          2023-11-06 09:45 AM
                        </span>
                      </td>
                      <td>
                        <span className="table-details">
                          Instance was stopped and then started
                        </span>
                      </td>
                      <td>
                        <span className="table-details">
                          Instance was stopped and then started. No issues
                          detected.
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="table-details">
                          2023-11-06 09:45 AM
                        </span>
                      </td>
                      <td>
                        <span className="table-details">
                          Instance was stopped and then started
                        </span>
                      </td>
                      <td>
                        <span className="table-details">
                          Instance was stopped and then started. No issues
                          detected.
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="boxs width-100 m-t-4">
          <div className="table-panel">
            <div className="d-flex align-items-center justify-content-between">
              <span className="d-block title">Instances Health Check</span>
              <button>Filter</button>
            </div>
            <p className="subtitle">
              Detailed log of recent health check for a specific EC2 instance
            </p>
            <div className="common-table">
              <table cellPadding={0} cellSpacing={0}>
                <thead>
                  <tr>
                    <th>
                      <div className="table-header">
                        <span className="d-block">Instance ID</span>
                      </div>
                    </th>
                    <th>
                      <div className="table-header">
                        <span className="d-block">Instance type</span>
                      </div>
                    </th>
                    <th>
                      <div className="table-header">
                        <span className="d-block">Availability Zone</span>
                      </div>
                    </th>
                    <th>
                      <div className="table-header">
                        <span className="d-block">Instance Status </span>
                      </div>
                    </th>
                    <th>
                      <div className="table-header">
                        <span className="d-block">CPU Utilization</span>
                      </div>
                    </th>
                    <th>
                      <div className="table-header">
                        <span className="d-block">Disk Space Utilization</span>
                      </div>
                    </th>
                    <th>
                      <div className="table-header">
                        <span className="d-block">System Check</span>
                      </div>
                    </th>
                    <th>
                      <div className="table-header">
                        <span className="d-block">Instance CHeck</span>
                      </div>
                    </th>
                    <th>
                      <div className="table-header">
                        <span className="d-block">Alarm</span>
                      </div>
                    </th>
                    <th>
                      <div className="table-header">
                        <span className="d-block">System check</span>
                      </div>
                    </th>
                    <th>
                      <div className="table-header">
                        <span className="d-block">Instance check</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span className="table-details">i-0c1234dc</span>
                    </td>
                    <td>
                      <span className="table-details">t2.micro</span>
                    </td>
                    <td>
                      <span className="table-details">us-east-1a</span>
                    </td>
                    <td>
                      <span className="table-details">Running</span>
                    </td>
                    <td>
                      <span className="table-details">60%</span>
                    </td>
                    <td>
                      <span className="table-details">75%</span>
                    </td>
                    <td>
                      <span className="table-details">Passed</span>
                    </td>
                    <td>
                      <span className="table-details">Passed</span>
                    </td>
                    <td>
                      <span className="table-details">None</span>
                    </td>
                    <td>
                      <span className="table-details">2023-11-10 11:30 AM</span>
                    </td>
                    <td>
                      <span className="table-details">2023-11-10 11:33 AM</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="table-details">i-0c1234dc</span>
                    </td>
                    <td>
                      <span className="table-details">t2.micro</span>
                    </td>
                    <td>
                      <span className="table-details">us-east-1a</span>
                    </td>
                    <td>
                      <span className="table-details">Running</span>
                    </td>
                    <td>
                      <span className="table-details">60%</span>
                    </td>
                    <td>
                      <span className="table-details">75%</span>
                    </td>
                    <td>
                      <span className="table-details">Passed</span>
                    </td>
                    <td>
                      <span className="table-details">Passed</span>
                    </td>
                    <td>
                      <span className="table-details">None</span>
                    </td>
                    <td>
                      <span className="table-details">2023-11-10 11:30 AM</span>
                    </td>
                    <td>
                      <span className="table-details">2023-11-10 11:33 AM</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="table-details">i-0c1234dc</span>
                    </td>
                    <td>
                      <span className="table-details">t2.micro</span>
                    </td>
                    <td>
                      <span className="table-details">us-east-1a</span>
                    </td>
                    <td>
                      <span className="table-details">Running</span>
                    </td>
                    <td>
                      <span className="table-details">60%</span>
                    </td>
                    <td>
                      <span className="table-details">75%</span>
                    </td>
                    <td>
                      <span className="table-details">Passed</span>
                    </td>
                    <td>
                      <span className="table-details">Passed</span>
                    </td>
                    <td>
                      <span className="table-details">None</span>
                    </td>
                    <td>
                      <span className="table-details">2023-11-10 11:30 AM</span>
                    </td>
                    <td>
                      <span className="table-details">2023-11-10 11:33 AM</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="table-details">i-0c1234dc</span>
                    </td>
                    <td>
                      <span className="table-details">t2.micro</span>
                    </td>
                    <td>
                      <span className="table-details">us-east-1a</span>
                    </td>
                    <td>
                      <span className="table-details">Running</span>
                    </td>
                    <td>
                      <span className="table-details">60%</span>
                    </td>
                    <td>
                      <span className="table-details">75%</span>
                    </td>
                    <td>
                      <span className="table-details">Passed</span>
                    </td>
                    <td>
                      <span className="table-details">Passed</span>
                    </td>
                    <td>
                      <span className="table-details">None</span>
                    </td>
                    <td>
                      <span className="table-details">2023-11-10 11:30 AM</span>
                    </td>
                    <td>
                      <span className="table-details">2023-11-10 11:33 AM</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="table-details">i-0c1234dc</span>
                    </td>
                    <td>
                      <span className="table-details">t2.micro</span>
                    </td>
                    <td>
                      <span className="table-details">us-east-1a</span>
                    </td>
                    <td>
                      <span className="table-details">Running</span>
                    </td>
                    <td>
                      <span className="table-details">60%</span>
                    </td>
                    <td>
                      <span className="table-details">75%</span>
                    </td>
                    <td>
                      <span className="table-details">Passed</span>
                    </td>
                    <td>
                      <span className="table-details">Passed</span>
                    </td>
                    <td>
                      <span className="table-details">None</span>
                    </td>
                    <td>
                      <span className="table-details">2023-11-10 11:30 AM</span>
                    </td>
                    <td>
                      <span className="table-details">2023-11-10 11:33 AM</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Availability;
