import * as d3 from 'd3';
import React, { PureComponent, createRef } from 'react';

import { PanelProps } from '@grafana/data';

import './css/style.css';

interface DataItem {
  product_group: string;
  population: number;
}

interface DataPoint {
  product_group: string;
  population: number;
}
let data: DataPoint[] = [
  {
    product_group: 'ap-northeast-1',
    population: 0,
  },
  {
    product_group: 'eu-west-1',
    population: 24,
  },
  {
    product_group: 'eu-west-2',
    population: 0,
  },
  {
    product_group: 'us-east-1',
    population: 514,
  },
  {
    product_group: 'us-east-2',
    population: 2,
  },
  {
    product_group: 'us-west-1',
    population: 47,
  },
  {
    product_group: 'us-west-2',
    population: 0,
  },
];
let width = 450;
let height = 300;

class AppkubeFunctionByRegionPanel extends PureComponent<PanelProps> {
  constructor(props: any) {
    super(props);
  }

  private svgRef = createRef<SVGSVGElement>();

  private thickness = 35;

  componentDidMount() {
    this.drawChart();
  }

  componentDidUpdate() {
    this.drawChart();
  }

  drawChart() {
    const svg = d3.select(this.svgRef.current).attr('width', width).attr('height', height);

    svg.selectAll('*').remove();

    const radius = Math.min(width, height) / 2;
    const innerRadius = radius * 0.6;
    const colors = ['#fa6298', '#8676ff', '#42cd7e', '#ffc941', '#ff9066', '#FA6298', '#669AFF'];
    const color = d3.scaleOrdinal<string>(colors).domain(data.map((d: { product_group: any }) => d.product_group));
    const pie = d3.pie<DataItem>().value((d: { population: any }) => d.population);
    const arc = d3
      .arc<d3.PieArcDatum<DataItem>>()
      .innerRadius(innerRadius - this.thickness)
      .outerRadius(radius * 0.6);
    const graphGroup = svg.append('g').attr('transform', `translate(${width / 3}, ${height / 2})`);
    const arcs = graphGroup.selectAll('.arc').data(pie(data)).enter().append('g').attr('class', 'donutarc');
    arcs
      .append('path')
      .attr('d', arc)
      .attr('fill', (d: any, i: any) => color(i))
      .attr('stroke', 'white')
      .style('strokewidth', 0)
      .style('stroke', '#FFFFFF')
      .style('borderradius', '50%')
      .style('fill', (d: any, i: any) => color(i))
      .attr('clippath', (d: any, i: any) => `url(#clip${i})`);
    const legendGroup = svg
      .append('g')
      .attr('class', 'legend')
      .attr('transform', `translate(${width / 1.2}, ${height / 1.2})`);

    const lg = legendGroup
      .selectAll<SVGGElement, d3.PieArcDatum<DataItem>>('g')
      .data(pie(data))
      .enter()
      .append('g')
      .attr('class', 'legendGroup')
      .attr('transform', (d: any, i: number) => `translate(0, ${i * 20})`);

    lg.append('rect')
      .attr('fill', (d: { data: { product_group: any } }) => color(d.data.product_group))
      .attr('x', -110)
      .attr('y', -170)
      .attr('width', 12)
      .attr('height', 12)
      .append('title')
      .html((d: { data: { product_group: any } }) => d.data.product_group);

    lg.append('text')
      .style('fontfamily', '"Montserrat", sansserif')
      .style('fontsize', '14px')
      .style('color', '#a8a8c2')
      .attr('x', -90)
      .attr('y', -160)
      .text((d: { data: { product_group: any } }) => d.data.product_group)
      .append('title');
  }

  render() {
    const { height } = this.props;
    return (
      <div className="function-product-panel">
        <div className="function-product-inner-panel">
          <div className="heading">{this.props.options.panelTitle}</div>
          <div className="price">
            <strong>587</strong>
            <span>2%</span>
          </div>
          <svg
            ref={this.svgRef}
            viewBox={`0 0 ${width} ${height}`}
            preserveAspectRatio="xMidYMid meet"
          ></svg>
        </div>
      </div>
    );
  }
}

export default AppkubeFunctionByRegionPanel;
