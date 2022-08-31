import "./Footer.css";

const udemy = "/icons/udemy-icon.png";
const github = "/icons/github.png";
const youtube = "/icons/youtube.png";
const linkedin = "/icons/linkedin-logo.png";
const meetup = "/icons/meetup.png";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer-rights">
        © 2020-2022 NATHAN KRASNEY. ALL RIGHTS RESERVED.
      </div>
      <div className="Footer-icons">
        <a href="https://github.com/NathanKr">
          <img src={github} alt="site-icon" className="fa-icon" />
        </a>
        <a href="https://www.linkedin.com/in/nathankrasney">
          <img src={linkedin} alt="linkedin-icon" className="fa-icon" />
        </a>
        <a href="https://www.youtube.com/channel/UChOjjkqtxDPixwU7IFC1YHw">
          <img src={youtube} alt="youtube-icon" className="fa-icon" />
        </a>
        <a href="https://www.udemy.com/user/nathan-krasney/">
          <img src={udemy} alt="udemy-icon" className="fa-icon" />
        </a>
        <a href="https://www.meetup.com/learn-react-israel/">
          <img src={meetup} alt="meetup-icon" className="fa-icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
