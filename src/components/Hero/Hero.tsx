import { motion } from "framer-motion";
import styles from "./Hero.module.css";
import { FaCode, FaDatabase, FaServer } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.content}
        >
          <h1 className={styles.title}>
            Hi, I'm <span>M Vishnu</span>
          </h1>
          <h2 className={styles.subtitle}>Full Stack Developer</h2>
          <p className={styles.description}>
            I build scalable web applications from database to UI.
          </p>
          <div className={styles.techStack}>
            <div className={styles.techItem}>
              <FaCode className={styles.techIcon} />
              <span>Frontend</span>
            </div>
            <div className={styles.techItem}>
              <FaServer className={styles.techIcon} />
              <span>Backend</span>
            </div>
            <div className={styles.techItem}>
              <FaDatabase className={styles.techIcon} />
              <span>Database</span>
            </div>
          </div>
          <div className={styles.buttons}>
            <a href="#contact" className={styles.primaryBtn}>
              Contact Me
            </a>
            <a href="#projects" className={styles.secondaryBtn}>
              View Projects
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
