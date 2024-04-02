import * as d3 from 'd3';
import React, { PureComponent, createRef } from 'react';

import { PanelProps } from '@grafana/data';

import './css/style.css';
import ErrorImg from './img/error.svg';

interface DataItem {
  [key: string]: string | number;
  percentage: number;
}

interface ApiData {
  Cpu_Usage: number;
  Memory_Usage: number;
  Storage_Avail: number;
}

interface ChartData {
  data: DataItem;
  endAngle: number;
  index: number;
  padAngle: number;
  startAngle: number;
  value: number;
}

interface Series {
  name: string;
  refId: string;
  meta: {
    custom: {
      data: string;
      error: string;
      query: {
        queryString: string;
      };
    };
  };
}

let data: ApiData;
let width = 300;
let height = 300;

class AppkubePodsOverviewPanel extends PureComponent<PanelProps> {
  constructor(props: any) {
    super(props);
  }

  private svgRef = createRef<SVGSVGElement>();

  private thickness = 25;

  manipulateData = (data: ApiData) => {
    const dataArray: DataItem[] = [];
    let total = 0;
    for (const property in data) {
      total = total + data[property as keyof ApiData];
    }
    for (const property in data) {
      dataArray.push({
        [property]: data[property as keyof ApiData],
        percentage: data[property as keyof ApiData] ? (100 * data[property as keyof ApiData]) / total : 0
      })
    }
    setTimeout(() => this.drawChart(dataArray), 500);
  }

  drawChart(data: DataItem[]) {
    const svg = d3.select(this.svgRef.current).attr('width', 300).attr('height', 300);

    svg.selectAll('*').remove(); // Clear previous elements

    const radius = Math.min(width, height) / 2;
    const innerRadius = radius * 0.6;
    const colors = [
      '#F9D33D',
      '#FF2D2E',
      '#53CA43',
      '#FE708D',
      '#8676FF',
      '#88E143',
      '#991BF9',
      '#FF708B',
      '#00B929',
      '#FAA14C',
      '#F9629A',
      '#A145FF',
      '#9283FF',
      '#2B5AFF',
      '#FA6298',
      '#FF7E7E',
      '#669AFF',
      '#E8A5FF',
      '#F8A243',
      '#01F1E3',
      '#FE2E2F',
      '#FA71A3',
      '#FAAB5D',
      '#F9D751',
      '#7E49FC',
      '#FF8198',
      '#FFBA69',
      '#3247E5',
      '#438A26',
      '#CF0E5B'
    ];
    const pie = d3.pie<DataItem>().value((d: { percentage: number }) => d.percentage);
    const arc = d3
      .arc<d3.PieArcDatum<DataItem>>()
      .innerRadius(innerRadius - this.thickness)
      .outerRadius(radius * 0.6);
    const arcs = svg
      .selectAll('.arc')
      .data(pie(data))
      .enter()
      .append('g')
      .attr('class', 'donut-arc')
      .attr('transform', `translate(${width / 2.5},${height / 2.5})`);

    arcs
      .append('path')
      .attr('d', arc)
      .attr('fill', (d: ChartData, i: number) => colors[i])
      .attr('stroke', 'white')
      .style('stroke-width', 0)
      .style('stroke', '#FFFFFF')
      .style('border-radius', '50%')
      .style('fill', (d: ChartData, i: number) => colors[i])
      .attr('clip-path', (d: ChartData, i: number) => `url(#clip${i})`);

    const legend = svg
      .append('g')
      .attr('class', 'legend')
      .attr('transform', `translate(${width / 1 + 50},${height / 2.2})`);

    const lg = legend
      .selectAll<SVGGElement, d3.PieArcDatum<DataItem>>('g')
      .data(pie(data))
      .enter()
      .append('g')
      .attr('class', 'legendGroup')
      .attr('transform', (d: ChartData, i: number) => {
        const xOff = (i % 1) * 200;
        const yOff = Math.floor(i / 1) * 20;
        return `translate(${xOff},${yOff})`;
      });

    lg.append('rect')
      .attr('fill', (d: ChartData, i: number) => colors[i])
      .attr('x', -300)
      .attr('y', 100 - 7)
      .attr('width', 15)
      .attr('height', 5)
      .append('title')
      .html((d: ChartData) => String(d.data.percentage));

    lg.append('text')
      .style('font-family', '"Montserrat", sans-serif')
      .style('font-size', '12px')
      .attr('x', -270)
      .attr('y', 100)
      .text((d: { data: DataItem }) => {
        let dataTitle = "";
        if (d.data.Cpu_Usage) {
          dataTitle = "CPU Usage";
        } else if (d.data.Memory_Usage) {
          dataTitle = "Memory Usage";
        } else if (d.data.disk_pressure_avg) {
          dataTitle = "Disk Pressure Average"
        } else if (d.data.memory_pressure_avg) {
          dataTitle = "Memory Pressure Average"
        } else if (d.data.pid_pressure_avg) {
          dataTitle = "PID Pressure Average"
        } else {
          dataTitle = "Storage Available";
        }
        return `${dataTitle} : (${Math.floor(d.data.percentage)}%)`
      }
      )
      .append('title');
  }

  renderGraph = (apiData: ApiData) => {
    data = apiData;
    let total = 0;
    for (const property in data) {
      total = total + data[property as keyof ApiData];
    }
    if (data && total > 0) {
      this.manipulateData(data);
      return (
        <svg
          ref={this.svgRef}
          viewBox={`0 0 ${width} ${height}`}
          preserveAspectRatio="xMidYMid meet"
        ></svg>
      );
    } else {
      return <div>No Data Available!</div>
    }
  };

  renderError = () => {
    return (
      <div className="utilization-card">
        <div className="error-message-box">
          <span className="icon">
            <img src={ErrorImg} alt="" width="48" height="48" />
          </span>
          <span className="name">{'There is some error'}</span>
        </div>
      </div>
    );
  };

  renderFrames = (series: Series[]) => {
    const retData: React.ReactNode[] = [];
    for (const iSer of series) {
      const { data, error, query } = iSer.meta.custom;
      if (query.queryString === 'node_capacity_panel') {
        if (error) {
          retData.push(this.renderError());
        } else {
          if (data) {
            const parsedData: ApiData = JSON.parse(data);
            retData.push(this.renderGraph(parsedData));
          } else {
            retData.push(this.renderError());
          }
        }
      } else if (query.queryString === "node_condition_panel") {
        if (error) {
          retData.push(this.renderError());
        } else {
          if (data) {
            const parsedData: ApiData = JSON.parse(data);
            retData.push(this.renderGraph(parsedData));
          } else {
            retData.push(this.renderError());
          }
        }
      } else {
        retData.push(this.renderError());
      }
    }

    return retData;
  };

  render() {
    const { data } = this.props;
    if (data && data.series && data.series.length > 0) {
      const seriesData: Series[] = data.series.map((seriesItem) => ({
        name: seriesItem.name || '',
        refId: seriesItem.refId || '',
        meta: {
          custom: {
            data: seriesItem.meta?.custom?.data || '',
            error: seriesItem.meta?.custom?.error || '',
            query: { queryString: seriesItem.meta?.custom?.query?.queryString || '' }
          }
        },
      }));

      return (
        <div className="pods-overview-panel">
          <div className="heading">{this.props.options.overviewTitle}</div>
          {this.renderFrames(seriesData)}
        </div>
      );
    } else {
      return <div>No data available</div>;
    }
  }
}

export default AppkubePodsOverviewPanel;
