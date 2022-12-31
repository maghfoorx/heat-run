import { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { startOfYear, endOfYear, eachDayOfInterval, format } from 'date-fns'
import { schemeBrBG } from 'd3';

export default function Heatmap(): JSX.Element {
  const currentDate = new Date();
  const startDate = startOfYear(currentDate)
  const endDate = endOfYear(currentDate);
  const dates = eachDayOfInterval({ start: startDate, end: endDate })
  const formattedDates = dates.map(date => format(date, 'dd-MM-yyyy'));
  /*Now working with D3 to create an svg */
  const d3Container = useRef(null)
  const width = 1000
  const height = 400

  useEffect(() => {
    if (d3Container.current) {
      const svg = d3.select(d3Container.current).attr('width', width).attr('height', height).style('background-color', 'yellow');

const gutterSize = 5;
const rectWidth = 20;
const rectHeight = 20;
const numColumns = Math.floor(width / (rectWidth + gutterSize));  // Calculate the number of columns
const numRows = Math.floor(height / (rectHeight + gutterSize));  // Calculate the number of rows

const rects = svg.selectAll('rect').data(formattedDates)
rects.enter().append('rect')
  .attr('width', rectWidth)
  .attr('height', rectHeight)
  .attr('x', (d, i) => (i % numColumns) * (rectWidth + gutterSize))  // Set the `x` position based on the number of columns
  .attr('y', (d, i) => Math.floor(i / numColumns) * (rectHeight + gutterSize))  // Set the `y` position based on the number of rows
  .attr('fill', 'red')


    }
  }, [d3Container.current, formattedDates])
  return (
    <div>
      <svg ref={d3Container}></svg>
    </div>
  )
}