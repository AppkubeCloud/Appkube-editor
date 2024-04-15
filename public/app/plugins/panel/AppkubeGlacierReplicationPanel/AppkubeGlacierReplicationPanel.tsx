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
    age_group: 'Running pods (48%)',
    population: 48,
  },
  {
    age_group: 'Pending pods (22%)',
    population: 22,
  },
  {
    age_group: 'Failed pods (37%)',
    population: 37,
  },
];
let width = 300;
let height = 200;

class AppkubeGlacierReplicationPanel extends PureComponent<PanelProps> {
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

    const svg = d3.select(this.svgRef.current).attr('width', 300).attr('height', 300);

    svg.selectAll('*').remove(); // Clear previous elements

    const radius = Math.min(width, height) / 1;
    const innerRadius = radius * 0.6;
    const colors = ['#8676ff', '#00b929', '#fa6298'];
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
      .attr('transform', `translate(${width / 1.8},${height / 1.8})`);

    svg
      .append('text')
      .attr('text-anchor', 'middle')
      .attr('dominant-baseline', 'middle')
      .attr('font-size', '24px')
      .attr('font-weight', '600')
      .attr('fill', '#383874')
      .text('100%')
      .attr('transform', `translate(${width / 1.8},${height / 1.8})`);

    arcs
      .append('path')
      .attr('d', arc)
      .attr('fill', (d: any, i: any) => color(i))
      .attr('stroke', 'white')
      .style('stroke-width', 0)
      .style('stroke', '#FFFFFF')
      .style('border-radius', '50%')
      .style('fill', (d: any, i: any) => color(i))
      .attr('clip-path', (d: any, i: any) => `url(#clip${i})`)
      .html("100%");
    
  }
  render() {
    return (
      <div className="glacier-replication-panel">
        <div className="heading">Glacier Replication</div>
        <div className="total-replication">
          <div className="total">
            <span>Total Replication Data</span>
            <strong>6,770TB</strong>
          </div>
          <div className="total">
            <span>Total Replication Request</span>
            <strong>723</strong>
          </div>
        </div>
        <svg
          ref={this.svgRef}
          viewBox={`0 0 ${width} ${height}`}
          preserveAspectRatio="xMidYMid meet"
        ></svg>
        <div className="contents">
          <div className="content-row-heading">
            <div className="text type">Replication Type</div>
            <div className="text bytes">Bytes</div>
            <div className="text status">Status</div>
            <div className="text percentage">Percentage</div>
          </div>
          <div className="content-row">
            <div className="text type">Completed Replication</div>
            <div className="text bytes">1946618</div>
            <div className="status">
              <span style={{ width: '48%', backgroundColor: '#8676ff' }}></span>
            </div>
            <div className="text percentage">48%</div>
          </div>
          <div className="content-row">
            <div className="text type">In Progress Replication</div>
            <div className="text bytes">1946618</div>
            <div className="status">
              <span style={{ width: '22%', backgroundColor: '#00b929' }}></span>
            </div>
            <div className="text percentage">22%</div>
          </div>
          <div className="content-row">
            <div className="text type">Failed Replication</div>
            <div className="text bytes">1946618</div>
            <div className="status">
              <span style={{ width: '37%', backgroundColor: '#fa6298' }}></span>
            </div>
            <div className="text percentage">37%</div>
          </div>
        </div>
      </div>
    );
  }
}

export default AppkubeGlacierReplicationPanel;
