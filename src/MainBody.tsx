import { useEffect, useState } from "react";
import ViewCalendar from "./ViewCalendar";
import HeatMap from "./HeatMap";
import Table from "./Table";
import { APIDataType } from "./utils/DatesDataInterface";
import { getRunningData } from "./utils/getRunningData";
import Form from "./Form";

export default function MainBody(): JSX.Element {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [runningData, setRunningData] = useState<APIDataType[]>([]);

  useEffect(() => {
    getRunningData().then((data) => {
      setRunningData(data);
    });
  }, []);

  return (
    <>
      <HeatMap selectedDate={selectedDate} runningData={runningData} />
      <hr />
      {/* <Form selectedDate={selectedDate}/> */}
      <hr />
      <ViewCalendar
        setSelectedDate={setSelectedDate}
        selectedDate={selectedDate}
      />
      {/* <Table runningData={runningData}/> */}
    </>
  );
}
