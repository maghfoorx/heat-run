import { format } from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface DatepickerProps {
  setSelectedDate: React.Dispatch<React.SetStateAction<Date>>;
  selectedDate: Date;
}

export default function Datepicker(props: DatepickerProps): JSX.Element {
  return (
    <>
      <DatePicker
        selected={props.selectedDate}
        onChange={(date: Date) => props.setSelectedDate(date)}
      />
      <p>
        Selected Date is: <b>{format(props.selectedDate, "dd MMMM, yyyy")}</b>
      </p>
    </>
  );
}
