import { useEffect, useState } from "react";
import HeatMap from "./HeatMap";
import Table from "./Table";
import { APIDataType } from "./utils/DatesDataInterface";
import { getRunningData } from "./utils/getRunningData";
import Form from "./Form";

export default function MainBody(): JSX.Element {
  const [runningData, setRunningData] = useState<APIDataType[]>([]);
  const [logButtonClicked, setLogButtonClicked] = useState<boolean>(false);

  useEffect(() => {
    getRunningData().then((data) => {
      setRunningData(data);
    });
  }, [logButtonClicked]);

  return (
    <>
      <HeatMap
        runningData={runningData}
        logButtonClicked={logButtonClicked}
        setLogButtonClicked={setLogButtonClicked}
      />
      <hr />
      <Form setLogButtonClicked={setLogButtonClicked} />
      <hr />
      <div className="table-calendar">
        <Table runningData={runningData} />
      </div>
    </>
  );
}
