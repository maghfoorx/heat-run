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
        <Calendar value={props.selectedDate} onChange={props.setSelectedDate} />
        <div className="calendar-text">
        <p>Select a date and press Log to make an entry!</p>
        <p>
          <b>Date Selected is:</b>{" "}
        </p>
        {format(props.selectedDate, "MMM dd, yyyy")}
        </div>
      </section>
    </>
  );
}
