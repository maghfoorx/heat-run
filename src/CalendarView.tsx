import { format } from "date-fns";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

interface CalendarViewProps {
    setSelectedDate: React.Dispatch<React.SetStateAction<Date>>
}

//This component renders the calendar view that you use to select a date
export default function CalendarView(props: CalendarViewProps): JSX.Element {
    return (
        <>
        <Calendar value={selectedDate} onChange={setSelectedDate}/>
        <p>
          <b>Date Selected is:</b>{" "}
        </p>
        {format(selectedDate, "MMM dd, yyyy")}
        </>
    )
}