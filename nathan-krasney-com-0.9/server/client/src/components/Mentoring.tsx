import "./Mentoring.css";
import { Helmet } from "react-helmet";

const codeReviewIcon = "/icons/code-review.png";
const internetIcon = "/icons/internet.png";
const manualIcon = "/icons/manual.png";
const partnershipHandshakeIcon = "/icons/partnership-handshake.png";
const professionalIcon = "/icons/professional.png";
const qaIcon = "/icons/qa.png";

const Mentoring = () => {
  return (
    <div className="Mentoring">
      <Helmet>
        <title>Nathan Krasney | React Courses & Mentoring</title>
        <meta
          name="description"
          content="Junior web developer, join my mentoring program in the way to your first job as junior web developer. Contact me for more info"
        />
      </Helmet>
      <div className="Mentoring-container">
        <h1 className="Mentoring-title">So...</h1>
        <p className="Mentoring-description">
          You are out of college \ bootcamp and you are looking for a job as
          junior web developer. You are good but you are struggling to get a job
          .You need professional help from someone that have experience and have
          been there. I have been there and i am here as a mentor to help you :
        </p>

        <div className="Mentoring-icons-container">
          <div className="icon-container">
            <img
              className="icon-container-img"
              src={codeReviewIcon}
              alt="Icon"
            />
            <p className="icon-container-para">Code Reviews</p>
          </div>
          <div className="icon-container">
            <img className="icon-container-img" src={qaIcon} alt="Icon" />
            <p className="icon-container-para">Q&A Sessions</p>
          </div>
          <div className="icon-container">
            <img className="icon-container-img" src={manualIcon} alt="Icon" />
            <p className="icon-container-para">
              Develpment projects guiding (final , self)
            </p>
          </div>
          <div className="icon-container">
            <img
              className="icon-container-img"
              src={professionalIcon}
              alt="Icon"
            />
            <p className="icon-container-para">
              What and how to learn and get professional
            </p>
          </div>
          <div className="icon-container">
            <img
              className="icon-container-img"
              src={partnershipHandshakeIcon}
              alt="Icon"
            />
            <p className="icon-container-para">Tips for getting a job</p>
          </div>
          <div className="icon-container">
            <img className="icon-container-img" src={internetIcon} alt="Icon" />
            <p className="icon-container-para">Deploy your app to the cloud </p>
          </div>
        </div>
        <div style={{textAlign:'center'}}>
          <a href="https://mentorcruise.com/mentor/nathankrasney/">
            <img
              src="https://cdn.mentorcruise.com/img/banner/navy-mentoring-badge.svg"
              width="240"
              alt="MentorCruise"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Mentoring;
