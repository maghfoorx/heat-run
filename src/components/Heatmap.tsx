import { startOfYear, endOfYear, eachDayOfInterval, format, addYears, subDays } from 'date-fns';

export interface DataForHeatmap {
  date: Date;
  color: "red" | "filled"
}


export default function Heatmap(): JSX.Element {
  const currentDate = new Date();
  const startDate = subDays(startOfYear(addYears(currentDate, 1)), 1)
  const endDate = endOfYear(addYears(currentDate, 1));
  const dates = eachDayOfInterval({ start: startDate, end: endDate });

  

  return (
    <>
    
    </>
  );
}
