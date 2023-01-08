import { APIDataType } from "./utils/DatesDataInterface";
import { format } from "date-fns";

interface TableProps {
  runningData: APIDataType[];
}

export default function Table(props: TableProps): JSX.Element {
  return (
    <section>
      <table className="runs-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Distance /km</th>
            <th>Hours</th>
            <th>Minutes</th>
            <th>Seconds</th>
          </tr>
        </thead>
        <tbody>
          {props.runningData.length > 0 &&
            props.runningData.map((run) => {
              return (
                <tr key={run.id}>
                  <th>{format(Date.parse(run.run_date), "MMMM dd, yyyy")}</th>
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
