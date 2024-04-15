import * as d3 from 'd3';
import React, { Component, RefObject } from 'react';

interface DataItem {
  date: Date;
  last_quarter: number;
  current_quarter: number;
}

interface Props {
  data: DataItem[];
}

let width = 100;
let height = 20;

class MultilineChart extends Component<Props> {
  private svgRef: RefObject<SVGSVGElement>;

  constructor(props: Props) {
    super(props);
    this.svgRef = React.createRef();
  }

  componentDidMount() {
    this.renderChart();
  }

  componentDidUpdate() {
    this.renderChart();
  }

  renderChart = () => {
    const { data } = this.props;

    const margin = { top: 0, right: 0, bottom: 0, left: 0 };
    
    const svg = d3.select(this.svgRef.current);

    svg.selectAll('*').remove(); // Clear previous drawings

    const xScale = d3
      .scaleTime()
      .domain(d3.extent(data, (d) => d.date) as [Date, Date])
      .range([margin.left, width - margin.right]);

    const yScale = d3
      .scaleLinear()
      .domain([
        0,
        d3.max(data, (d) =>
          Math.max(d.last_quarter, d.current_quarter)
        ) as number,
      ])
      .nice()
      .range([height - margin.bottom, margin.top]);

    const line = d3
      .line<DataItem>()
      .curve(d3.curveCardinal)
      .x((d) => xScale(d.date)!)
      .y((d) => yScale(d.last_quarter)!);

    const line2 = d3
      .line<DataItem>()
      .curve(d3.curveCardinal)
      .x((d) => xScale(d.date)!)
      .y((d) => yScale(d.current_quarter)!);

    svg
      .append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', '#ff708b')
      .attr('stroke-width', 1)
      .attr('d', line);

    svg
      .append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', '#8678fd')
      .attr('stroke-width', 1)
      .attr('d', line2);

    svg
      .append('rect')
      .attr('width', width)
      .attr('height', height)
      .style('fill', 'none')
      .style('pointer-events', 'all');
  };

  render() {
    return (
      <div className="multi-line-chart">
        <svg ref={this.svgRef} width={width} height={height}></svg>
      </div>
    );
  }
}

export default MultilineChart;
