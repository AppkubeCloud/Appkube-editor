import React, { PureComponent } from 'react';
import { PanelProps } from '@grafana/data';
import './css/style.css';

class AppkubeClusterEventsTabelPanel extends PureComponent<PanelProps> {
  render() {
    return (
      <div className="cluster-events-table-panel">
        <div className="cluster-events-table-inner-panel">
          <div className="d-block heading">Cluster Events</div>
          <div className="common-table">
            <table cellPadding={0} cellSpacing={0}>
              <thead>
                <tr>
                  <th>
                    <div className="table-header">Event Name</div>
                  </th>
                  <th>
                    <div className="table-header">Description</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="table-details">PodCreated</div>
                  </td>
                  <td>
                    <div className="table-details">Pod created and initialized successfully.</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="table-details">PodDeleted</div>
                  </td>
                  <td>
                    <div className="table-details">Pod deleted and resources releasedcess.</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="table-details">PodScheduled</div>
                  </td>
                  <td>
                    <div className="table-details">{`Pod scheduled to run on node 'node-name'.`}</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="table-details">PodFailed</div>
                  </td>
                  <td>
                    <div className="table-details">Pod Failed to start an error during execution</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="table-details">PodStarted</div>
                  </td>
                  <td>
                    <div className="table-details">{`Pod 'pod-name' started running successfully.`}</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="table-details">PodStopped</div>
                  </td>
                  <td>
                    <div className="table-details">{`Pod 'pod-name' has stopped running.`}</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="table-details">DeploymentCreated</div>
                  </td>
                  <td>
                    <div className="table-details">Deployment created.</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="table-details">DeploymentUpdated</div>
                  </td>
                  <td>
                    <div className="table-details">Deployment updated with new configurations.</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="table-details">DeploymentDeleted</div>
                  </td>
                  <td>
                    <div className="table-details">Deployment deleted and associated resources released</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="table-details">ServiceCreated</div>
                  </td>
                  <td>
                    <div className="table-details">Service created and exposed for accessing pods.</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="table-details">PodCreated</div>
                  </td>
                  <td>
                    <div className="table-details">Pod created and initialized successfully.</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="table-details">PodDeleted</div>
                  </td>
                  <td>
                    <div className="table-details">Pod deleted and resources releasedcess.</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="table-details">PodScheduled</div>
                  </td>
                  <td>
                    <div className="table-details">{`Pod scheduled to run on node 'node-name'.`}</div>
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

export default AppkubeClusterEventsTabelPanel;
