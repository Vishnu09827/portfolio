// components/Experience/Experience.tsx
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaLaptopCode, FaUniversity } from "react-icons/fa";
import styles from "./Experience.module.css";

const experiences = [
  {
    title: "Electronics and Communication Engineering",
    company: "PET Engineering College",
    period: "July, 2018 - May,2022",
    description:
      "",
    icon: <FaUniversity />,
  },
  {
    title: "Full Stack Developer",
    company: "Gradious Technologies Pvt Ltd",
    period: "July, 2022 - Feb,2025",
    description:
      "Developed a scalable applications using React, Node.js, MySQL and AWS.",
    icon: <FaLaptopCode />,
  },
];

const Experience = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="experience" ref={ref} className={styles.experience}>
      <div className="container">
        <h2 className="section-title">Experience & Education</h2>

        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className={`${styles.timelineItem} ${
                index % 2 === 0 ? styles.left : styles.right
              }`}
            >
              <div className={styles.timelineContent}>
                <div className={styles.timelineIcon}>{exp.icon}</div>
                <h3>{exp.title}</h3>
                <h4>
                  {exp.company} • {exp.period}
                </h4>
                <p>{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
