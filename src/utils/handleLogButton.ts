import { DatesDataType } from "./DatesDataInterface";

export const handleLogButton = (
  datesToUse: DatesDataType[],
  selectedDate: Date
) => {
  const newDateswithColours: DatesDataType[] = datesToUse.map((object) => {
    if (object.date.getTime() === selectedDate.getTime()) {
      return { ...object, colour: "filled" };
    }
    return object;
  });
  return newDateswithColours;
};
