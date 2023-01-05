import { useState } from "react";
import CalendarView from "./CalendarView";

export default function MainBody(): JSX.Element {
    const [ selectedDate, setSelectedDate ] = useState<Date>(new Date)
    return (
        <>
        <CalendarView setSelectedDate={setSelectedDate}/>
        </>
    )
}