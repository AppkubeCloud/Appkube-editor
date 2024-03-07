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
    product_group: 'Product 1 1,94,661',
    population: 20,
  },
  {
    product_group: 'Product 2 53917',
    population: 15,
  },
  {
    product_group: 'Product 3 26846',
    population: 20,
  },
  {
    product_group: 'Product 4 15326',
    population: 30,
  },
  {
    product_group: 'Others 15326',
    population: 15,
  },
];
let width = 450;
let height = 350;

class AppkubeFunctionByProductsPanel extends PureComponent<PanelProps> {
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
    const colors = ['#fa6298', '#8676ff', '#42cd7e', '#ffc941', '#ff9066'];
    const color = d3.scaleOrdinal<string>(colors).domain(data.map((d: { product_group: any }) => d.product_group));
    const pie = d3.pie<DataItem>().value((d: { population: any }) => d.population);
    const arc = d3
      .arc<d3.PieArcDatum<DataItem>>()
      .innerRadius(innerRadius - this.thickness)
      .outerRadius(radius * 0.6);
    const graphGroup = svg.append('g').attr('transform', `translate(${width / 4}, ${height / 2})`);
    const arcs = graphGroup.selectAll('.arc').data(pie(data)).enter().append('g').attr('class', 'donut-arc');
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
    const legendGroup = svg
      .append('g')
      .attr('class', 'legend')
      .attr('transform', `translate(${width / 1.2}, ${height / 2.4})`);

    const lg = legendGroup
      .selectAll<SVGGElement, d3.PieArcDatum<DataItem>>('g')
      .data(pie(data))
      .enter()
      .append('g')
      .attr('class', 'legendGroup')
      .attr('transform', (d: any, i: number) => `translate(0, ${i * 20})`);

    lg.append('rect')
      .attr('fill', (d: { data: { product_group: any } }) => color(d.data.product_group))
      .attr('x', -80)
      .attr('y', -7)
      .attr('width', 15)
      .attr('height', 15)
      .append('title')
      .html((d: { data: { product_group: any } }) => d.data.product_group);

    lg.append('text')
      .style('font-family', '"Montserrat", sans-serif')
      .style('font-size', '13px')
      .style('color', '#a8a8c2')
      .attr('x', -55)
      .attr('y', 5)
      .text((d: { data: { product_group: any } }) => d.data.product_group)
      .append('title');
  }

  render() {
    const { height } = this.props;
    return (
      <div className="function-product-panel">
        <div className="function-product-inner-panel">
          <div className="heading">Idel Function By Products</div>
          <div className="price">
            <strong>6,71,246</strong>
            <span>10%</span>
          </div>
          <svg
            ref={this.svgRef}
            viewBox={`0 0 ${width} ${height}`}
            preserveAspectRatio="xMidYMid meet"
            style={{ height: '100%', maxWidth: '100%', maxHeight: '450' }}
          ></svg>
        </div>
      </div>
    );
  }
}

export default AppkubeFunctionByProductsPanel;
