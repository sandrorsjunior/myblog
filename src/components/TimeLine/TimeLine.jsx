import {timeLineData} from "./timeLineData";
import {TimelineItem} from "./TimeLineItem";
import "./style.css";
export const Timeline = () => {
    return(
        <div className="timeline-container">
            {timeLineData.map((data, idx) => (
                <TimelineItem data={data} key={idx} />
            ))}
        </div>
    );
}