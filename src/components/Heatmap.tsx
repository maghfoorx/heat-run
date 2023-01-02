import { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';



export default function Heatmap(): JSX.Element {
  const names = ["hello", "cat", "world"]
  /*Now working with D3 to create an svg */
  const d3Ref = useRef<SVGSVGElement | null>(null);
  const [selection, setSelection] = useState<null | d3.Selection<SVGSVGElement | null, unknown, null, undefined>>(null);
  const height = 400

  useEffect(() => {
    if (!selection) {
      setSelection(d3.select(d3Ref.current));
    }
    else {
      selection
      .attr('height', height).style('background-color', 'yellow')
      .selectAll("rect")
      .data(names)
      .enter()
      .append("rect")
      .attr("width", 20)
      .attr("height", 20)
      .attr("fill", "blue")
      console.log(selection)
      
    }
  }, [selection])
  return (
    <div className='calendar-map-wrapper'>
      <svg ref={d3Ref} width={'100%'}></svg>
    </div>
  )
}