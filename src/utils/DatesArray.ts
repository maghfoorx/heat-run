import { eachDayOfInterval, endOfYear, format, startOfYear } from "date-fns";

interface FormattedDatesTypes {
    date: string
  }
  const currentDate = new Date();
  const startDate = startOfYear(currentDate)
  const endDate = endOfYear(currentDate);
  const dates = eachDayOfInterval({ start: startDate, end: endDate })
  export const formattedDates: FormattedDatesTypes[] = dates.map(date => ({ date: format(date, 'dd-MM-yyyy') }));