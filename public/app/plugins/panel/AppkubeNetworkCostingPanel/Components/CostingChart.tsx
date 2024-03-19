import * as d3 from 'd3';
import React, { Component, createRef } from 'react';

interface DataItem {
  age_group: string;
  population: number;
}

interface DataPoint {
  age_group: string;
  population: number;
}

interface Props {
  data?: DataItem[];
}

let data: DataPoint[] = [
  {
    age_group: 'ECR',
    population: 20,
  },
  {
    age_group: 'Pod-to-Pod',
    population: 20,
  },
  {
    age_group: 'Pod-to-Database',
    population: 20,
  },
  {
    age_group: 'ELB',
    population: 20,
  },
  {
    age_group: 'Worker Nodes',
    population: 20,
  },
];
let width = 400;
let height = 400;

class CostingChart extends Component<Props> {
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

    const svg = d3.select(this.svgRef.current).attr('width', 400).attr('height', 400);

    svg.selectAll('*').remove(); // Clear previous elements

    const radius = Math.min(width, height) / 1.5;
    const innerRadius = radius * 0.6;
    const colors = ['#8b19f9', '#ff708b', '#ffba69', '#01f1e3', '#8676ff'];
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
      .attr('transform', `translate(${width / 1 + 130},${height / 3.4})`);

    const lg = legend
      .selectAll<SVGGElement, d3.PieArcDatum<DataItem>>('g')
      .data(pie(data))
      .enter()
      .append('g')
      .attr('class', 'legendGroup')
      .attr('transform', (d: any, i: number) => {
        const xOff = (i % 1) * 150;
        const yOff = Math.floor(i / 1) * 20;
        return `translate(${xOff},${yOff})`;
      });

    lg.append('rect')
      .attr('fill', (d: { data: { age_group: any } }) => color(d.data.age_group))
      .attr('x', -410)
      .attr('y', 0)
      .attr('rx', 5)
      .attr('width', 6)
      .attr('height', 6)
      .append('title')
      .html((d: { data: { age_group: any } }) => d.data.age_group);

    lg.append('text')
      .style('font-family', '"Montserrat", sans-serif')
      .style('font-size', '12px')
      .attr('x', -395)
      .attr('y', 8)
      .text((d: { data: { age_group: any } }) => d.data.age_group)
      .append('title');
  }

  render() {
    return (
      <div className='multi-line-chart'>
        <svg ref={this.svgRef} width="400" height="400"></svg>
      </div>
    );
  }
}

export default CostingChart;
