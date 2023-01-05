import { useState } from "react";
import CalendarView from "./CalendarView";
import HeatMap from "./HeatMap";

export default function MainBody(): JSX.Element {
    const [ selectedDate, setSelectedDate ] = useState<Date>(new Date)
    return (
        <>
        <HeatMap selectedDate={selectedDate}/>
        <CalendarView setSelectedDate={setSelectedDate} selectedDate={selectedDate}/>
        </>
    )
}