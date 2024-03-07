import * as d3 from 'd3';
import React, { useEffect } from 'react';
interface DataPoint {
  timing: string;
  total: number;
  'Low-carbon-sources': number;
  'Fossil-fuels-sources': number;
}
let data: DataPoint[] = [
  {
    timing: '09.00',
    total: 43418.460846,
    'Low-carbon-sources': 7195.872996,
    'Fossil-fuels-sources': 36222.58785,
  },
  {
    timing: '09.05',
    total: 25671.614932000004,
    'Low-carbon-sources': 4654.851322,
    'Fossil-fuels-sources': 21016.76361,
  },
  {
    timing: '09.10',
    total: 9763.4481007,
    'Low-carbon-sources': 948.8110477,
    'Fossil-fuels-sources': 8814.637053,
  },
  {
    timing: '09.15',
    total: 8690.010505,
    'Low-carbon-sources': 1133.111644,
    'Fossil-fuels-sources': 7556.898861,
  },
  {
    timing: '09.20',
    total: 3849.9004910000003,
    'Low-carbon-sources': 1366.680287,
    'Fossil-fuels-sources': 2483.220204,
  },
  {
    timing: '09.25',
    total: 3386.16877411,
    'Low-carbon-sources': 52.55197211,
    'Fossil-fuels-sources': 3333.616802,
  },
  {
    timing: '09.30',
    total: 3369.9654769999997,
    'Low-carbon-sources': 1529.716619,
    'Fossil-fuels-sources': 1840.248858,
  },
  {
    timing: '09.35',
    total: 2251.409097,
    'Low-carbon-sources': 182.877434,
    'Fossil-fuels-sources': 2068.531663,
  },
  {
    timing: '09.40',
    total: 1873.6965604,
    'Low-carbon-sources': 216.0925264,
    'Fossil-fuels-sources': 1657.604034,
  },
  {
    timing: '09.45',
    total: 1861.4889656999999,
    'Low-carbon-sources': 279.5225517,
    'Fossil-fuels-sources': 1581.966414,
  },
  {
    timing: '09.55',
    total: 1381.02306717,
    'Low-carbon-sources': 72.36667817,
    'Fossil-fuels-sources': 1308.656389,
  },
  {
    timing: '09.60',
    total: 1069.7704612,
    'Low-carbon-sources': 152.0718743,
    'Fossil-fuels-sources': 917.6985869,
  },
  {
    timing: '09.65',
    total: 1053.90271057,
    'Low-carbon-sources': 65.66415167,
    'Fossil-fuels-sources': 988.2385589,
  },
];
const categories: string[] = ['Low-carbon-sources', 'Fossil-fuels-sources'];
const width = 900;
const height = 450;
let margin = {
  top: 20,
  bottom: 30,
  right: 20,
  left: 60,
};
const StackBarChart: React.FC = () => {
  const ref = React.useRef<SVGSVGElement | null>(null);
  useEffect(() => {
    const colors = d3.scaleOrdinal<string>().domain(categories).range(['#8676FF', '#FAA24B']);
    const xScale = d3
      .scaleBand<string>()
      .domain(data.map((d) => d.timing))
      .range([margin.left, width - margin.right])
      .paddingInner(0.1);
    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.total)!])
      .range([height - margin.bottom, margin.top]);
    const xAxis = d3.axisBottom(xScale).tickSizeOuter(0);
    const yAxis = d3.axisLeft(yScale);
    const stack = d3.stack<DataPoint>().keys(categories);
    const chartData = stack(data);
    const svg = d3.select(ref.current).attr('width', width).attr('height', height);
    const groups = svg
      .selectAll<SVGGElement, unknown>('g')
      .data(chartData)
      .join('g')
      .style('fill', (d) => colors(d.key as string));
    groups
      .selectAll<SVGRectElement, d3.SeriesPoint<DataPoint>>('rect')
      .data((d) => d)
      .join('rect')
      .attr('x', (d) => xScale(d.data.timing)!)
      .attr('y', (d) => yScale(d[1])!)
      .attr('height', (d) => yScale(d[0]) - yScale(d[1]))
      .attr('width', 5);
    svg
      .append('g')
      .attr('transform', `translate(0,${height - margin.bottom})`)
      .call(xAxis);
    svg.append('g').attr('transform', `translate(${margin.left},0)`).call(yAxis).select('.domain').remove();
  }, []);
  return <svg ref={ref} width={width} height={height}></svg>;
};
export default StackBarChart;
