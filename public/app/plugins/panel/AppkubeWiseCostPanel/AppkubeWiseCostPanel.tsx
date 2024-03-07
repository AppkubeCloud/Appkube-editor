import * as d3 from 'd3';
import React, { PureComponent, createRef } from 'react';

import { PanelProps } from '@grafana/data';

import './css/style.css';

interface DataItem {
  age_group: string;
  population: number;
}

interface DataPoint {
  age_group: string;
  population: number;
}
let data: DataPoint[] = [
  {
    age_group: 'Running pods (65%)',
    population: 60,
  },
  {
    age_group: 'Pending pods (25%)',
    population: 25,
  },
  {
    age_group: 'Failed pods (10%)',
    population: 10,
  },
];
let width = 900;
let height = 300;

class AppkubePodsOverviewPanel extends PureComponent<PanelProps> {
  constructor(props: any) {
    super(props);
  }

  private svgRef = createRef<SVGSVGElement>();

  private thickness = 50;

  componentDidMount() {
    this.drawChart();
  }

  componentDidUpdate() {
    this.drawChart();
  }

  drawChart() {
    // const { width, height } = this.props;

    const svg = d3.select(this.svgRef.current).attr('width', 220).attr('height', 220);

    svg.selectAll('*').remove(); // Clear previous elements

    const radius = Math.min(width, height) / 1;
    const innerRadius = radius * 0.6;
    const colors = ['#53ca43', '#f9d33d', '#ff2d2e'];
    const color = d3.scaleOrdinal<string>(colors).domain(data.map((d: { age_group: any }) => d.age_group));
    const pie = d3.pie<DataItem>().value((d: { population: any }) => d.population);
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
      .attr('transform', `translate(${width / 10.0},${height / 1.5})`);

    arcs
      .append('path')
      .attr('d', arc)
      .attr('fill', (d: any, i: any) => color(i))
      .attr('stroke', 'white')
      .style('stroke-width', 0)
      .style('stroke', '#FFFFFF')
      .style('border-radius', '50%')
      .style('fill', (d: any, i: any) => color(i))
      .attr('clip-path', (d: any, i: any) => `url(#clip${i})`);
  }
  render() {
    const { height } = this.props;
    return (
      <div className="wise-cost-panel">
        <div className="wise-cost-panel-inner-panel">
          <div className="heading">Product Wise Cost</div>
          <div className="price">
            <strong>$5,123</strong>
            <span>10%</span>
          </div>
          <svg
            ref={this.svgRef}
            viewBox={`0 0 ${width} ${height}`}
            preserveAspectRatio="xMidYMid meet"
            style={{ width: '100%', height: '100%', maxWidth: '100%', maxHeight: '220' }}
          ></svg>
          <div className="contents">
            <div className="content-row">
              <div className="text">Procurement</div>
              <div className="content">
                <div className="line-price">$7,860</div>
                <div className="line-box">
                  <span style={{ width: '40%', backgroundColor: '#8676ff' }}></span>
                </div>
              </div>
            </div>
            <div className="content-row">
              <div className="text">HR</div>
              <div className="content">
                <div className="line-price">$3,390</div>
                <div className="line-box">
                  <span style={{ width: '30%', backgroundColor: '#ff9066' }}></span>
                </div>
              </div>
            </div>
            <div className="content-row">
              <div className="text">Supply Chain</div>
              <div className="content">
                <div className="line-price">$5,132</div>
                <div className="line-box">
                  <span style={{ width: '25%', backgroundColor: '#ffcc41' }}></span>
                </div>
              </div>
            </div>
            <div className="content-row">
              <div className="text">EMS</div>
              <div className="content">
                <div className="line-price">$1100</div>
                <div className="line-box">
                  <span style={{ width: '20%', backgroundColor: '#42cd7e' }}></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AppkubePodsOverviewPanel;
