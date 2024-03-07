import * as d3 from 'd3';
import React, { useEffect, useRef } from 'react';

interface Data {
  Year: string;
  Total: number;
  Earnings: string;
  NetDividend: string;
}
const margin = { top: 10, right: 0, bottom: 30, left: 30 };
const width = 800;
let height = 350;
let data_earning: Data[] = [
  {
    Year: '2020',
    Total: 50,
    Earnings: '40',
    NetDividend: '10',
  },
  {
    Year: '2017',
    Total: 30,
    Earnings: '20',
    NetDividend: '10',
  },
  {
    Year: '2018',
    Total: 274.5,
    Earnings: '89.5',
    NetDividend: '70',
  },
  {
    Year: '2016',
    Total: 257,
    Earnings: '79.5',
    NetDividend: '57.5',
  },
  {
    Year: '2019',
    Total: 177.5,
    Earnings: '68',
    NetDividend: '67.5',
  },
];
const categories: string[] = ['Earnings', 'NetDividend'];
let topHighOfArray = data_earning.map((d) => d.Total).sort((a, b) => b - a)[0];
let narrowBarsize = topHighOfArray;
const MultiColorStackTwo: React.FC = () => {
  const ref = useRef<SVGSVGElement>(null);
  useEffect(() => {
    let colors = d3.scaleOrdinal<string>().domain(categories).range(['#ffba69', '#53ca43']);
    const xScale = d3
      .scaleBand<string>()
      .domain(data_earning.map((d) => d.Year))
      .range([margin.left, width - margin.right])
      .padding(0.6);
    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data_earning, (d) => d.Total) || 0])
      .range([height - margin.bottom, margin.top]);
    const xAxis = d3.axisBottom(xScale).tickSizeOuter(0);
    const yAxis = d3.axisLeft(yScale);
    const stack = d3.stack<Data, string>().keys(categories);
    stack(data_earning);
    const svg = d3.select(ref.current).attr('width', 900).attr('height', 500);
    const chartData = stack(data_earning);
    const groups = svg
      .append('g')
      .selectAll('g')
      .data(chartData)
      .join('g')
      .style('fill', (d, i) => colors(d.key || ''));
    groups
      .selectAll('rect')
      .data((d) => d)
      .join('rect')
      .attr('class', 'main-bar')
      .attr('x', (d) => xScale(d.data.Year) || 0)
      .attr('y', (d) => yScale(d[1]) || 0)
      .attr('height', (d) => (yScale(d[0]) || 0) - (yScale(d[1]) || 0))
      .attr('width', xScale.bandwidth() || 0);
    svg
      .selectAll('.narrow-bar')
      .data(data_earning)
      .enter()
      .append('rect')
      .attr('class', 'narrow-bar')
      .attr('x', (d) => (xScale(d.Year) ? xScale(d.Year)! + 10 : 0))
      .attr('y', (d) => yScale(topHighOfArray) - 10) // Adjust the position of the narrow bars
      .attr('width', xScale.bandwidth())
      .attr('height', narrowBarsize)
      .attr('width', 7)
      .attr('fill', '#e9ebfb');
    svg
      .append('g')
      .attr('transform', `translate(0,${height - margin.bottom})`)
      .call(xAxis);
    svg.append('g').attr('transform', `translate(${margin.left},0)`).call(yAxis).select('.domain').remove();
  }, []);
  return (
    <div className="chart">
      <svg ref={ref} width={'100%'} height={height} style={{ marginTop: 100 }}></svg>
    </div>
  );
};
export default MultiColorStackTwo;
