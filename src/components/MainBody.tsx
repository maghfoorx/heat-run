import Clock from "./Clock";
import Heatmap from "./Heatmap";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./styles.css";

export default function MainBody(): JSX.Element {
  return (
    <>
      <Clock />
      <Heatmap />
      <Calendar />
    </>
  );
}
