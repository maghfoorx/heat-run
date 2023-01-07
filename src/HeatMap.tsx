import CalendarHeatmap from "react-calendar-heatmap";
import { useState } from "react";
import ReactTooltip from "react-tooltip";
import { startDate, endDate, yearDates } from "./utils/YearDates";
import { format } from "date-fns";
import { DatesDataType } from "./utils/DatesDataInterface";
import { handleLogButton } from "./utils/handleLogButton";
import RunningData from "./RunningDataForm";

interface HeatMapProps {
  selectedDate: Date;
}
export default function HeatMap(props: HeatMapProps): JSX.Element {
  const [datesToUse, setDatesToUse] = useState<DatesDataType[]>(yearDates);

  return (
    <>
      <div className="heatmap-wrapper">
        <p className="heatmap-title">
          {format(props.selectedDate, "yyyy")} Running Activity
        </p>
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
      <hr />
      <RunningData
        datesToUse={datesToUse}
        setDatesToUse={setDatesToUse}
        selectedDate={props.selectedDate}
      />
      <hr />
      <ReactTooltip />
    </>
  );
}
