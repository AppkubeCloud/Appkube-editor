import * as d3 from 'd3';
import React, { Component, RefObject } from 'react';

interface DataItem {
  name: string;
  value1: number;
  value2: number;
}
interface Props {}
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
    d3.select(this.ref.current!).selectAll('*').remove(); // Remove existing chart before rendering new one
    this.renderChart();
  };
  renderChart = () => {
    const margin = { top: 20, right: 0, bottom: 20, left: 40 };
    const width = this.ref.current!.parentElement!.clientWidth; // Dynamically get parent container width
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
    const data: DataItem[] = [
      { name: 'Cluster Name1', value1: 65, value2: 75 },
      { name: 'Cluster Name2', value1: 25, value2: 75 },
      { name: 'Cluster Name3', value1: 75, value2: 25 },
      { name: 'Cluster Name4', value1: 15, value2: 25 },
      { name: 'Cluster Name5', value1: 10, value2: 20 },
    ];
    xScale0.domain(data.map((d) => d.name));
    xScale1.domain(['value1', 'value2']).range([0, xScale0.bandwidth()]);
    yScale.domain([0, d3.max(data, (d) => (d.value1 > d.value2 ? d.value1 : d.value2))!]);
    const name = svg
      .selectAll<SVGGElement, DataItem>('.name')
      .data(data)
      .enter()
      .append('g')
      .attr('class', 'name')
      .attr('transform', (d) => `translate(${xScale0(d.name)},0)`);
    /* Add value1 bars */
    name
      .selectAll<SVGRectElement, DataItem>('.bar.value1')
      .data((d) => [d])
      .enter()
      .append('rect')
      .attr('class', 'bar value1')
      .style('fill', '#53ca43')
      .attr('x', (d) => xScale1('value1')!)
      .attr('y', (d) => yScale(d.value1)!)
      .attr('width', xScale1.bandwidth())
      .attr('rx', 1)
      .attr('ry', 1)
      .attr('height', (d) => height - yScale(d.value1)!);
    /* Add value2 bars */
    name
      .selectAll<SVGRectElement, DataItem>('.bar.value2')
      .data((d) => [d])
      .enter()
      .append('rect')
      .attr('class', 'bar value2')
      .style('fill', '#fa6298')
      .attr('x', (d) => xScale1('value2')! + 0)
      .attr('y', (d) => yScale(d.value2)!)
      .attr('width', xScale1.bandwidth())
      .attr('rx', 1)
      .attr('ry', 1)
      .attr('height', (d) => height - yScale(d.value2)!);
    svg.append('g').attr('class', 'x axis').attr('transform', `translate(0,${height})`).call(xAxis);
    svg.append('g').attr('class', 'y axis').call(yAxis);
  };
  render() {
    return <svg ref={this.ref} width={'100%'} height={'300'} style={{ marginRight: 100 }}></svg>;
  }
}
export default OverviewChart;
