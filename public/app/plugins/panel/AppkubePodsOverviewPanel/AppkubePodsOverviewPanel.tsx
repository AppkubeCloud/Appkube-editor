import * as d3 from 'd3';
import React, { PureComponent, createRef } from 'react';

import { PanelProps } from '@grafana/data';
import './css/style.css';

interface DataItem {
  percentage: number;
}

let data: any;
let width = 300;
let height = 300;

class AppkubePodsOverviewPanel extends PureComponent<PanelProps> {
  constructor(props: any) {
    super(props);
  }

  private svgRef = createRef<SVGSVGElement>();

  private thickness = 25;

  // componentDidMount() {
  //   this.drawChart();
  // }

  componentDidUpdate() {
    this.manipulateData(data);
  }

  manipulateData = (data: any) => {
    const dataArray: any[] = [];
    let total: number = 0;
    for (const property in data) {
      total = total + data[property];
    }
    for (const property in data) {
      dataArray.push({[property]: data[property], percentage: (100 * data[property]) / total})
    }
    setTimeout(() => this.drawChart(dataArray), 500);
    // this.drawChart(dataArray);
  }

  drawChart(data: any) {
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
    const pie = d3.pie<DataItem>().value((d: { percentage: any }) => d.percentage);
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
      .attr('fill', (d: any, i: any) => colors[i])
      .attr('stroke', 'white')
      .style('stroke-width', 0)
      .style('stroke', '#FFFFFF')
      .style('border-radius', '50%')
      .style('fill', (d: any, i: any) => colors[i])
      .attr('clip-path', (d: any, i: any) => `url(#clip${i})`);

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
      .attr('transform', (d: any, i: number) => {
        const xOff = (i % 1) * 200;
        const yOff = Math.floor(i / 1) * 20;
        return `translate(${xOff},${yOff})`;
      });

    lg.append('rect')
      .attr('fill', (d: { data: { percentage: any } },  i: any) => colors[i])
      .attr('x', -300)
      .attr('y', 100 - 7)
      .attr('width', 15)
      .attr('height', 5)
      .append('title')
      .html((d: { data: { percentage: any } }) => d.data.percentage);

    lg.append('text')
      .style('font-family', '"Montserrat", sans-serif')
      .style('font-size', '12px')
      .attr('x', -270)
      .attr('y', 100)
      .text((d: { data: any }) => {
        let dataTitle: string = "";
        if(d.data.Cpu_Usage) {
          dataTitle = "CPU Usage";
        } else if (d.data.Memory_Usage) {
          dataTitle = "Memory Usage";
        } else {
          dataTitle = "Storage Available";
        }
        return `${dataTitle} : (${Math.floor(d.data.percentage)}%)`}
      )
      .append('title');
  }

  renderGraph = (apiData: any) => {
    data = apiData;
    if(data) {
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

  renderError = (cardTitle: any, error: string) => {
    return (
      <div className="utilization-card">
        <div className="card-title">
          <div className="icon">
          </div>
          <span className="name">{cardTitle || 'Error'}</span>
        </div>
        <div className="error-message">
          <span>{error ? error : 'There is some error'}</span>
        </div>
      </div>
    );
  };

  renderFrames = (series: any) => {
    const retData: any = [];
    for (let i = 0; i < series.length; i++) {
      const iSer = series[i];
      let cardJSX: any = [];
      if (iSer && iSer.meta && iSer.meta.custom && iSer.meta.custom) {
        const { query, data, error } = iSer.meta.custom;
        if (query.queryString === 'node_capacity_panel') {
          if (error) {
            cardJSX = this.renderError(this.props.options.overviewTitle, error);
          } else {
            if (data) {
              cardJSX = this.renderGraph(JSON.parse(data));
            } else {
              cardJSX = this.renderError(this.props.options.overviewTitle, '');
            }
          }
        }
      else {
        cardJSX = this.renderError('', '');
      }
      retData.push(cardJSX);
    }
    return retData;
  };
  };

  render() {
  const {data} = this.props;
  if (data && data.series && data.series.length > 0) {
    const { series } = data;
    return  <div className="pods-overview-panel">
    <div className="heading">{this.props.options.overviewTitle}</div>
    {this.renderFrames(series)}
    </div>;
  } else {
    return <div>No data available</div>;
  }
  };
}

export default AppkubePodsOverviewPanel;
