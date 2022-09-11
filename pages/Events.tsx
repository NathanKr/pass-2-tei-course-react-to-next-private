import Event from "src/components/Event";
import styles from "styles/Events.module.css";
import IEvent, { IUrl } from "../src/Interfaces/IEvent";
import Head from "next/head";
import { getHostUrl } from "src/logic/utils";
import { FC } from "react";

interface IProps{
  events : IEvent []
}


export async function getStaticProps() {
  let props : IProps = {events : []};
  
  const res = await fetch(`${getHostUrl()}/api/events`);
  props.events = await res.json()

  return {
    props // will be passed to the page component as props
  }
}


const Events : FC<IProps>= ({events}) => {

  const elements = events.map((item, index) => {
    return (
      <Event
        key={index}
        startDt={item.startDt}
        title={item.title}
        desc={item.desc}
        location={item.location}
        url={
          item.url ? { href: item.url.href, text: item.url.text } : undefined
        }
      />
    );
  });

  return (
    <div className={styles.Events}>
      <Head>
        <title>Nathan Krasney | React Courses & Mentoring</title>
        <meta
          name="description"
          content="Web developer , register to these react events. Number of sits is limited. Contact me for more info"
        />
      </Head>
      <h1 className={styles.Events_title}>Upcoming Events</h1>
      <div className={styles.Events_container}>{elements}</div>
    </div>
  );
};

export default Events;
