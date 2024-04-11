import {
  axisBottom,
  axisLeft,
  ScaleBand,
  scaleBand,
  ScaleLinear,
  scaleLinear,
  select
} from "d3";
import { useEffect, useRef } from "react";
import * as React from 'react';


interface Data {
  label: string;
  value: number;
}

interface BarChartProps {
  data: Data[];
}

interface AxisBottomProps {
  scale: ScaleBand<string>;
  transform: string;
}

interface AxisLeftProps {
  scale: ScaleLinear<number, number, never>;
}

interface BarsProps {
  data: BarChartProps["data"];
  height: number;
  scaleX: AxisBottomProps["scale"];
  scaleY: AxisLeftProps["scale"];
}

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

function AxisBottom({ scale, transform }: AxisBottomProps) {
  const ref = useRef<SVGGElement>(null);


  useEffect(() => {
    if (ref.current) {
      select(ref.current).call(axisBottom(scale));
    }
  }, [scale]);

  return <g ref={ref} transform={transform} />;
}

function AxisLeft({ scale }: AxisLeftProps) {
  const ref = useRef<SVGGElement>(null);

  useEffect(() => {
    if (ref.current) {
      select(ref.current).call(axisLeft(scale));
    }
  }, [scale]);

  return <g ref={ref} />;
}

function Bars({ data, height, scaleX, scaleY }: BarsProps) {
  return (
    <>
      {data.map(({ value, label }, i) => (
        <rect
          key={`bar-${label}`}
          x={scaleX(label)}
          y={scaleY(value)}
          width={scaleX.bandwidth()}
          height={height - scaleY(value)}
          fill={colors[i]}
        />
      ))}
    </>
  );
}

function AppkubeBarChartPanel() {
  const data = [
    { label: "State Task Failed", value: 100 },
    { label: "State Task Timeout", value: 200 },
    { label: "State Run Time", value: 50 },
    { label: "State Data Limit Exceed", value: 150 },
    { label: "State No Choice Matched", value: 90 }
  ];
  const margin = { top: 10, right: 0, bottom: 20, left: 30 };
  const width = 700 - margin.left - margin.right;
  const height = 300 - margin.top - margin.bottom;

  const scaleX = scaleBand()
    .domain(data.map(({ label }) => label))
    .range([0, width])
    .padding(0.5);
  const scaleY = scaleLinear()
    .domain([0, Math.max(...data.map(({ value }) => value))])
    .range([height, 0]);

  return (
    <svg
      width={width + margin.left + margin.right}
      height={height + margin.top + margin.bottom}
    >
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        <AxisBottom scale={scaleX} transform={`translate(0, ${height})`} />
        <AxisLeft scale={scaleY} />
        <Bars data={data} height={height} scaleX={scaleX} scaleY={scaleY} />
      </g>
    </svg>
  );
}

export default AppkubeBarChartPanel;
