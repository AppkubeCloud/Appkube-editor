import React, { PureComponent } from 'react';

import { PanelProps } from '@grafana/data';

import './css/style.css';

interface DataRow {
  badgeImage: string;
  badgeTitle: string;
}

class AppkubeImageBadgePanel extends PureComponent<PanelProps> {
  constructor(props: any) {
    super(props);
  }
  renderTotalFunctionsData = (dataRow: DataRow) => {
    return (
      <div className="badge-box">
        <div className="badge-circle">
          <img src={dataRow?.badgeImage ? dataRow.badgeImage : 'data:image/png;base64,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'} alt="" />
        </div>
        <div className="badge-contents">
          <span title={dataRow?.badgeTitle ? dataRow.badgeTitle : 'Total Functions'}>{dataRow?.badgeTitle ? dataRow.badgeTitle : 'Total Functions'}</span>
          <strong>{`540,549`}</strong>
        </div>
      </div>
    );
  };

  renderFrames = (series: string | any[]) => {
    const retData: any = [];
    for (let i = 0; i < series.length; i++) {
      let cardJSX: any = [];
      cardJSX = this.renderTotalFunctionsData(this.props.options.editBadgeBox?.length ? this.props.options.editBadgeBox[i] : '');
      retData.push(cardJSX);
    }
    return retData;
  };

  render() {
    const { data } = this.props;
    if (data && data.series && data.series.length > 0) {
      const { series } = data;
      return <div className="image-badge-panel">{this.renderFrames(series)}</div>;
    } else {
      return <div>No data available</div>;
    }
  }
}

export default AppkubeImageBadgePanel;
