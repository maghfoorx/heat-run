import { startOfYear, endOfYear, eachDayOfInterval, subDays } from "date-fns";
import { DatesDataType } from "./DatesDataInterface";

//This file creates a dates array from the start of the year to the end. It then maps over those dates to create an array of objects that looks like default data array.

const currentDate = new Date();
const startDate = subDays(startOfYear(currentDate), 1);
const endDate = endOfYear(currentDate);
const datesForYear = eachDayOfInterval({ start: startDate, end: endDate });
const yearDatesWithDefaultData: DatesDataType[] = datesForYear.map((date) => {
  return {
    date: date,
    colour: "empty",
  };
});

const yearDates = yearDatesWithDefaultData;

export { startDate, endDate, yearDates };
