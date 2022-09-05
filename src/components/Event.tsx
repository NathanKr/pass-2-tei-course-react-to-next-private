import styles from "styles/Event.module.css";
import { FC } from "react";
import IEvent from "../Interfaces/IEvent";
import Image from "next/image";

const eventPagePic = "/images/eventPage-pic.jpg";
const WIDTH_ORIG_PX = 1920;
const HEIGHT_ORIG_PX = 1280;
const IMAGE_FACTOR = 4;

const Event: FC<IEvent> = ({ startDt, title, desc, location, url }) => {
  const dateTime = startDt;
  const urlElem = url ? <a href={url.href}>{url.text}</a> : null;

  return (
    <div className={styles.Event}>
      <div className={styles.Event_img_container}>
        <Image
          width={WIDTH_ORIG_PX/IMAGE_FACTOR}
          height={HEIGHT_ORIG_PX/IMAGE_FACTOR}
          src={eventPagePic}
          alt="event"
          className={styles.Event_img}
        />
        <div className={styles.Event_img_inner_container}>
          <h5 className={styles.Event_date}>{dateTime}</h5>
        </div>
      </div>

      <div className={styles.Event_desc_container}>
        <h4 className={styles.Event_name}>{title}</h4>
        {urlElem}
        <p className={styles.Event_desc}>{desc}</p>
        <small>Location : {location}</small>
      </div>
    </div>
  );
};

export default Event;
