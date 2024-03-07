import React, { PureComponent } from 'react';

import { PanelProps } from '@grafana/data';
import './css/style.css';

class AppkubeEndUsagePanel extends PureComponent<PanelProps> {
  render() {
    return (
      <div className="end-usage-panel">
        <div className="end-usage-container">
          <div className="icon">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAICSURBVHgBlVTLcRpBEH09uHQ1yoAMjG5idbCUgRwBqwiACFgiMERglAEZCB+MVOWDyUBkoPXV2NN+PTu7EsuWaumqZWb68/r1TDeCUi71WgRTfn2euqpY619M8FO2OEHEfjpXOiTAssnBC1L8kHu0FEdmPYJl8bzwZzi3j/tZcFDMca3dtoDoXGrqElUZ6Kpuo+7BbJ1E05ZwJODQC8GCo7ui7rutisKnFaB47EKQ4nPdSKBPtnoUPlXQQEeS6LOxd7byXJGw+3F/8My93VPG+1uEoD2mRBwTdKceN3iSAOqu9KvpcZx97h9lEl4Zdo8O39AgdLj7t5FlOCTad8AvJsmZ5AuTrDHQWychtuuZ2AXHJ1myrAvrvVhqbntzqMCMHXAbk6wCmMmj2GPeF/eH/oeKyka2BLpRvCOKvOhc/K5ZPsZyuq5S2aQUbfIS2+ih3i5eq04YdlhqGYfI3O+xCvkIMOWSoVkyv5FZVXaicy6jBr8F/cbOGvsN2KycFLKZlICRRcGSQSx9orGVwspz0Iey4zSwl45agfqsLB8tRSwgZLb5XUt+YC169IW7nAzO3+hGDEqlmKAdv2XoX8a/Am5EmjIe2AswY9uv+9Fpq2dlH7YUY2Zgdm/Wo5aEL3thZ7Lp0z4+CZCSBjb7OCUm/APm1NxF+/BUwF4JcqAtwWn/D+qu9Q1EzMaFAAAAAElFTkSuQmCC"
              alt=""
            />
          </div>
          <div className="panel-details">
            <span className="title">End Usage</span>
            <div className="percentage-info">
              <span className="number">99%</span>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAGCAYAAADzG6+8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABPSURBVHgBlcu9DYAgFEXhY94OzqBO4SaOgrs4BbFiHoaAQEFBePyc5Ba3+EDLHob/MiyVkD1DnoKlidje8gM3zw6fdzqsUQfLEClYplADR8S1IOfg8LfsAAAAAElFTkSuQmCC"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AppkubeEndUsagePanel;
