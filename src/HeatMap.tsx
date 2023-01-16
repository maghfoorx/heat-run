import CalendarHeatmap from "react-calendar-heatmap";
import { useEffect, useState } from "react";
import ReactTooltip from "react-tooltip";
import { startDate, endDate, yearDates } from "./utils/YearDates";
import { format } from "date-fns";
import { APIDataType, HeatmapDataType } from "./utils/DatesDataInterface";
import PopupView from "./components/Popup";

//to convert the received date from the API to the date type in JS you need to Date.parse(props.runningDate[i].run_date). This will make the date into a number.

interface HeatMapProps {
  runningData: APIDataType[];
  logButtonClicked: boolean;
}
export default function HeatMap(props: HeatMapProps): JSX.Element {
  const [dataForHeatmap, setDataForHeatmap] = useState(yearDates);
  const [popup, setPopup] = useState(false);
  const [valueForPopup, setValueForPopup] = useState<null | HeatmapDataType>(
    null
  );

  useEffect(() => {
    const updatedData = [...dataForHeatmap];
    for (const heatmapData of updatedData) {
      const updatingDistanceAndColour = props.runningData.find(
        (data) => Date.parse(data.run_date) === heatmapData.date.getTime()
      );
      if (updatingDistanceAndColour) {
        heatmapData.distance = updatingDistanceAndColour.distance;
      }
    }
    setDataForHeatmap(updatedData);
  }, [props.runningData, props.logButtonClicked]);

  const handleCircleClicked = (value: HeatmapDataType) => {
    setPopup(!popup);
    setValueForPopup(value);
  };

  return (
    <>
      <div className="heatmap-wrapper">
        <p className="heatmap-title">2023 Running Activity</p>
        <CalendarHeatmap
          gutterSize={1}
          showWeekdayLabels={true}
          startDate={startDate}
          endDate={endDate}
          values={dataForHeatmap}
          classForValue={(value) => {
            if (!value) {
              return "colour-empty";
            }
            if (value.distance === 0) {
              return "colour-empty";
            }
            if (value.distance < 5 && value.distance > 0) {
              return "colour-distance-1";
            }
            if (value.distance >= 5 && value.distance < 10) {
              return "colour-distance-3";
            }
            if (value.distance >= 10) {
              return "colour-distance-4";
            }
          }}
          tooltipDataAttrs={(value: HeatmapDataType) => {
            let formattedDate: string | undefined;
            if (value.date) {
              formattedDate = format(value.date, "MMM dd, yyyy");
            }
            return {
              "data-tip": `${formattedDate}, distance: ${value.distance}km`,
            };
          }}
          onClick={(value) => handleCircleClicked(value)}
        />
      </div>
      <ReactTooltip />
      <PopupView
        popup={popup}
        setPopup={setPopup}
        valueForPopup={valueForPopup}
      />
    </>
  );
}
