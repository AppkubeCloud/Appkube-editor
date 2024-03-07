import * as d3 from 'd3';
import React, { useEffect, useRef } from 'react';
interface DataItem {
  date: Date;
  value: number;
}
const data: DataItem[] = [
  { date: new Date(2007, 0, 1), value: 59574 },
  { date: new Date(2008, 0, 1), value: 57261 },
  { date: new Date(2009, 0, 1), value: 58948 },
  { date: new Date(2010, 0, 1), value: 8635 },
  { date: new Date(2011, 0, 1), value: 58608 },
  { date: new Date(2012, 0, 1), value: 58581 },
  { date: new Date(2013, 0, 1), value: 58555 },
  { date: new Date(2014, 0, 1), value: 58258 },
  { date: new Date(2015, 0, 1), value: 58501 },
];
const width = 880;
const height = 350;
const margin = { top: 20, right: 30, bottom: 30, left: 40 };
const SingleLineChartWithCurve: React.FC = () => {
  const ref = useRef<SVGSVGElement>(null);
  useEffect(() => {
    const x = d3
      .scaleTime()
      .domain(d3.extent(data, (d) => d.date) as [Date, Date])
      .range([margin.left, width - margin.right]);
    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.value) || 0])
      .nice()
      .range([height - margin.bottom, margin.top]);
    const xAxis = (g: any) =>
      g.attr('transform', `translate(0,${height - margin.bottom})`).call(
        d3
          .axisBottom(x)
          .ticks(width / 80)
          .tickSizeOuter(0)
      );
    const yAxis = (g: any) =>
      g
        .attr('transform', `translate(${margin.left},0)`)
        .call(d3.axisLeft(y))
        .call((g: any) => g.select('.domain').remove())
        .call((g: any) =>
          g
            .select('.tick:last-of-type text')
            .clone()
            .attr('x', 3)
            .attr('text-anchor', 'start')
            .attr('font-weight', 'bold')
        );
    const line = d3
      .line<DataItem>()
      .defined((d) => !isNaN(d.value))
      .x((d) => x(d.date) || 0)
      .y((d) => y(d.value) || 0)
      .curve(d3.curveCardinal);
    const svg = d3.select(ref.current);
    svg.append('g').call(xAxis);
    svg.append('g').call(yAxis);
    svg
      .append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', '#00b929')
      .attr('stroke-width', 6)
      .attr('stroke-linejoin', 'round')
      .attr('stroke-linecap', 'round')
      .attr('d', line);
    const tooltip = d3.select(ref.current).append('g').attr('class', 'chart-tooltip').style('display', 'none');
    tooltip.append('rect').attr('width', 100).attr('height', 50).attr('fill', 'white').style('opacity', 0.8);
    tooltip.append('text').attr('x', 10).attr('y', 20).style('font-size', '12px').text('Tooltip Text');
    svg
      .append('rect')
      .attr('class', 'overlay')
      .attr('width', width)
      .attr('height', height)
      .style('fill', 'none')
      .style('pointer-events', 'all')
      .on('mouseover', () => tooltip.style('display', null))
      .on('mouseout', () => tooltip.style('display', 'none'))
      .on('mousemove', mousemove);
    function mousemove(event: any) {
      const x0 = x.invert(d3.pointer(event)[0]);
      const bisectDate = d3.bisector((d: DataItem) => d.date).left;
      const i = bisectDate(data, x0, 1);
      const d0 = data[i - 1];
      const d1 = data[i];
      const d = x0.valueOf() - d0.date.valueOf() > d1.date.valueOf() - x0.valueOf() ? d1 : d0;
      tooltip.attr('transform', `translate(${x(d.date)}, ${y(d.value)})`);
      tooltip.select('text').text(`Value: ${d.value}`);
    }
  }, []);
  return (
    <div className="chart-curve">
      <svg ref={ref} width={width} height={height}></svg>
    </div>
  );
};
export default SingleLineChartWithCurve;
