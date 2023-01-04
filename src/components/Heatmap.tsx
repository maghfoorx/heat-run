import { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { eachDayOfInterval, endOfYear, format, startOfYear } from "date-fns";
import Calendar from "react-calendar";
import ReactTooltip from 'react-tooltip'

interface FormattedDatesTypes {
    date: string
    completed: boolean
  }

  const currentDate = new Date();
  const startDate = startOfYear(currentDate)
  const endDate = endOfYear(currentDate);
  const dates = eachDayOfInterval({ start: startDate, end: endDate })
  const formattedDates: FormattedDatesTypes[] = dates.map(date => ({ date: format(date, 'dd-MM-yyyy'), completed: false }));


  const monthsArray = ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']


export default function Heatmap(): JSX.Element {
  /*Now working with D3 to create an svg */
  const d3Ref = useRef<SVGSVGElement | null>(null);
  const [selection, setSelection] = useState<null | d3.Selection<SVGSVGElement | null, unknown, null, undefined>>(null);
  const [dataToUse, setDataToUse] = useState<FormattedDatesTypes[]>(formattedDates)
  console.log(dataToUse)

  useEffect(() => {
    if (!selection) {
      setSelection(d3.select(d3Ref.current));
    }
    else {
      //styling the main SVG
      const margin = {top: 60, left: 50, right: 50, bottom: 50}
      const cellSize = 15
      const svg = selection
      .style('background-color', 'yellow')

      //create a group for all the rectangles and then making the rectangles
      const rectangle = svg
      .append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`)
      .selectAll("rect")
      .data(dataToUse)
      .enter()
      .append("rect")

      const rectanglePadding = 2;
      rectangle
      .attr("width", cellSize)
      .attr("height", cellSize)
      .attr("x", (d, i) => Math.floor(i / 7) * (cellSize + rectanglePadding))
      .attr("y", (d, i) => (i % 7) * (cellSize + rectanglePadding))
      .attr('class', (d, i) => d.completed === false ? 'rectangle-empty' : 'rectangle-filled')
      .attr('data-tip', (d) => d.date)

      //adding tooltip
      
      
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
  }, [selection, dataToUse])


  //working with calendar to select dates.
  const [selectedDate, setSelectedDate] = useState<string>(format(new Date, 'dd-MM-yyyy'))

  //creating a function to change the value of completed key in data when Log Button is pressed
  function handleLogButton() {
    const updatedData: FormattedDatesTypes[] = dataToUse.map((object) => {
      if (object.date === selectedDate) {
        return { ...object, completed: true }
      }
      return object
    })
    setDataToUse(updatedData)
  }

  return (
    <>
    <div className='calendar-map-div'>
      <div className='svg-wrapper'>
      <svg ref={d3Ref} width={'100%'} height={'100%'}></svg>
      <button className='log-button' onClick={handleLogButton}>Log Activity</button>
      <p><b>Selected Date: {selectedDate.toString()}</b></p>
      </div>
    </div>
    <Calendar onChange={(date: Date) => setSelectedDate(format(date, 'dd-MM-yyyy'))}/>
    <ReactTooltip />
    </>
  )
}