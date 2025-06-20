// components/Skills/Skills.tsx
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaNodeJs,
  FaAws,
} from "react-icons/fa";
import { SiTypescript, SiRedux, SiMysql, SiMongodb } from "react-icons/si";
import styles from "./Skills.module.css";

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { name: "React", icon: <FaReact />, level: 90 },
    { name: "JavaScript", icon: <FaJs />, level: 85 },
    { name: "TypeScript", icon: <SiTypescript />, level: 80 },
    { name: "HTML5", icon: <FaHtml5 />, level: 95 },
    { name: "CSS3", icon: <FaCss3Alt />, level: 90 },
    { name: "Redux", icon: <SiRedux />, level: 75 },
    // { name: "Next.js", icon: <SiNextdotjs />, level: 70 },
    { name: "Node.js", icon: <FaNodeJs />, level: 65 },
    { name: "Git", icon: <FaGitAlt />, level: 80 },
    { name: "MySQL", icon: <SiMysql />, level: 80 },
    { name: "MongoDB", icon: <SiMongodb />, level: 80 },
    { name: "AWS", icon: <FaAws />, level: 60 },
  ];

  return (
    <section id="skills" ref={ref} className={styles.skills}>
      <div className="container">
        <h2 className="section-title">My Skills</h2>

        <div className={styles.skillsContainer}>
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.1 * index }}
              className={styles.skillCard}
            >
              <div className={styles.icon}>{skill.icon}</div>
              <h3 className={styles.skillName}>{skill.name}</h3>
              <div className={styles.skillLevel}>
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : {}}
                  transition={{ delay: 0.1 * index + 0.2, duration: 0.8 }}
                  className={styles.levelBar}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
