import React, { PureComponent } from 'react';

import { PanelProps } from '@grafana/data';

import Tooltip from "./Tooltip";
import './css/style.css';

const colors: string[] = [
  '#F44336',
  '#FFEBEE',
  '#FFCDD2',
  '#EF9A9A',
  '#E57373',
  '#EF5350',
  '#E53935',
  '#D32F2F',
  '#C62828',
  '#B71C1C',
  '#FF8A80',
  '#FF5252',
  '#FF1744',
  '#D50000',
  '#FCE4EC',
  '#F8BBD0',
  '#F48FB1',
  '#F06292',
  '#EC407A',
  '#E91E63',
  '#D81B60',
  '#C2185B',
  '#AD1457',
  '#880E4F',
  '#FF80AB',
  '#FF4081',
  '#F50057',
  '#C51162',
  '#F3E5F5',
  '#E1BEE7',
  '#CE93D8',
  '#BA68C8',
  '#AB47BC',
  '#9C27B0',
  '#8E24AA',
  '#7B1FA2',
  '#6A1B9A',
  '#4A148C',
  '#EA80FC',
  '#E040FB',
  '#D500F9',
  '#AA00FF',
  '#EDE7F6',
  '#D1C4E9',
  '#B39DDB',
  '#9575CD',
  '#7E57C2',
  '#673AB7',
  '#5E35B1',
  '#512DA8',
  '#4527A0',
  '#311B92',
  '#B388FF',
  '#7C4DFF',
  '#651FFF',
  '#6200EA',
  '#E8EAF6',
  '#C5CAE9',
  '#9FA8DA',
  '#7986CB',
  '#5C6BC0',
  '#3F51B5',
  '#3949AB',
  '#303F9F',
  '#283593',
  '#1A237E',
  '#8C9EFF',
  '#536DFE',
  '#3D5AFE',
  '#304FFE',
  '#E3F2FD',
  '#BBDEFB',
  '#90CAF9',
  '#64B5F6',
  '#42A5F5',
  '#2196F3',
  '#1E88E5',
  '#1976D2',
  '#1565C0',
  '#0D47A1',
  '#82B1FF',
  '#448AFF',
  '#2979FF',
  '#2962FF',
  '#E1F5FE',
  '#B3E5FC',
  '#81D4FA',
  '#4FC3F7',
  '#29B6F6',
  '#03A9F4',
  '#039BE5',
  '#0288D1',
  '#0277BD',
  '#01579B',
  '#80D8FF',
  '#40C4FF',
  '#00B0FF',
  '#0091EA',
  '#E0F7FA',
  '#B2EBF2',
  '#80DEEA',
  '#4DD0E1',
  '#26C6DA',
  '#00BCD4',
  '#00ACC1',
  '#0097A7',
  '#00838F',
  '#006064',
  '#84FFFF',
  '#18FFFF',
  '#00E5FF',
  '#00B8D4',
  '#E0F2F1',
  '#B2DFDB',
  '#80CBC4',
  '#4DB6AC',
  '#26A69A',
  '#009688',
  '#00897B',
  '#00796B',
  '#00695C',
  '#004D40',
  '#A7FFEB',
  '#64FFDA',
  '#1DE9B6',
  '#00BFA5',
  '#E8F5E9',
  '#C8E6C9',
  '#A5D6A7',
  '#81C784',
  '#66BB6A',
  '#4CAF50',
  '#43A047',
  '#388E3C',
  '#2E7D32',
  '#1B5E20',
  '#B9F6CA',
  '#69F0AE',
  '#00E676',
  '#00C853',
  '#F1F8E9',
  '#DCEDC8',
  '#C5E1A5',
  '#AED581',
  '#9CCC65',
  '#8BC34A',
  '#7CB342',
  '#689F38',
  '#558B2F',
  '#33691E',
  '#CCFF90',
  '#B2FF59',
  '#76FF03',
  '#64DD17',
  '#F9FBE7',
  '#F0F4C3',
  '#E6EE9C',
  '#DCE775',
  '#D4E157',
  '#CDDC39',
  '#C0CA33',
  '#AFB42B',
  '#9E9D24',
  '#827717',
  '#F4FF81',
  '#EEFF41',
  '#C6FF00',
  '#AEEA00',
  '#FFFDE7',
  '#FFF9C4',
  '#FFF59D',
  '#FFF176',
  '#FFEE58',
  '#FFEB3B',
  '#FDD835',
  '#FBC02D',
  '#F9A825',
  '#F57F17',
  '#FFFF8D',
  '#FFFF00',
  '#FFEA00',
  '#FFD600',
  '#FFF8E1',
  '#FFECB3',
  '#FFE082',
  '#FFD54F',
  '#FFCA28',
  '#FFC107',
  '#FFB300',
  '#FFA000',
  '#FF8F00',
  '#FF6F00',
  '#FFE57F',
  '#FFD740',
  '#FFC400',
  '#FFAB00',
  '#FFF3E0',
  '#FFE0B2',
  '#FFCC80',
  '#FFB74D',
  '#FFA726',
  '#FF9800',
  '#FB8C00',
  '#F57C00',
  '#EF6C00',
  '#E65100',
  '#FFD180',
  '#FFAB40',
  '#FF9100',
  '#FF6D00',
  '#FBE9E7',
  '#FFCCBC',
  '#FFAB91',
  '#FF8A65',
  '#FF7043',
  '#FF5722',
  '#F4511E',
  '#E64A19',
  '#D84315',
  '#BF360C',
  '#FF9E80',
  '#FF6E40',
  '#FF3D00',
  '#DD2C00',
  '#EFEBE9',
  '#D7CCC8',
  '#BCAAA4',
  '#A1887F',
  '#8D6E63',
  '#795548',
  '#6D4C41',
  '#5D4037',
  '#4E342E',
  '#3E2723',
  '#FAFAFA',
  '#F5F5F5',
  '#EEEEEE',
  '#E0E0E0',
  '#BDBDBD',
  '#9E9E9E',
  '#757575',
  '#616161',
  '#424242',
  '#212121',
  '#ECEFF1',
  '#CFD8DC',
  '#B0BEC5',
  '#90A4AE',
  '#78909C',
  '#607D8B',
  '#546E7A',
  '#455A64',
  '#37474F',
  '#263238',
  '#000000',
];

