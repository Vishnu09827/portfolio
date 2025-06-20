// components/About/About.tsx
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./About.module.css";
import Profile from "../../assets/profile.jpg";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Redux",
    "Node.js",
    "HTML/CSS",
    "Git",
    "Responsive Design",
    "UI/UX",
    "MySQL",
    "MongoDB",
    "AWS",
    "Material UI",
    "Styled-Components",
  ];

  return (
    <section id="about" ref={ref} className={styles.about}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className={styles.container}
        >
          <div className={styles.image}>
            <img src={Profile} alt="About Me" />
          </div>

          <div className={styles.content}>
            <h2 className={styles.title}>About Me</h2>
            <p className={styles.text}>
              I'm a passionate fullstack developer with 2.8 years of experience
              creating modern web applications. I specialize in React, Node,
              MySQL, MongoDB, AWS, Redux, TypeScript, and I love building
              intuitive user interfaces that deliver exceptional experiences.
            </p>
            <p className={styles.text}>
              My journey in web development started when I built my first
              website in college. Since then, I've worked with a startup and
              contributed to open-source projects, constantly expanding my skill
              set.
            </p>
            <div className={styles.skillsList}>
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.1 * index }}
                  className={styles.skill}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
