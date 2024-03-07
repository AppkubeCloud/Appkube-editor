import * as d3 from 'd3';
import React, { useRef, useEffect } from 'react';

interface DataItem {
  finishedTime: Date;
  title: string;
  path: string;
  studyType: string;
  wpm: number;
  accuracy: number;
  words: number;
  time: number;
  new: number;
  seen: number;
  retained: number;
  misstroked: number;
  hinted: number;
  revisionMode: boolean;
}

const data: DataItem[] = [
  {
    finishedTime: new Date(+'1526860310' * 1000),
    title: 'The Fox and the Mask',
    path: '/stories/fables/the-fox-and-the-mask/',
    studyType: 'practice',
    wpm: 71,
    accuracy: 0.9333,
    words: 75,
    time: 63,
    new: 0,
    seen: 11,
    retained: 59,
    misstroked: 5,
    hinted: 5,
    revisionMode: false,
  },
  {
    finishedTime: new Date(+'1526860940' * 1000),
    title: 'The Fox and the Mask',
    path: '/stories/fables/the-fox-and-the-mask/',
    studyType: 'practice',
    wpm: 75,
    accuracy: 0.9333,
    words: 75,
    time: 60,
    new: 0,
    seen: 10,
    retained: 60,
    misstroked: 5,
    hinted: 5,
    revisionMode: true,
  },
  {
    finishedTime: new Date(+'1526862721' * 1000),
    title: 'Your memorised words',
    path: '/progress/memorised',
    studyType: 'drill',
    wpm: 66,
    accuracy: 0.91,
    words: 300,
    time: 279,
    new: 0,
    seen: 0,
    retained: 273,
    misstroked: 27,
    hinted: 27,
    revisionMode: false,
  },
  {
    finishedTime: new Date(+'1526862920' * 1000),
    title: 'Top 10000 Project Gutenberg words',
    path: '/drills/top-10000-project-gutenberg-words',
    studyType: 'revise',
    wpm: 46,
    accuracy: 0.7933,
    words: 150,
    time: 292,
    new: 0,
    seen: 118,
    retained: 0,
    misstroked: 31,
    hinted: 32,
    revisionMode: false,
  },
  {
    finishedTime: new Date(+'1526863120' * 1000),
    title: 'Top 10000 Project Gutenberg words',
    path: '/drills/top-10000-project-gutenberg-words',
    studyType: 'revise',
    wpm: 79,
    accuracy: 0.9569,
    words: 93,
    time: 110,
    new: 0,
    seen: 89,
    retained: 0,
    misstroked: 4,
    hinted: 4,
    revisionMode: true,
  },
  {
    finishedTime: new Date(+'1526863220' * 1000),
    title: 'Top 10000 Project Gutenberg words',
    path: '/drills/top-10000-project-gutenberg-words',
    studyType: 'revise',
    wpm: 99,
    accuracy: 0.9166,
    words: 12,
    time: 12,
    new: 0,
    seen: 11,
    retained: 0,
    misstroked: 1,
    hinted: 1,
    revisionMode: true,
  },
  {
    finishedTime: new Date(+'1526863520' * 1000),
    title: 'Top 10000 Project Gutenberg words',
    path: '/drills/top-10000-project-gutenberg-words',
    studyType: 'discover',
    wpm: 60,
    accuracy: 0.9466,
    words: 73,
    time: 134,
    new: 14,
    seen: 0,
    retained: 0,
    misstroked: 4,
    hinted: 61,
    revisionMode: false,
  },
  {
    finishedTime: new Date(+'1526863322' * 1000),
    title: 'JavaScript DOM events',
    path: '/collections/tech/javascript-dom-events/',
    studyType: 'practice',
    wpm: 61,
    accuracy: 0.9009,
    words: 111,
    time: 210,
    new: 0,
    seen: 99,
    retained: 1,
    misstroked: 11,
    hinted: 11,
    revisionMode: false,
  },
  {
    finishedTime: new Date(+'1526865020' * 1000),
    title: 'Custom',
    path: '/custom/',
    studyType: 'practice',
    wpm: 37,
    accuracy: 0.9247,
    words: 93,
    time: 298,
    new: 10,
    seen: 3,
    retained: 1,
    misstroked: 7,
    hinted: 79,
    revisionMode: false,
  },
];

