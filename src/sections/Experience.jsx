import { motion } from 'framer-motion';
import { experiences } from '../data/portfolio';
import styles from './Experience.module.css';

const Experience = () => {
  return (
    <section id="experience" className={styles.experienceSection} aria-labelledby="experience-title">
      <div className="container">
        <motion.h2 
          id="experience-title"
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          Experience
        </motion.h2>

        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id}
              className={styles.timelineItem}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: 'easeOut' }}
            >
              <div className={styles.timelineContent}>
                <h3 className={styles.role}>{exp.role}</h3>
                <div className={styles.companyInfo}>
                  <span className={styles.company}>{exp.company}</span>
                  <span className={styles.period}>{exp.period}</span>
                </div>
                <ul className={styles.responsibilities}>
                  {exp.responsibilities.map((task, i) => (
                    <li key={i} className={styles.responsibilityItem}>
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
