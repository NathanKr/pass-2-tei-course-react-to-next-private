import Image from 'next/image';
import styles from 'styles/Footer.module.css';

const udemy = "/icons/udemy-icon.png";
const github = "/icons/github.png";
const youtube = "/icons/youtube.png";
const linkedin = "/icons/linkedin-logo.png";
const meetup = "/icons/meetup.png";

const iconWidthPx = 32;
const iconHeightPx = 32;

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.Footer_rights}>
        © 2020-2022 NATHAN KRASNEY. ALL RIGHTS RESERVED.
      </div>
      <div className={styles.Footer_icons}>
        <a href="https://github.com/NathanKr">
          <Image width={iconWidthPx} height={iconHeightPx} src={github} alt="site-icon" className={styles.fa_icon} />
        </a>
        <a href="https://www.linkedin.com/in/nathankrasney">
          <Image width={iconWidthPx} height={iconHeightPx} src={linkedin} alt="linkedin-icon" className={styles.fa_icon} />
        </a>
        <a href="https://www.youtube.com/channel/UChOjjkqtxDPixwU7IFC1YHw">
          <Image width={iconWidthPx} height={iconHeightPx} src={youtube} alt="youtube-icon" className={styles.fa_icon} />
        </a>
        <a href="https://www.udemy.com/user/nathan-krasney/">
          <Image width={iconWidthPx} height={iconHeightPx} src={udemy} alt="udemy-icon" className={styles.fa_icon} />
        </a>
        <a href="https://www.meetup.com/learn-react-israel/">
          <Image width={iconWidthPx} height={iconHeightPx} src={meetup} alt="meetup-icon" className={styles.fa_icon} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
