import { useState } from "react";
import ViewCalendar from "./ViewCalendar";
import HeatMap from "./HeatMap";

export default function MainBody(): JSX.Element {
    const [ selectedDate, setSelectedDate ] = useState<Date>(new Date)
    return (
        <>
        <HeatMap selectedDate={selectedDate}/>
        <ViewCalendar setSelectedDate={setSelectedDate} selectedDate={selectedDate}/>
        </>
    )
}