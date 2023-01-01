import { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { formattedDates } from '../utils/DatesArray';


export default function Heatmap(): JSX.Element {
  const data = [
    {name: 'Martha'},
    {name: 'cat'},
    {name: 'dog'}
  ]
  /*Now working with D3 to create an svg */
  const d3Ref = useRef<SVGSVGElement | null>(null);
  const [selection, setSelection] = useState<null | d3.Selection<SVGSVGElement | null, unknown, null, undefined>>(null);
  const height = 400

  useEffect(() => {
    if (!selection) {
      setSelection(d3.select(d3Ref.current));
    }
    else {
      selection.attr('height', height).style('background-color', 'yellow')

      // .append('rect').attr('width', 100).attr('height', 100).attr('fill', 'blue')
    }
  }, [selection])
  return (
    <div className='calendar-map-wrapper'>
      <svg ref={d3Ref} width={'100%'}></svg>
    </div>
  )
}