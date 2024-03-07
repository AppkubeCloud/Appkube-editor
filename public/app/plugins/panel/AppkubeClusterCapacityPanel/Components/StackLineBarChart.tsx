import * as d3 from 'd3';
import React, { useEffect, useRef } from 'react';

interface DataItem {
  type: string;
  value: number;
}

const USData: DataItem[] = [
  { type: 'Candidate 1', value: 45 },
  { type: 'Candidate 2', value: 55 },
];

const height = 100;
const width = 150;

const StackLineBarChart: React.FC = () => {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const colorS = () => {
      const colors = ['#9a1bf9', '#ff708b'];

      return d3.scaleOrdinal(
        USData.map((d) => d.type),
        colors
      );
    };
    let colorScale = colorS();
    let pie = d3
      .pie<DataItem>()
      .value((d) => d.value)
      .startAngle(-Math.PI / 2)
      .endAngle(Math.PI / 2)
      .padAngle(Math.PI / 75);

    let pieArcs = pie(USData);
    if (!ref.current) {
      return;
    }
    const svg = d3.select(ref.current);
    const arcGenerator = d3.arc().innerRadius(65).outerRadius(75).cornerRadius(10).padAngle(0.03);
    svg
      .append('g')
      .attr('class', 'donut-container')
      .attr('transform', `translate(${width / 2},${height / 1.2})`)
      .selectAll('path')
      .data(pieArcs)
      .join('path')
      .style('stroke', 'white')
      .style('stroke-width', 2)
      .style('fill', (d) => colorScale(d.data.type))
      .attr('d', (d: any) => arcGenerator(d));
  }, []);

  return <svg ref={ref} width={150} height={100} viewBox="0 0 150 100"></svg>;
};

export default StackLineBarChart;
