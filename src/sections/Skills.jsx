import { motion } from 'framer-motion';
import { FiLayout, FiCode, FiDatabase, FiTool } from 'react-icons/fi';
import { skills } from '../data/portfolio';
import styles from './Skills.module.css';

const getCategoryIcon = (category) => {
  switch (category) {
    case 'Frontend': return <FiLayout />;
    case 'Programming': return <FiCode />;
    case 'Database': return <FiDatabase />;
    case 'Tools': return <FiTool />;
    default: return <FiCode />;
  }
};

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="skills" className={styles.skillsSection} aria-labelledby="skills-title">
      <div className="container">
        <motion.h2 
          id="skills-title"
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          Technical Skills
        </motion.h2>

        <motion.div 
          className={styles.skillsContainer}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skills.map((skillGroup, index) => (
            <motion.div 
              key={index} 
              className={styles.skillCategory}
              variants={itemVariants}
            >
              <h3 className={styles.categoryTitle}>
                {getCategoryIcon(skillGroup.category)}
                {skillGroup.category}
              </h3>
              
              <ul className={styles.skillsList}>
                {skillGroup.items.map((skill, skillIndex) => (
                  <li key={skillIndex} className={styles.skillChip}>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
