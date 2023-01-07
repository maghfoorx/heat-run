import React, { useState } from "react";
import { DatesDataType, RunningDataType } from "./utils/DatesDataInterface";
import { handleLogButton } from "./utils/handleLogButton";

interface RunningDataProps {
  datesToUse: DatesDataType[];
  setDatesToUse: React.Dispatch<React.SetStateAction<DatesDataType[]>>;
  selectedDate: Date;
}

//This component is a form that allows the user to input the data of their running activity. Once state of type RunningDataType is being managed.
export default function RunningData(props: RunningDataProps): JSX.Element {
  const [runningData, setRunningData] = useState<RunningDataType>({
    hours: 0,
    minutes: 0,
    seconds: 0,
    distance: 0,
  });

  const handleRunningData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRunningData({ ...runningData, [e.target.name]: e.target.value });
  };

  const handleSubmitButton = (e: React.FormEvent<HTMLFormElement>) => {
    props.setDatesToUse(handleLogButton(props.datesToUse, props.selectedDate));
    e.preventDefault();
  };
  return (
    <form className="form-data" onSubmit={handleSubmitButton}>
      <label>
        Hours:
        <input
          name="hours"
          type="number"
          value={runningData.hours}
          onChange={handleRunningData}
        />
      </label>
      <label>
        Minutes:
        <input
          name="minutes"
          type="number"
          value={runningData.minutes}
          onChange={handleRunningData}
        />
      </label>
      <label>
        Seconds:
        <input
          name="seconds"
          type="number"
          value={runningData.seconds}
          onChange={handleRunningData}
        />
      </label>
      <label>
        Distance(km):
        <input
          name="distance"
          type="number"
          value={runningData.distance}
          onChange={handleRunningData}
        />
      </label>
      <button type="submit">Log Data</button>
    </form>
  );
}

//onChange={(event) => handleRunningData(event.target.name, event.target.value)}
// const handleRunningData = (name, value) => {
//     setRunningData({...runningData, [e.target.name]: e.target.value})
// }
