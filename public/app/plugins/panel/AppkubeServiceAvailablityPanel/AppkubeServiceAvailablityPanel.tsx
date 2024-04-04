import * as d3 from 'd3';
import React, { PureComponent, createRef } from 'react';

import { PanelProps } from '@grafana/data';
import './css/style.css';

import dummyData from './data.json'
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

interface Data {
  state: string;
  series: Series[]
}

interface DataItem {
  label: string;
  percentage: string;
  value?: string;
}

interface ChartData {
  data: DataItem,
}

const data: Data = dummyData;

let width = 300;
let height = 300;

class AppkubeServiceAvailablityPanel extends PureComponent<PanelProps> {
  constructor(props: any) {
    super(props);
  }

  private svgRef = createRef<SVGSVGElement>();

  private thickness = 25;

  drawChart(chartData: DataItem[]) {
    const svg = d3.select(this.svgRef.current).attr('width', 300).attr('height', 300);

    svg.selectAll('*').remove(); // Clear previous elements

    const radius = Math.min(width, height) / 2;
    const innerRadius = radius * 0.6;
    const colors = [
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
      '#438A26',
      '#CF0E5B'
    ];
    const color = d3.scaleOrdinal<string>(colors).domain(chartData.map((d: DataItem) => d.label));
    const pie = d3.pie<DataItem>().value((d: DataItem) => parseFloat(d.percentage));
    const arc = d3
      .arc<d3.PieArcDatum<DataItem>>()
      .innerRadius(innerRadius - this.thickness)
      .outerRadius(radius * 0.6);
    const arcs = svg
      .selectAll('.arc')
      .data(pie(chartData))
      .enter()
      .append('g')
      .attr('class', 'donut-arc')
      .attr('transform', `translate(${width / 2.5},${height / 2.5})`);

    arcs
      .append('path')
      .attr('d', arc)
      .attr('fill', (d: ChartData, i: number) => colors[i])
      .attr('stroke', 'white')
      .style('stroke-width', 0)
      .style('stroke', '#FFFFFF')
      .style('border-radius', '50%')
      .style('fill', (d: ChartData, i: number) => colors[i])
      .attr('clip-path', (d: ChartData, i: number) => `url(#clip${i})`)
      .append('title')
      .html((d: ChartData) => `${d.data.label}: ${d.data.value}`);

    const legend = svg
      .append('g')
      .attr('class', 'legend')
      .attr('transform', `translate(${width / 1},${height / 2.1})`);

    const lg = legend
      .selectAll<SVGGElement, d3.PieArcDatum<DataItem>>('g')
      .data(pie(chartData))
      .enter()
      .append('g')
      .attr('class', 'legendGroup')
      .attr('transform', (d: ChartData, i: number) => {
        const xOff = (i % 1) * 200;
        const yOff = Math.floor(i / 1) * 20;
        return `translate(${xOff},${yOff})`;
      });

    lg.append('rect')
      .attr('fill', (d: ChartData) => color(d.data.label))
      .attr('x', -270)
      .attr('y', 100 - 8)
      .attr('width', 10)
      .attr('height', 10)
      .append('title')
      .html((d: ChartData) => `${d.data.percentage}%`);

    lg.append('text')
      .style('font-family', '"Montserrat", sans-serif')
      .style('font-size', '12px')
      .attr('x', -250)
      .attr('y', 100)
      .text((d: ChartData) => {
        let label = "";
        if(d.data.label === "uptimePercentage") {
          label = "Up Time Percentage";
        } else if (d.data.label === "downTimePercentage") {
          label = "Down Time Percentage";
        } else {
          label = "";
        }
        return `${label} (${d.data.percentage}%)`
      })
      .append('title');
  }

  renderData = (data: DataItem[]) => {
    const chartData: DataItem[] = [];
    for (const property in data) {
      chartData.push({
        label: `${property}`,
        percentage: `${data[property]}`,
      });
    }
    let total = 0;
    chartData.map((item) => {
      total += Number(item.percentage);
    });
    if(total < 100) {
      chartData.push({
        label: `downTimePercentage`,
        percentage: `${Math.abs(total - 100)}`
      })
    }
    setTimeout(() => {
      this.drawChart(chartData);
    }, 500)
    return <>
    <div className="service-availablity-panel">
          <div className="heading">{this.props.options.title}</div>
            <svg
              ref={this.svgRef}
              viewBox={`0 0 ${width} ${height}`}
              preserveAspectRatio="xMidYMid meet"
            ></svg>
          </div>
    </>;
  }

  renderFrames = (series: Series[]) => {
    const retData: JSX.Element[] = [];
    for (let i = 0; i < series.length; i++) {
      const iSer = series[i];
      let cardJSX: JSX.Element | null = null;
      if (iSer && iSer.meta && iSer.meta.custom) {
        const { query, data, error } = iSer.meta.custom;
        if (query.queryString === 'uptime_percentage_panel') {
          if (error) {
            cardJSX = <>{this.renderError()}</>;
          } else {
            if (data) {
              cardJSX = <>{this.renderData(JSON.parse(data))}</>;
            } else {
              cardJSX = <>{this.renderError()}</>;
            }
          }
      }
    } else {
        cardJSX = this.renderError();
      }
      if(cardJSX) {
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

  render() {
    // const { data } = this.props;
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
        <>
          {this.renderFrames(seriesData)}
          
        </>
      );
    } else {
      return <div>No data available</div>;
    }
  }
}

export default AppkubeServiceAvailablityPanel;
