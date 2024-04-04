import * as d3 from 'd3';
import React, { useEffect, useRef } from 'react';

interface BarChartData {
  month: string;
  value: number;
}

const margin = { top: 20, right: 10, bottom: 20, left: 30 };
const width = 800;
const height = 250;
const FlowCountChart: React.FC<{ data: BarChartData[] }> = (props) => {
  const svgRef = useRef<SVGSVGElement>(null);
  useEffect(() => {
    const data: BarChartData[] = props.data;
    if (!svgRef.current || !data) {
      return;
    }
    const svg = d3.select(svgRef.current);
    const xScale = d3
      .scaleBand<string>()
      .range([margin.left, width - margin.right])
      .domain(data.map((d) => d.month))
      .padding(0.3);
    const yScale = d3
      .scaleLinear<number>()
      .range([height, margin.top])
      .domain([0, d3.max(data, (d) => d.value) || 0])
      .nice();
    const xAxis = (g: d3.Selection<SVGGElement, unknown, null, undefined>) =>
      g
        .attr('transform', `translate(0,${height})`)
        .call(d3.axisBottom(xScale).tickSize(0))
        .call((g) => g.select('.domain').remove())
        .selectAll<SVGTextElement, string>('text')
        .style('text-anchor', 'center')
        .attr('dx', '0.2em')
        .attr('dy', '1.2em')
        .attr('font-size', '10px');
    const yAxis = (g: d3.Selection<SVGGElement, unknown, null, undefined>) =>
      g
        .attr('transform', `translate(${margin.left},0)`)
        .call(d3.axisLeft(yScale).tickFormat((d) => d + 'k'))
        .call((g) => g.select('.domain').remove());
    svg.selectAll('*').remove();
    svg.append('g').call(xAxis);
    svg.append('g').call(yAxis);
    // Append narrow bars on top
    svg
      .selectAll<SVGRectElement, BarChartData>('.narrow-bar')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'narrow-bar')
      .attr('x', (d) => xScale(d.month)! + 50)
      .attr('y', (d) => yScale(d.value) - 100) // Adjust the position of the narrow bars
      .attr('height', 100)
      .attr('width', 4)
      .attr('fill', '#e2e2ea');
    svg
      .selectAll<SVGRectElement, BarChartData>('.bar')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', (d) => xScale(d.month)! + 48)
      .attr('y', (d) => yScale(d.value) - 0)
      .attr('width', 8)
      .attr('height', (d) => height - yScale(d.value))
      .attr('fill', '#53ca43');
  }, [props.data]);
  return (
    <svg
      style={{ width: '100%', height: 'auto' }}
      ref={svgRef}
      viewBox={`0 0 ${width} ${height + margin.top + margin.bottom}`}
    />
  );
};

export default FlowCountChart;
