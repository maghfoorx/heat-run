import "./CalendarBody.css";
import { getDaysInYear, differenceInCalendarDays } from "date-fns";

export default function MainContent(): JSX.Element {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  const startOfYear = new Date(currentYear, 0, 1);

  const daysInYearSoFar = differenceInCalendarDays(currentDate, startOfYear);

  //I want boxes to have 7 rows
  const boxesPerRow = 7;

  //making boxes for each day of the year so far
  const boxes = [];
  for (let i = 0; i < daysInYearSoFar; i++) {
    const xPosition = Math.floor(i / boxesPerRow) * 15;
    const yPosition = (i % boxesPerRow) * 15;
    boxes.push(
      <rect
        className="EachDayBox"
        key={i}
        x={xPosition}
        y={yPosition}
        width={10}
        height={10}
        fill="grey"
      ></rect>
    );
  }

  return (
    <>
      <h1>MAIN CONTENT</h1>
      <p>Currently, I have one box plotted for each day in the year so far</p>
      <div className="SVGWrapper">
        <svg width={1000} height={500} className="SVGBox">
          {boxes}
        </svg>
      </div>
    </>
  );
}
