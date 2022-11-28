import './MainContent.css'

export default function MainContent(): JSX.Element {
  const boxesToMake = [1, 2, 3, 4, 5, 6, 7]

  /*
  for each day of the array, create a rect element starting at x=3 y = i*20
  */
  return (
    <>
      <h1>MAIN CONTENT</h1>
      <svg width={1000} height={300} className="SVG">
        {boxesToMake.map((day, i) => {return <rect width={15} height={15} x={30} y={(i*20) + 50} key={day} fill="grey"/>}
        )}
      </svg>
    </>
  );
}

/* <rect width={15} height={15} x={30} y={10}/>
<rect width={15} height={15} x={30} y={30}/>
<rect width={15} height={15} x={30} y={50}/>
<rect width={15} height={15} x={30} y={70}/>
<rect width={15} height={15} x={30} y={90}/>
<rect width={15} height={15} x={30} y={110}/>
<rect width={15} height={15} x={30} y={130}/> */