function BubblePlot() {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    let width = 900;

    let param = () => {
      let output: any = {};

      output['svg'] = {
        width: width,
        height: d3.max([width / 1.618, 450]), // golden ratio
      };

      output['margin'] = {
        top: 72,
        right: 32,
        bottom: 60,
        left: 48,
      };

      output['plot'] = {
        x: output['margin']['left'],
        y: output['margin']['top'],
        width: output['svg']['width'] - output['margin']['left'] - output['margin']['right'],
        height: output['svg']['height'] - output['margin']['top'] - output['margin']['bottom'],
      };

      return output;
    };
    let params = param();

    const sca = () => {
      const x = d3
        .scaleUtc()
        .domain(d3.extent(data, (d) => d.finishedTime) as [Date, Date])
        .nice()
        .range([0, params.plot.width]);

      const y = d3
        .scaleLinear()
        .domain([0, d3.max(data, (d) => d.wpm) as number])
        .nice()
        .range([params.plot.height, 0]);

      const size = d3
        .scaleSqrt()
        .domain(d3.extent(data, (d) => d.words) as [number, number])
        .range([5, width / 32]);

      const color = d3
        .scaleOrdinal()
        .domain(d3.map(data, (d) => d.revisionMode.toString()) as any)
        .range(['#4EA376', '#9885D5']);

      return { x: x, y: y, size: size, color: color };
    };
    let scale = sca();

    const ax = () => {
      const x = d3
        .axisBottom(scale.x)
        .ticks(width / 120)
        .tickPadding(6)
        .tickSizeOuter(0)
        .tickSizeInner(0)
        .tickFormat((value: any) => {
          // Convert Unix timestamp to Date object
          const date = new Date(value);

          // Format the date using d3.timeFormat
          return d3.timeFormat('%-I:%M %p')(date);
        });

      const y = d3.axisLeft(scale.y).ticks(10).tickPadding(6).tickSizeOuter(0).tickSizeInner(0);

      return { x: x, y: y };
    };

    let axis = ax();

    const popover = (g: any, value: any) => {
      if (!value) {
        return g.style('display', 'none');
      }

      g.style('display', null).style('pointer-events', 'none').style('font', '400 12px/1.4 "Noto Sans", sans-serif');

      const path = g.selectAll('path').data([null]).join('path').attr('fill', 'white').attr('stroke', '#202630');

      const text = g
        .selectAll('text')
        .data([null])
        .join('text')
        .call((text: any) =>
          text
            .selectAll('tspan')
            .data((value + '').split(/\n/))
            .join('tspan')
            .attr('x', 0)
            .attr('y', (d: any, i: any) => `${i * 1.5}em`)
            .attr('text-anchor', 'middle')
            .style('font-weight', (_: any, i: any) => (i ? null : '700'))

            .text((d: any) => d)
        );

      const { y, width: w, height: h } = text.node().getBBox();

      path
        .attr(
          'd',
          `
      M0.734375,0
      H${w + 20}
      V${h + 20}
      H${w / 2 + 15}
      l-5,5
      l-5,-5
      H0.734375
      V0Z`
        )
        .attr('transform', `translate(${-w / 2 - 10},${-(h + 20)})`);

      text.attr('transform', `translate(${0},${y - 20})`);
    };
    const svg = d3.select(ref.current).attr('id', 'bubble-chart');

    svg
      .append('rect')
      .attr('id', 'chart-background')
      .attr('fill', '#F6F6F6')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', params.svg.width)
      .attr('height', params.svg.height);

    svg
      .append('g')
      .attr('class', 'chart-title')
      .attr('transform', `translate(20, 20)`)
      .append('text')
      .attr('id', 'title-text')
      .attr('text-anchor', 'start')
      .attr('x', 0)
      .attr('y', 0)
      .attr('dy', '10')
      .style('font-weight', '700')
      .style('font-size', 'clamp(.7rem, 2.5vw, 1.2rem)') // minimum, preferred, maximum
      .text('');

    svg.append('g').attr('transform', `translate(${params.svg.width - params.margin.right}, ${params.svg.height})`);

    svg
      .append('g')
      .attr('id', 'x-axis')
      .attr('class', 'axis')
      .attr('transform', `translate(${params.plot.x}, ${params.plot.height + params.margin.top})`)
      .call(axis.x)
      .call((g: any) => g.selectAll('.tick text').attr('dx', '0.5em'));

    svg
      .append('g')
      .attr('id', 'y-axis')
      .attr('class', 'axis')
      .attr('transform', `translate(${params.plot.x}, ${params.plot.y})`)
      .call(axis.y)
      .call((g: any) =>
        g.selectAll('text').filter(function (this: HTMLElement, d: any, i: any) {
          if (d3.select(this).text() === '0') {
            d3.select(this.parentElement).remove();
          }
        })
      )
      .call((g: any) =>
        g.select('.tick:last-of-type text').clone().attr('x', 12).attr('text-anchor', 'start').text('Words per minute')
      );

    svg.append('g').attr('id', 'labels').attr('transform', `translate(${params.plot.x}, ${params.plot.y})`);

    const tooltip = d3
      .select('body')
      .append('div')
      .attr('class', 'bubbles-tooltip')
      .style('opacity', 0)
      .style('position', 'absolute');

    svg
      .append('g')
      .attr('id', 'bubbles')
      .attr('transform', `translate(${params.plot.x}, ${params.plot.y})`)
      .attr('fill', 'none')
      .attr('stroke-width', 1.0)
      .attr('opacity', 1)
      .selectAll('g')
      .data(data)
      .join('circle')
      .style('pointer-events', 'all') // Enable pointer events for tooltip
      .attr('cx', (d) => scale.x(d.finishedTime)!)
      .attr('cy', (d) => scale.y(d.wpm)!)
      .attr('r', (d) => scale.size(d.words)!)
      .attr('fill', (d) => (d.revisionMode ? 'yellow' : 'blue'))
      .attr('stroke', (d) => (d.revisionMode ? 'red' : 'blue'))
      .attr('fill-opacity', 0.4)
      .attr('stroke-opacity', 0.8);

    svg
      .on('mouseover', (event: any, d: any) => {
        popover(svg.append('g'), d);
        tooltip.transition().duration(200).style('opacity', 0.9);
        tooltip
          .html(`<strong>${event.title}</strong><br/>Words per minute: ${event.wpm}<br/>Accuracy: ${event.accuracy}`)
          .style('left', event.pageX + 'px')
          .style('top', event.pageY - 28 + 'px');
      })
      .on('mouseout', () => {
        tooltip.transition().duration(1500).style('opacity', 0);
      });

    tooltip.raise();
    return () => {
      tooltip.remove();
      // Add cleanup logic if needed
    };
  }, []);

  return (
    <>
      <svg ref={ref} width={'100%'} height={600} viewBox="10 50 1000 600"></svg>
    </>
  );
}

export default BubblePlot;
