// components/Footer/Footer.tsx
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <a href="#home" className={styles.logo}>
            My<span>Portfolio</span>
          </a>
          <p>Building digital experiences that matter</p>
        </div>

        <div className={styles.links}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>

        <div className={styles.socials}>
          <a
            href="https://github.com/Vishnu09827"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/vishnufsd"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>

          <a href="mailto:vishnumariappan259@gmail.com">
            <FaEnvelope />
          </a>
        </div>

        <div className={styles.copyright}>
          &copy; {currentYear} M Vishnu. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
