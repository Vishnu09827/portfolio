import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import styles from "./Projects.module.css";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";

const projects = [
  {
    id: 1,
    title: "Budget Tracker",
    description:
      "A full-featured Budget Tracker application with real-time expense monitoring, customizable budget categories, and interactive data visualization.  ",
    tags: ["React", "Node.js", "MongoDB", "D3.js", "Material UI"],
    image: project1,
    github: "https://github.com/Vishnu09827/budget-Tracker",
    live: "https://budget-tracker-theta-woad.vercel.app/",
  },
  {
    id: 2,
    title: "Learning Management System (LMS)",
    description:
      "A full-featured LMS platform combining comprehensive course management with an in-browser coding environment. The system features a Sandpack-powered code editor supporting 5+ programming languages, multi-format assessment tools (MCQs, descriptive answers, video submissions, and coding challenges with test case validation), and robust admin capabilities including content management, analytics dashboards, and Course and its content allocation.",
    tags: ["React", "Node.js", "MySQL", "AWS", "Material UI", "Sandpack"],
    image: project2,
    github: "https://github.com/Vishnu09827/",
    live: "https://leap.gradious.com/",
  },
  // Add more projects...
];

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.tags.includes(filter));

  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        <h2 className="section-title">My Projects</h2>

        <div className={styles.filters}>
          <button
            onClick={() => setFilter("all")}
            className={filter === "all" ? styles.active : ""}
          >
            All
          </button>
          <button
            onClick={() => setFilter("React")}
            className={filter === "React" ? styles.active : ""}
          >
            React
          </button>
          <button
            onClick={() => setFilter("MySQL")}
            className={filter === "MySQL" ? styles.active : ""}
          >
            MySQL
          </button>
          <button
            onClick={() => setFilter("MongoDB")}
            className={filter === "MongoDB" ? styles.active : ""}
          >
            MongoDB
          </button>
          {/* Add more filters... */}
        </div>

        <div ref={ref} className={styles.grid}>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={styles.card}
            >
              <div className={styles.image}>
                <img src={project.image} alt={project.title} />
                <div className={styles.overlay}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiGithub />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiExternalLink />
                  </a>
                </div>
              </div>
              <div className={styles.content}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className={styles.tags}>
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
