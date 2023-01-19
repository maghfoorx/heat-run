import axios from "axios";
import { format } from "date-fns";
import { BaseURL } from "../utils/BaseURL";
import { HeatmapDataType } from "../utils/DatesDataInterface";
import "./popup.css";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

interface PopupProps {
  popup: boolean;
  setPopup: React.Dispatch<React.SetStateAction<boolean>>;
  valueForPopup: null | HeatmapDataType;
  setLogButtonClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function PopupView(props: PopupProps): JSX.Element {


  const handleDeleteLog = async () => {
    try {
      await axios.delete(`${BaseURL}/runs/${props.valueForPopup?.date}`,)
      toast.success("Data deleted for this date!😁")
      props.setLogButtonClicked((prev) => !prev)
    }
    catch (error) {
      toast.error("Failed to delete data☹️")
    }
  }

  const notifyButton = () => {
    toast.error("it didnt work:(")
  }
  return (
    <>
      <p>Hello</p>
      {props.popup && (
        <div className="modal">
          <div className="overlay"></div>
          <div className="modal-content">
            {props.valueForPopup && (
              <h2>{format(props.valueForPopup?.date, "MMM dd, yyyy")}</h2>
            )}
            {props.valueForPopup && (
              <p>You ran {props.valueForPopup.distance} km on this day!</p>
            )}
            <button
              className="close-modal"
              onClick={() => props.setPopup(!props.popup)}
            >
              Close
            </button>
            <button className="delete-modal" onClick={handleDeleteLog}>Delete Log</button>
          </div>
        </div>
      )}
      <ToastContainer autoClose={2000} />
    </>
  );
}
