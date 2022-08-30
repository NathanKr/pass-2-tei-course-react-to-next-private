import "./Event.css";
import { FC } from "react";
import IEvent from "../Interfaces/IEvent";

const eventPagePic = "/images/eventPage-pic.jpg";

const Event: FC<IEvent> = ({ startDt, title, desc, location, url }) => {
  const dateTime = startDt;
  const urlElem = url ? <a href={url.href}>{url.text}</a> : null;

  return (
    <div className="Event">
      <div className="Event-img-container">
        <img src={eventPagePic} alt="event" className="Event-img" />
        <div className="Event-img-inner-container">
          <h5 className="Event-date">{dateTime}</h5>
        </div>
      </div>

      <div className="Event-desc-container">
        <h4 className="Event-name">{title}</h4>
        {urlElem}
        <p className="Event-desc">{desc}</p>
        <small>Location : {location}</small>
      </div>
    </div>
  );
};

export default Event;
