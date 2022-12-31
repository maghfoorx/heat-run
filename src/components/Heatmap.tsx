import { getDaysInYear, differenceInCalendarDays } from "date-fns";

export default function Heatmap(): JSX.Element {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  const startOfYear = new Date(currentYear, 0, 1);

  const daysInYearSoFar = differenceInCalendarDays(currentDate, startOfYear);

  //I want boxes to have 7 rows
  const boxesPerRow = 7;

  //making boxes for each day of the year so far
  const boxes = [];
  for (let i = 10; i < daysInYearSoFar + 10; i++) {
    const xPosition = Math.floor(i / boxesPerRow) * 20;
    const yPosition = (i % boxesPerRow) * 20 + 20;
    boxes.push(
      <circle key={i} cx={xPosition} cy={yPosition} r="8" fill="grey" />
    );
  }

  return (
    <>
      <h1>Running Heatmap</h1>
      <p>
        Currently, I have one circle plotted for each day in the year so far
      </p>
      <div className="SVGWrapper">
        <svg width={1200} height={500} className="SVGBox">
          {boxes}
        </svg>
      </div>
    </>
  );
}
