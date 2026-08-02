import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import styles from './Projects.module.css';

const Projects = () => {
  return (
    <section id="projects" className={styles.projectsSection} aria-labelledby="projects-title">
      <div className="container">
        <motion.h2 
          id="projects-title"
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          Selected Projects
        </motion.h2>

        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
