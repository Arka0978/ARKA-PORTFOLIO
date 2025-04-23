import styles from "./Hero.module.css";
import arka_photo from "../assets/arka_photo.jpeg"
import twittericon from "../assets/twitter-light.svg";
import githubicon from "../assets/github-light.svg";
import Linkedinicon from "../assets/linkedin-light.svg";
import CV from "../assets/ARKA CV.pdf";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.colorModuleContainer}>
        <img className={styles.photo} src={arka_photo} alt="" />
      </div>
      <div className={styles.info}>
        <h1>ARKA KARMAKAR</h1>
        <h2>Aspiring Frontend Developer</h2>
        <span>
          <a href="https://www.facebook.com/arka.karmakar.125?mibextid=kFxxJD" target="_blank">
            <img src={twittericon} alt="" />
          </a>
          <a href="https://github.com/Arka0978" target="_blank">
            <img src={githubicon} alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/arka-karmakar-76b783299"
            target="_blank"
          >
            <img src={Linkedinicon} alt="" />
          </a>
          <p>
            A goal-oriented software engineer, seeking a software engineering
            role in your company and want to implement my skills and knowledge
            to provide innovative solutions and growth for my company.
          </p>
          <a href={CV} download>
            <button className={styles.hoover}>Resume</button>
          </a>
        </span>
      </div>
    </section>
  );
};

export default Hero;