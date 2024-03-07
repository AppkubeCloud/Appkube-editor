import * as d3 from 'd3';
import React, { useEffect, useRef } from 'react';
interface BarChartData {
  name: string;
  value: number;
}
const margin = { top: 20, right: 10, bottom: 20, left: 30 };
const width = 800;
const height = 250;
const FlowCountChart: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  useEffect(() => {
    const data: BarChartData[] = [
      { name: 'Jan', value: 22 },
      { name: 'Fab', value: 15 },
      { name: 'Mar', value: 16 },
      { name: 'Apr', value: 20 },
      { name: 'May', value: 35 },
      { name: 'Jun', value: 15 },
      { name: 'Jul', value: 45 },
      { name: 'Aug', value: 30 },
      { name: 'Sep', value: 45 },
      { name: 'Oct', value: 50 },
      { name: 'Nov', value: 35 },
      { name: 'Dec', value: 55 },
    ];
    if (!svgRef.current) {
      return;
    }
    const svg = d3.select(svgRef.current);
    const xScale = d3
      .scaleBand()
      .range([margin.left, width - margin.right])
      .domain(data.map((d) => d.name))
      .padding(0.3);
    const yScale = d3
      .scaleLinear()
      .range([height, margin.top])
      .domain([0, d3.max(data, (d) => d.value) || 0])
      .nice();
    const xAxis = (g: d3.Selection<SVGGElement, unknown, HTMLElement, any>) =>
      g
        .attr('transform', `translate(0,${height})`)
        .call(d3.axisBottom(xScale).tickSize(0))
        .call((g) => g.select('.domain').remove())
        .selectAll('text')
        .style('text-anchor', 'end')
        .attr('dx', '1.4em')
        .attr('dy', '0.50em')
        .attr('font-size', '10px');
    const yAxis = (g: d3.Selection<SVGGElement, unknown, HTMLElement, any>) =>
      g
        .attr('transform', `translate(${margin.left},0)`)
        .call(d3.axisLeft(yScale).tickFormat((d) => d + 'k'))
        .call((g) => g.select('.domain').remove());
    svg.selectAll('*').remove();
    svg.append('g').call(xAxis as any);
    svg.append('g').call(yAxis as any);
    // Append narrow bars on top
    svg
      .selectAll('.narrow-bar')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'narrow-bar')
      .attr('x', (d) => (xScale(d.name) ? xScale(d.name)! + 25 : 0))
      .attr('y', (d) => yScale(d.value) - 110) // Adjust the position of the narrow bars
      .attr('height', 100)
      .attr('width', 4)
      .attr('fill', '#e2e2ea');
    svg
      .selectAll('.bar')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', (d) => (xScale(d.name) ? xScale(d.name)! + 23 : 0))
      .attr('y', (d) => yScale(d.value) - 10)
      .attr('width', 8)
      .attr('height', (d) => height - yScale(d.value))
      .attr('fill', '#53ca43');
  }, []);
  return (
    <svg
      style={{ width: '100%', height: 'auto' }}
      ref={svgRef}
      viewBox={`0 0 ${width} ${height + margin.top + margin.bottom}`}
    />
  );
};
export default FlowCountChart;
