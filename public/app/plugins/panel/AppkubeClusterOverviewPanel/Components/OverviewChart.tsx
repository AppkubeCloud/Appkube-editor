import * as d3 from 'd3';
import React, { Component, RefObject } from 'react';

interface DataItem {
  name: string;
  upPerc: number;
  downPerc: number;
}

interface Props {
  data: DataItem[]
}

class OverviewChart extends Component<Props> {
  private ref: RefObject<SVGSVGElement>;
  constructor(props: Props) {
    super(props);
    this.ref = React.createRef();
  }
  componentDidMount = () => {
    this.renderChart();
  };
  componentDidUpdate = () => {
    d3.select(this.ref.current!).selectAll('*').remove();
    this.renderChart();
  };
  
  renderChart = () => {
    const margin = { top: 20, right: 0, bottom: 20, left: 40 };
    const width = this.ref.current!.parentElement!.clientWidth;
    const height = 250;
    const barPadding = 0.5;
    const axisTicks = { qty: 5, outerSize: 0, dateFormat: '%m-%d' };
    const svg = d3
      .select(this.ref.current)
      .append('svg')
      .attr('width', '100%')
      .attr('height', height + margin.top + margin.bottom)
      .attr('viewBox', `0 0 ${width} ${height + margin.top + margin.bottom}`)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);
    const xScale0 = d3
      .scaleBand()
      .range([0, width - margin.left - margin.right])
      .padding(barPadding);
    const xScale1 = d3.scaleBand<string>();
    const yScale = d3.scaleLinear().range([height, 0]);
    const xAxis = d3.axisBottom(xScale0).tickSizeOuter(axisTicks.outerSize);
    const yAxis = d3.axisLeft(yScale).ticks(axisTicks.qty).tickSizeOuter(axisTicks.outerSize);
    const data: DataItem[] = this.props.data;
    xScale0.domain(data.map((d) => d.name));
    xScale1.domain(['upPerc', 'downPerc']).range([0, xScale0.bandwidth()]);
    yScale.domain([0, d3.max(data, (d) => (d.upPerc > d.downPerc ? d.upPerc : d.downPerc))!]);
    const name = svg
      .selectAll<SVGGElement, DataItem>('.name')
      .data(data)
      .enter()
      .append('g')
      .attr('class', 'name')
      .attr('transform', (d) => `translate(${xScale0(d.name)},0)`);
    /* Add upPerc bars */
    name
      .selectAll<SVGRectElement, DataItem>('.bar.upPerc')
      .data((d) => [d])
      .enter()
      .append('rect')
      .attr('class', 'bar upPerc')
      .style('fill', '#53ca43')
      .attr('x', (d) => xScale1('upPerc')!)
      .attr('y', (d) => yScale(d.upPerc)!)
      .attr('width', xScale1.bandwidth())
      .attr('rx', 1)
      .attr('ry', 1)
      .attr('height', (d) => height - yScale(d.upPerc)!);
    /* Add downPerc bars */
    name
      .selectAll<SVGRectElement, DataItem>('.bar.downPerc')
      .data((d) => [d])
      .enter()
      .append('rect')
      .attr('class', 'bar downPerc')
      .style('fill', '#fa6298')
      .attr('x', (d) => xScale1('downPerc')! + 0)
      .attr('y', (d) => yScale(d.downPerc)!)
      .attr('width', xScale1.bandwidth())
      .attr('rx', 1)
      .attr('ry', 1)
      .attr('height', (d) => height - yScale(d.downPerc)!);
    svg.append('g').attr('class', 'x axis').attr('transform', `translate(0,${height})`).call(xAxis);
    svg.append('g').attr('class', 'y axis').call(yAxis);
  };
  render() {
    return <svg ref={this.ref} width={'100%'} height={'300'} style={{ marginRight: 100 }}></svg>;
  }
}
export default OverviewChart;
