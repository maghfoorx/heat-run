import CalendarHeatmap from "react-calendar-heatmap";
import { useState } from "react";
import ReactTooltip from "react-tooltip";
import { startDate, endDate, yearDates } from "./utils/YearDates";
import { format } from "date-fns";
import "./styles.css";
import { DatesDataType } from "./utils/DatesDataInterface";


export default function HeatMap(): JSX.Element {

  const [datesToUse, setDatesToUse] =
    useState<DatesDataType[]>(yearDates);
  const handleLogButton = () => {
    const newDateswithColours: DatesDataType[] = datesToUse.map((object) => {
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
            tooltipDataAttrs={(value: DatesDataType) => {
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
      </>
      <hr />
      <button className="log-button" onClick={handleLogButton}>
        Log Date
      </button>
      <ReactTooltip />
    </>
  );
}
