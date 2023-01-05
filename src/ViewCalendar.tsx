import { format } from "date-fns";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";

interface CalendarViewProps {
  setSelectedDate: React.Dispatch<React.SetStateAction<Date>>;
  selectedDate: Date;
}

//This component renders the calendar view that you use to select a date
export default function ViewCalendar(props: CalendarViewProps): JSX.Element {
  return (
    <>
      <section className="calendar-wrapper">
        <p>
          <b>Date Selected is:</b>{" "}
        </p>
        {format(props.selectedDate, "MMM dd, yyyy")}
        <Calendar value={props.selectedDate} onChange={props.setSelectedDate} />
      </section>
    </>
  );
}
