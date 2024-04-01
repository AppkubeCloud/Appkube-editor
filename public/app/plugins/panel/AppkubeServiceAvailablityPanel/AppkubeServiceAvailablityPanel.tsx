import * as d3 from 'd3';
import React, { PureComponent, createRef } from 'react';

import { PanelProps } from '@grafana/data';
import './css/style.css';

interface DataItem {
  label: string;
  percentage: number;
}

let data: DataItem[] = [
  {
    label: 'Uptime Percentage',
    percentage: 98,
  },
  {
    label: 'Downtime Percentage',
    percentage: 2,
  },
];

let width = 300;
let height = 300;

class AppkubeServiceAvailablityPanel extends PureComponent<PanelProps> {
  constructor(props: any) {
    super(props);
  }

  private svgRef = createRef<SVGSVGElement>();

  private thickness = 25;

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

    const radius = Math.min(width, height) / 2;
    const innerRadius = radius * 0.6;
    const colors = ['#2b5aff', '#ff708b'];
    const color = d3.scaleOrdinal<string>(colors).domain(data.map((d: { label: any }) => d.label));
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
      .attr('fill', (d: any, i: any) => color(i))
      .attr('stroke', 'white')
      .style('stroke-width', 0)
      .style('stroke', '#FFFFFF')
      .style('border-radius', '50%')
      .style('fill', (d: any, i: any) => color(i))
      .attr('clip-path', (d: any, i: any) => `url(#clip${i})`);

    const legend = svg
      .append('g')
      .attr('class', 'legend')
      .attr('transform', `translate(${width / 1},${height / 2.1})`);

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
      .attr('fill', (d: { data: { label: any } }) => color(d.data.label))
      .attr('x', -300)
      .attr('y', 100 - 8)
      .attr('width', 10)
      .attr('height', 10)
      .append('title')
      .html((d: { data: { label: any } }) => d.data.label);

    lg.append('text')
      .style('font-family', '"Montserrat", sans-serif')
      .style('font-size', '12px')
      .attr('x', -280)
      .attr('y', 100)
      .text((d: { data: DataItem }) => `${d.data.label} (${d.data.percentage}%)`)
      .append('title');
  }
  render() {
    return (
      <div className="service-availablity-panel">
        <div className="heading">{this.props.options.title}</div>
        <svg
          ref={this.svgRef}
          viewBox={`0 0 ${width} ${height}`}
          preserveAspectRatio="xMidYMid meet"
        ></svg>
      </div>
    );
  }
}

export default AppkubeServiceAvailablityPanel;
