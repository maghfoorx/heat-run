import { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { eachDayOfInterval, endOfYear, format, startOfYear } from "date-fns";

interface FormattedDatesTypes {
    date: string
  }
  const currentDate = new Date();
  const startDate = startOfYear(currentDate)
  const endDate = endOfYear(currentDate);
  const dates = eachDayOfInterval({ start: startDate, end: endDate })
  const formattedDates: FormattedDatesTypes[] = dates.map(date => ({ date: format(date, 'dd-MM-yyyy') }));


  const monthsArray = ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
export default function Heatmap(): JSX.Element {
  /*Now working with D3 to create an svg */
  const d3Ref = useRef<SVGSVGElement | null>(null);
  const [selection, setSelection] = useState<null | d3.Selection<SVGSVGElement | null, unknown, null, undefined>>(null);

  useEffect(() => {
    if (!selection) {
      setSelection(d3.select(d3Ref.current));
    }
    else {
      //styling the main SVG
      const svg = selection
      .style('background-color', 'yellow')

      //create a group for all the rectangles and then making the rectangles
      const margin = {top: 60, left: 50, right: 50, bottom: 50}
      const rectangle = svg
      .append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`)
      .selectAll("rect")
      .data(formattedDates)
      .enter()
      .append("rect")

      const rectanglePadding = 2;
      const cellSize = 15
      rectangle
      .attr("width", cellSize)
      .attr("height", cellSize)
      .attr("x", (d, i) => Math.floor(i / 7) * (cellSize + rectanglePadding))
      .attr("y", (d, i) => (i % 7) * (cellSize + rectanglePadding))
      .attr('class', 'rectangle-empty')
      
      //creating a group for the months and then adding the months on top of rectangles
      const marginForMonths = margin.top - 5
      const month = svg
      .append('g')
      .attr('transform', `translate(${margin.left}, ${marginForMonths})`)
      .selectAll('text')
      .data(monthsArray)
      .enter()
      .append('text')

      //adding months
      month
      .text(d => d)
      .attr('x', (d, i) => i * 80)
      .attr('y', 0)
      .attr('font-size', '15px')
      
    }
  }, [selection])
  return (
    <div className='calendar-map-wrapper'>
      <svg ref={d3Ref} width={'100%'} height={'100%'}></svg>
    </div>
  )
}