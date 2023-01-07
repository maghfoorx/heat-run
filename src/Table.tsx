import { getRunningData } from "./utils/getRunningData";
import { APIDataType } from "./utils/DatesDataInterface";
import { useEffect, useState } from "react";
import { format } from "date-fns";

export default function Table(): JSX.Element {
  const [runningData, setRunningData] = useState<APIDataType[]>([]);

  useEffect(() => {
    getRunningData().then((data) => {
      setRunningData(data);
    });
  }, []);

  return (
    <section>
      <table>
        <tbody>
          <tr>
            <th>Date</th>
            <th>Distance</th>
            <th>Hours</th>
            <th>Minutes</th>
            <th>Seconds</th>
          </tr>
          {runningData.map((run) => {
            return (
              <tr key={run.id}>
                <th>
                  {format(
                    parseInt(run.run_date.toLocaleString()),
                    "dd-MM-yyyy"
                  )}
                </th>
                <th>{run.distance}</th>
                <th>{run.hours}</th>
                <th>{run.minutes}</th>
                <th>{run.seconds}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
