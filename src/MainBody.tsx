import CalendarHeatmap from "react-calendar-heatmap";
import {
  startOfYear,
  endOfYear,
  eachDayOfInterval,
  format,
  subDays,
} from "date-fns";
import { useState } from "react";
import ReactTooltip from "react-tooltip";
import "./styles.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

interface DatesWithColour {
  date: Date;
  colour: "empty" | "filled";
}
export default function MainBody(): JSX.Element {
  const currentDate = new Date();
  const startDate = subDays(startOfYear(currentDate), 1);
  const endDate = endOfYear(currentDate);
  const dates = eachDayOfInterval({ start: startDate, end: endDate });
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const datesWithColour: DatesWithColour[] = dates.map((date) => {
    return {
      date: date,
      colour: "empty",
    };
  });
  const [datesToUse, setDatesToUse] =
    useState<DatesWithColour[]>(datesWithColour);
  const handleLogButton = () => {
    const newDateswithColours: DatesWithColour[] = datesToUse.map((object) => {
      if (object.date.getTime() === selectedDate.getTime()) {
        return { ...object, colour: "filled" };
      }
      return object;
    });
    setDatesToUse(newDateswithColours);
  };

  return (
    <>
      <>
        <div className="heatmap-wrapper">
          <CalendarHeatmap
            gutterSize={1}
            showWeekdayLabels={true}
            startDate={startDate}
            endDate={endDate}
            values={datesToUse}
            classForValue={(value) => {
              if (!value) {
                return "colour-empty";
              }
              if (value.colour === "empty") {
                return "colour-empty";
              }
              if (value.colour === "filled") {
                return "colour-filled";
              }
              return "colour-empty";
            }}
            tooltipDataAttrs={(value: DatesWithColour) => {
              let formattedDate: string | undefined;
              if (value.date) {
                formattedDate = format(value.date, "MMM dd, yyyy");
              }
              return {
                "data-tip": `${formattedDate}`,
              };
            }}
          />
        </div>
        <Calendar value={selectedDate} onChange={setSelectedDate} />
        <p>
          <b>Date Selected is:</b>{" "}
        </p>
        {format(selectedDate, "MMM dd, yyyy")}
      </>
      <hr />
      <button className="log-button" onClick={handleLogButton}>
        Log Date
      </button>
      <ReactTooltip />
    </>
  );
}
