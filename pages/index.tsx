import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import EventsSlide from "src/components/EventsSlide";
import styles from "styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.Home}>
      <Image
        src="/images/main-pic-2.jpg"
        alt="main-pic"
        width={1920}
        height={1280}
      />
      <Head>
        <title>Nathan Krasney | React Courses & Mentoring</title>
        <meta
          name="description"
          content="Learn react in a unique and effective way .Junior web developer - join our special mentoring program. Contact me for more info"
        />
      </Head>
      <EventsSlide />
      <div className={styles.Home_primary}>
        <h1 className={styles.Home_text}>
          React <br /> Courses & <br /> Mentoring
        </h1>
        <div className={styles.Home_red_bar}></div>
      </div>
    </div>
  );
};

export default Home;