interface DataItem {
  timestamp: string;
  value: number;
}

interface Data {
  "Node Failures": [
    DataItem
  ]
}


class NodeFailurePanel extends PureComponent<PanelProps> {

  manipulateData = (data: Data) => {
    let dataArray: DataItem[] = [];
    data['Node Failures'].map((item: any) => {
      let date = new Date(item.timestamp);
      const yyyy = date.getFullYear();
      let mm = date.getMonth() + 1; // Months start at 0!
      let dd = date.getDate();
      dataArray.push({
        timestamp: dd + '/' + mm + '/' + yyyy,
        value: item.value
      });
    });
    return this.renderGraph(dataArray);
  }

  generateEqualDistanceNumbers = (maxValue: number) => {
    const stepSize = Math.ceil(maxValue / 10); // Calculate step size based on maxValue
    const numbers = [];
    for (let i = stepSize; i <= maxValue; i += stepSize) {
      numbers.push(i);
    }
    if (numbers[numbers.length - 1] !== maxValue) {
      numbers.push(maxValue); // Ensure the maxValue is included in the array
    }
    return numbers;
  }

  renderGraph = (data: DataItem[]) => {
    const JSX: JSX.Element[] = [];
    const DatesJSX: JSX.Element[] = [];
    const valueArray: number[] = [];
    data.map((item) => {
      valueArray.push(item.value);
    })
    const maxNum = Math.max.apply(Math, valueArray);
    data.map((item: DataItem, i: number) => {
      DatesJSX.push(
        <div className="graph">
          <label htmlFor="Lambda">{item.timestamp}</label>
          {item.value > 0 ? <div className="line">
            <span style={{
              width: `${(100 * item.value) / maxNum}%`,
              backgroundColor: `${colors[i]}`
            }}
            >
              <Tooltip content={String(item.value)}><span>{item.value}</span></Tooltip>
            </span>
            <span className="item-value">{item.value}</span>
          </div> :
            <div className="item-value">0</div>
          }
        </div >
      )
    });

    const xAxisNumbers = this.generateEqualDistanceNumbers(maxNum);
    JSX.push(
      <>
        <div className="cost-highest-spend-target-panel">
          <div className="cost-highest-spend-target-inner">
            <div className="header">
              <div className="heading">{this.props.options.title}</div>
              <div className="buttons">
                <button className="icon">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADNSURBVHgB7ZThDcIgEIWfxv92BNzAERjBDXQEN2g3KU7gCNZJiht0Az3iIQ0Ch7/tS760wONxSa8Af6eVsK6JA7Hl8YMwhOVxT9x5rihF3Ihnhp49/l0MG2dmHVVseG2sDfQbuoKni6r9aBMZNXHk0C5aa4jzbDzxHKRApwu+5Ta3EBQHKn4OCa8ldon5qRQoyUqGdeY0DVmKOBH7kkmjshUQukFJRt/QpQ/Q/nCw2NhXhMZWqJQzGuR/PRfapDbWXA4aoRKLd0sNWOT1As99PToFwXcPAAAAAElFTkSuQmCC"
                    alt=""
                  />
                </button>
                <button className="icon">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADjSURBVHgB1VPRDYJADK3EARihbsIIjHAjsIG4gRvQDcQJZBMdwQ20l7SmXAp3xh95yUtK3+vjjjsA/h07UyMzJDoxH0mv1Ac985UwHYzoHF+vYgU+RuZB3pziLNrkDXqB0dgyj7CMqDXM64rns2WUlcV6cHyDaCTe2ZYtotiZZy/UhimCzBaBJKA2qyH4EWjqOmeuII/nN4E56DdDCVs6KBdxKDhhZHrkhHawcCi9WY0X5oUirFwbDbxA/jQ19FYSqEZcCUTz4qJ/uWHeYX7RFUG01hvcm5ocfXR6E/OU9Ag2gzffWkrwdvUaogAAAABJRU5ErkJggg=="
                    alt=""
                  />
                </button>
              </div>
            </div>
            <div className="graph-container">
              {DatesJSX}
            </div>
            <div className="lines-graph-container">
              {xAxisNumbers.map((item) => {
                return <span key={item}>{item}</span>
              })}
            </div>
          </div>
        </div>
      </>
    );
    return JSX;
  }

  render() {
    const { data } = this.props;
    return (
      <>
        {JSON.parse(data?.series[0]?.meta?.custom?.data) ?
          this.manipulateData(JSON.parse(data?.series[0]?.meta?.custom?.data)) :
          <div>No Data Available!</div>}
      </>
    );
  }
}

export default NodeFailurePanel;
