export interface DatesDataType {
  date: Date;
  colour: "empty" | "filled";
}

export type RunningDataType = {
  hours: number,
  minutes: number,
  seconds: number,
  distance: number
}

export type APIDataType = {
  id: number,
  run_date: Date,
  distance: number,
  hours: number,
  minutes: number,
  seconds: number
}
