export interface HeatmapDataType {
  date: Date;
  distance: number;
}

export type FormDataType = {
  date: Date;
  hours: number;
  minutes: number;
  seconds: number;
  distance: number;
};

export type APIDataType = {
  id: number;
  run_date: string;
  distance: number;
  hours: number;
  minutes: number;
  seconds: number;
};
