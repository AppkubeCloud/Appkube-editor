import * as d3 from 'd3';
import React, { useEffect, useRef } from 'react';
let height = 150;
let width = 150;
let percentage: any = 0;
let data = [
  {
    name: 'CTV Only',
    value: 0.859,
  },
  {
    name: 'Linear+CTV',
    value: 0.141,
  },
];
const RecoveryDonutChart: React.FC = () => {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    let color = d3
      .scaleOrdinal<string>()
      .domain(data.map((d) => d.name))
      .range(['#2b5aff', '#FFFFFF']);
    height = Math.min(width, 500);
    const radius = Math.min(width, height) / 2;
    const arc = d3
      .arc<d3.PieArcDatum<{ name: string; value: number }>>()
      .innerRadius(radius * 0.67)
      .outerRadius(radius - 1);
    let pie = d3
      .pie<{ name: string; value: number }>()
      .padAngle(0.005)
      .sort(null)
      .value((d) => {
        return d.value;
      });
    const svg = d3.select(ref.current);
    if (!svg) {
      console.error('SVG element is null');
      return;
    }
    const arcs = pie(data);
    svg
      .selectAll('path')
      .data(arcs)
      .join('path')
      .attr('fill', (d) => color(d.data.name)!)
      .attr('d', arc)
      .append('title')
      .text((d) => `${d.data.name}: ${d.data.value.toLocaleString()}`);
    svg
      .append('g')
      .attr('font-size', 0)
      .attr('text-anchor', 'top')
      .selectAll('text')
      .data(arcs)
      .join('text')
      .attr('transform', (d) => `translate(${arc.centroid(d)})`)
      .call((text) =>
        text
          .filter((d) => d.endAngle - d.startAngle > 0.25)
          .append('tspan')
          .attr('y', '0')
          .attr('fill', 'black')
          .text((d) => {
            let val = d3.format('.1%')(d.data.value);
            if (percentage < parseInt(val, 20)) {
              percentage = val;
            }
            return val;
          })
      );
    svg
      .append('text')
      .attr('x', 0)
      .attr('y', 0)
      .attr('text-anchor', 'middle')
      .attr('font-size', 24)
      .text(`${percentage}`);
  }, []);
  return (
    <div className="chart">
      <svg ref={ref} width={width} height={height} />
    </div>
  );
};
export default RecoveryDonutChart;
