import * as d3 from 'd3';
import React, { Component, RefObject } from 'react';

interface DataItem {
  percentage: number;
  name: string;
  color: string;
  value: number | string; // Accepts either number or string
}

interface Props {
  data: DataItem[];
}

let width = 300;
let height = 260;

class OverallBucketComplianceChart extends Component<Props> {
  private ref: RefObject<SVGSVGElement>;

  constructor(props: Props) {
    super(props);
    this.ref = React.createRef();
  }

  componentDidMount(): void {
    this.renderChart();
  }

  renderChart = async (): Promise<void> => {
    const { data } = this.props;

    const svg = d3.select(this.ref.current).attr('width', width).attr('height', height);

    const arcs = data.map((v, i) => {
      return d3
        .arc()
        .innerRadius(i * 20 + 75)
        .outerRadius(i * 20 - 5 + 75);
    });

    const pieData = data.map((v, i) => {
      return [
        {
          percentage: v.percentage * 0.75,
          arc: arcs[i],
          name: v.name,
          color: v.color,
          value: v.value,
        },
        { percentage: (100 - v.percentage) * 0.75, arc: arcs[i] },
        { percentage: 0.25, arc: arcs[i] },
      ];
    });

    const pie = d3
      .pie()
      .sort(null)
      .value((d: any) => d.percentage);

    const g = svg
      .selectAll('g')
      .data(pieData)
      .enter()
      .append('g')
      .attr('transform', 'translate(120,110) rotate(180)')
      .attr('fill-opacity', (d, i) => 2 / (i + 1));

    g.selectAll('path')
      .data((d: any) => pie(d))
      .enter()
      .append('path')

      .attr('d', (d: any) => d.data.arc(d))
      .attr('fill', (d: any, i: number) => {
        return i === 0 ? d.data.color : '#DBDFF1';
      });

    const gText = svg
      .selectAll('g.textClass')
      .data(data)
      .enter()
      .append('g')
      .classed('textClass', true)
      .attr('transform', 'translate(' + width / 2.8 + ',' + width / 3.8 + ') rotate(180)');

    svg.selectAll('g').each(function (d: any, index: number) {
      const el = d3.select(this);
      el.selectAll('path').each(function (r: any, i: number) {
        if (i === 0) {
          const centroidText = r.data.arc.centroid({
            startAngle: r.startAngle,
            endAngle: r.startAngle,
          });
          const lableObj = r.data;
          const label = `${lableObj.name}`;
          gText
            .append('text')
            .attr('font-size', 12)
            .attr('fill', '#383874')
            .attr('cx', 20)
            .attr('cy', 0)
            .text(label.length > 17 ? `${label?.slice(0, 14)}...` : label)
            .attr(
              'transform',
              'translate(' +
                (centroidText[0] - (5 * width) / -100) +
                ',' +
                (centroidText[1] + 50 + ') rotate(' + 180 + ')')
            )
            .attr('dominant-baseline', 'central');

          gText
            .append('circle')
            .attr('fill', (d: any) => {
              return 'none';
            })
            .attr('stroke', (d: any) => {
              return lableObj.color;
            })
            .attr('cx', -48)
            .attr('cy', -37)
            .attr('r', 2)
            .attr(
              'transform',
              'translate(' +
                (centroidText[0] - (8 * width) / 100) +
                ',' +
                (centroidText[1] + 15 + ') rotate(' + 180 + ')')
            );
        }
      });
    });
  };

  render(): JSX.Element {
    return (
      <div className="gauge-chart">
        <svg ref={this.ref} viewBox={`0 0 ${width} ${height}`}></svg>
      </div>
    );
  }
}

export default OverallBucketComplianceChart;
