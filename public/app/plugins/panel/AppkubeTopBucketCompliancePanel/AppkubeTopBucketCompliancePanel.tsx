import React, { PureComponent } from 'react';

import { PanelProps } from '@grafana/data';

import './css/style.css';

class AppkubeTopBucketCompliancePanel extends PureComponent<PanelProps> {
  render() {
    return (
      <div className="top-bucket-compliance-panel">
        <div className="top-bucket-compliance-inner">
          <div className="header">
            <div className="heading">Top Bucket Compliance</div>
            <button>View All Buckets</button>
          </div>
          <div className="common-table">
            <table cellPadding={0} cellSpacing={0}>
              <thead>
                <tr>
                  <th>
                    <div className="table-header">Bucket name</div>
                  </th>
                  <th>
                    <div className="table-header">Severity</div>
                  </th>
                  <th>
                    <div className="table-header">Recommendations</div>
                  </th>
                  <th>
                    <div className="table-header">Status</div>
                  </th>
                  <th>
                    <div className="table-header">Assessed</div>
                  </th>
                  <th>
                    <div className="table-header">Affected</div>
                  </th>
                  <th>
                    <div className="table-header">Violation</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="table-details">Production/project4.pdf</div>
                  </td>
                  <td>
                    <div className="button" style={{ backgroundColor: '#FF2D2E' }}>
                      Critical
                    </div>
                  </td>
                  <td>
                    <div className="table-details">Network ACLs do not allow unrestricted inbound traffic</div>
                  </td>
                  <td>
                    <div className="table-details non-compliant">Non-Compliant</div>
                  </td>
                  <td>
                    <div className="table-details">11</div>
                  </td>
                  <td>
                    <div className="table-details">08</div>
                  </td>
                  <td>
                    <div className="table-details">9%</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="table-details">Development/project3.pdf</div>
                  </td>
                  <td>
                    <div className="button" style={{ backgroundColor: '#FF708B' }}>
                      High
                    </div>
                  </td>
                  <td>
                    <div className="table-details">Ensure the s3 bucket does not grant to everyone</div>
                  </td>
                  <td>
                    <div className="table-details non-compliant">Non-Compliant</div>
                  </td>
                  <td>
                    <div className="table-details">12</div>
                  </td>
                  <td>
                    <div className="table-details">02</div>
                  </td>
                  <td>
                    <div className="table-details">9%</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="table-details">Production/project4.pdf</div>
                  </td>
                  <td>
                    <div className="button" style={{ backgroundColor: '#FF9900' }}>
                      Medium
                    </div>
                  </td>
                  <td>
                    <div className="table-details">Ensure all data is transported from the S3bucket</div>
                  </td>
                  <td>
                    <div className="table-details compliant">Compliant</div>
                  </td>
                  <td>
                    <div className="table-details">11</div>
                  </td>
                  <td>
                    <div className="table-details">00</div>
                  </td>
                  <td>
                    <div className="table-details">N/A</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="table-details">Production/project4.xls</div>
                  </td>
                  <td>
                    <div className="button" style={{ backgroundColor: '#F9D33D' }}>
                      Low
                    </div>
                  </td>
                  <td>
                    <div className="table-details">Ensure the object versioning is enable</div>
                  </td>
                  <td>
                    <div className="table-details compliant">Compliant</div>
                  </td>
                  <td>
                    <div className="table-details">10</div>
                  </td>
                  <td>
                    <div className="table-details">00</div>
                  </td>
                  <td>
                    <div className="table-details">N/A</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="table-details">Development/project3.pdf</div>
                  </td>
                  <td>
                    <div className="button" style={{ backgroundColor: '#FF0000' }}>
                      Critical
                    </div>
                  </td>
                  <td>
                    <div className="table-details">Insecure Bucket policy</div>
                  </td>
                  <td>
                    <div className="table-details non-compliant">Non-Compliant</div>
                  </td>
                  <td>
                    <div className="table-details">09</div>
                  </td>
                  <td>
                    <div className="table-details">01</div>
                  </td>
                  <td>
                    <div className="table-details">9%</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="table-details">Production/project3.pdf</div>
                  </td>
                  <td>
                    <div className="button" style={{ backgroundColor: '#FF708B' }}>
                      High
                    </div>
                  </td>
                  <td>
                    <div className="table-details">Ensure access logging enabled</div>
                  </td>
                  <td>
                    <div className="table-details non-compliant">Non-Compliant</div>
                  </td>
                  <td>
                    <div className="table-details">22</div>
                  </td>
                  <td>
                    <div className="table-details">03</div>
                  </td>
                  <td>
                    <div className="table-details">N/A</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="table-details">Development/project3.pdf</div>
                  </td>
                  <td>
                    <div className="button" style={{ backgroundColor: '#FF9900' }}>
                      Medium
                    </div>
                  </td>
                  <td>
                    <div className="table-details">Ensure the object versioning is enable</div>
                  </td>
                  <td>
                    <div className="table-details compliant">Compliant</div>
                  </td>
                  <td>
                    <div className="table-details">20</div>
                  </td>
                  <td>
                    <div className="table-details">00</div>
                  </td>
                  <td>
                    <div className="table-details">N/A</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="table-details">Production/project2.xls</div>
                  </td>
                  <td>
                    <div className="button" style={{ backgroundColor: '#F9D33D' }}>
                      Low
                    </div>
                  </td>
                  <td>
                    <div className="table-details">Bucket encryption enabled</div>
                  </td>
                  <td>
                    <div className="table-details suppressed">Suppressed</div>
                  </td>
                  <td>
                    <div className="table-details">12</div>
                  </td>
                  <td>
                    <div className="table-details">00</div>
                  </td>
                  <td>
                    <div className="table-details">N/A</div>
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

export default AppkubeTopBucketCompliancePanel;
