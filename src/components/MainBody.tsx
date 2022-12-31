import Clock from "./Clock";
import Heatmap from "./Heatmap";
import "./styles.css";

export default function MainBody(): JSX.Element {
    return (
        <>
        <Clock />
        <Heatmap />
        </>
    )
}