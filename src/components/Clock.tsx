import { format } from "date-fns";
import { useEffect, useState } from "react";

export default function Clock(): JSX.Element {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const updateTime = setInterval(() => {
            setTime(new Date())
        }, 1000)
    })
    return (
        <>
        <h3>The Time currenly is: {format(time, 'HH:mm:ss')}</h3>
        </>
    )
}