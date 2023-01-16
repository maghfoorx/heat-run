import { format } from "date-fns";
import { HeatmapDataType } from "../utils/DatesDataInterface";
import "./popup.css"

interface PopupProps {
    popup: boolean;
    setPopup: React.Dispatch<React.SetStateAction<boolean>>
    valueForPopup: null | HeatmapDataType
}

export default function PopupView(props: PopupProps): JSX.Element {
    return (
        <>
        <p>Hello</p>
        {props.popup && <div className="modal">
            <div className="overlay"></div>
            <div className="modal-content">
                {props.valueForPopup && <h2>{format(props.valueForPopup?.date, "MMM dd, yyyy")}</h2>}
                {props.valueForPopup && <p>You ran {props.valueForPopup.distance} km on this day!</p>}
                <button className="close-modal" onClick={() => props.setPopup(!props.popup)}>Close</button>
            </div>
        </div>}
        
        </>
    )
}