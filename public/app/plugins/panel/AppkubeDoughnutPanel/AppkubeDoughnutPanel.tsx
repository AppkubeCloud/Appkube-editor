import * as d3 from 'd3';
import React, { PureComponent, createRef } from 'react';

import { PanelProps } from '@grafana/data';
import './css/style.css';

import ErrorImg from './img/error.svg';

interface Series {
  name: string;
  refId: string;
  meta: {
    custom: {
      data: string;
      error: string;
      query: {
        queryString: string;
      };
    };
  };
}

interface DataItem {
  label: string;
  percentage: string;
  value?: string;
}

interface ChartData {
  data: DataItem,
}

let width = 300;
let height = 300;

class AppkubeDoughnutPanel extends PureComponent<PanelProps> {
  constructor(props: any) {
    super(props);
  }

  private svgRef = createRef<SVGSVGElement>();

  private thickness = 35;

  drawChart(chartData: DataItem[]) {
    const svg = d3.select(this.svgRef.current).attr('width', width).attr('height', height);

    svg.selectAll('*').remove();

    const radius = Math.min(width, height) / 2;
    const innerRadius = radius * 0.6;
    const colors = [
      '#fa6298',
      '#8676ff',
      '#42cd7e',
      '#ffc941',
      '#ff9066',
      '#FA6298',
      '#669AFF',
      '#2b59ff',
      '#ff708b',
      '#53CA43',
      '#FE708D',
      '#F9D33D',
      '#FF2D2E',
      '#8676FF',
      '#88E143',
      '#991BF9',
      '#FF708B',
      '#00B929',
      '#FAA14C',
      '#F9629A',
      '#A145FF',
      '#9283FF',
      '#2B5AFF',
      '#FA6298',
      '#FF7E7E',
      '#669AFF',
      '#E8A5FF',
      '#F8A243',
      '#01F1E3',
      '#FE2E2F',
      '#FA71A3',
      '#FAAB5D',
      '#F9D751',
      '#7E49FC',
      '#FF8198',
      '#FFBA69',
      '#3247E5',
      '#438A26'
    ];
    const pie = d3.pie<DataItem>().value((d: DataItem) => {
      return parseFloat(d.percentage)
    });
    // const pie = d3.pie<DataItem>().value((d: { percentage: string }) => d.percentage);
    const arc = d3
      .arc<d3.PieArcDatum<DataItem>>()
      .innerRadius(innerRadius - this.thickness)
      .outerRadius(radius * 0.6);
    const graphGroup = svg.append('g').attr('transform', `translate(${width / 3}, ${height / 2.6})`);
    const arcs = graphGroup.selectAll('.arc').data(pie(chartData)).enter().append('g').attr('class', 'donutarc');

    arcs
      .append('path')
      .attr('d', arc)
      // .attr('fill', (d: ChartData, i: number) => colors[i])
      .attr('stroke', 'white')
      .style('strokewidth', 0)
      .style('stroke', '#FFFFFF')
      .style('borderradius', '50%')
      .style('fill', (d: ChartData, i: number) => colors[i])
      .attr('clippath', (d: ChartData, i: number) => `url(#clip${i})`)
      .append('title')
      .html((d: ChartData) => `${d.data.label}: ${d.data.value}`);
    const legendGroup = svg
      .append('g')
      .attr('class', 'legend')
      .attr('transform', `translate(${width / 0.9}, ${height / 1.2})`);

    const lg = legendGroup
      .selectAll<SVGGElement, d3.PieArcDatum<DataItem>>('g')
      .data(pie(chartData))
      .enter()
      .append('g')
      .attr('class', 'legendGroup')
      .attr('transform', (d: ChartData, i: number) => `translate(0, ${i * 20})`);

    lg.append('rect')
      .attr('fill', (d: ChartData, i: number) => colors[i])
      .attr('x', -320)
      .attr('y', -20)
      .attr('width', 12)
      .attr('height', 12)
      .append('title')
      .html((d: ChartData) => `${d.data.percentage}%`);

    lg.append('text')
      .style('fontfamily', '"Montserrat", sansserif')
      .style('fontsize', '14px')
      .style('color', '#a8a8c2')
      .attr('x', -300)
      .attr('y', -10)
      .text((d: { data: DataItem }) => {
        return `${d.data.label}: (${d.data.percentage}%)`
      })
      .append('title');
  }

  renderFrames = (series: Series[]) => {
    const retData: JSX.Element[] = [];
    for (let i = 0; i < series.length; i++) {
      const iSer = series[i];
      let cardJSX: JSX.Element | null = null;
      if (iSer && iSer.meta && iSer.meta.custom) {
        const { data, error } = iSer.meta.custom;
        if (error) {
          cardJSX = <>{this.renderError()}</>;
        } else {
          if (data) {
            cardJSX = <>{this.renderData(JSON.parse(data))}</>;
          } else {
            cardJSX = <>{this.renderError()}</>;
          }
        }
      } else {
        cardJSX = this.renderError();
      }
      if (cardJSX) {
        retData.push(cardJSX);
      }
    }
    return retData;
  };

  renderError = () => {
    return (
      <div className="utilization-card">
        <div className="error-message-box">
          <span className="icon">
            <img src={ErrorImg} alt="" width="48" height="48" />
          </span>
          <span className="name">{'There is some error'}</span>
        </div>
      </div>
    );
  };

  renderData = (data: DataItem[]) => {
    let chartData: DataItem[] = [];
    for (const property in data) {
      chartData.push({
        label: `${property}`,
        percentage: `${data[property]}`
      });
    }
    let caluTotal = 0;
    chartData.forEach(e => {
      caluTotal = caluTotal + parseFloat(e.percentage);
    })
    chartData = chartData.map(e => {
      return {
        label: e.label,
        percentage: caluTotal > 0 ? ((parseFloat(e.percentage) / caluTotal) * 100).toFixed(2) : "0",
        value: e.percentage
      }
    })

    setTimeout(() => {
      this.drawChart(chartData);
    }, 500)
    return <>
      <div className="doughnut-chart-panel">
        <svg
          ref={this.svgRef}
          viewBox={`0 0 ${width} ${height}`}
          preserveAspectRatio="xMidYMid meet"
        ></svg>
      </div>
    </>;
  }

  render() {
    const { data } = this.props;
    if (data && data.series && data.series.length > 0) {
      const seriesData: Series[] = data.series.map((seriesItem) => ({
        name: seriesItem.name || '',
        refId: seriesItem.refId || '',
        meta: {
          custom: {
            data: seriesItem.meta?.custom?.data || '',
            error: seriesItem.meta?.custom?.error || '',
            query: { queryString: seriesItem.meta?.custom?.query?.queryString || '' }
          }
        },
      }));
      return (
        <div className="function-doughnut-chart-panel">
          <div className="heading">{this.props.options.panelTitle}</div>
          {/* <div className="price">
            <strong>587</strong>
            <span>2%</span>
          </div> */}
          <div className="doughnut-charts">
            {this.renderFrames(seriesData)}
          </div>
        </div>
      );
    } else {
      return <div>No data available</div>;
    }
  }
}

export default AppkubeDoughnutPanel;
