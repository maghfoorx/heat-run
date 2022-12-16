import { format } from "date-fns";
import { useEffect, useState } from "react";

export default function Clock(): JSX.Element {
  const [time, setTime] = useState(new Date());
  console.log(time);

  useEffect(() => {
    const updateTime = setInterval(() => {
      setTime(new Date());
    }, 1000);
  });
  return (
    <>
      <h3>The Time currenly is: {format(time, "HH:mm:ss z")}</h3>
    </>
  );
}

/*
Lesson about useEffect:
You cannot just have your useEffect do setTime(new Date()) because then it will be an infinite loop and console starts giving you errors.
Instead you should run a function that runs after every 1 second. Providing no 2nd argument makes the useEffect run on every render
 so when the time state changes after the updateTime runs the useEffect will run and so it keeps running on every re render.
*/
