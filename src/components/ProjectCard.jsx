import { motion, useReducedMotion } from 'framer-motion';
import { FiArrowRight, FiBriefcase, FiBox, FiBook, FiGlobe } from 'react-icons/fi';
import styles from './ProjectCard.module.css';

const getMetadataIcon = (metadata) => {
  if (metadata === 'Client Project') return <FiBriefcase />;
  if (metadata === 'Enterprise Application') return <FiBox />;
  if (metadata === 'Academic Project') return <FiBook />;
  if (metadata === 'Production Website') return <FiGlobe />;
  return <FiBox />;
};

const ProjectCard = ({ project, index }) => {
  const shouldReduceMotion = useReducedMotion();

  const cardVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        delay: index * 0.1, 
        ease: 'easeOut',
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    },
    hover: { 
      y: shouldReduceMotion ? 0 : -6,
      borderColor: 'var(--primary)',
      boxShadow: 'var(--shadow-hover)',
      transition: { duration: 0.2, ease: 'easeOut' }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  };

  const imageVariants = {
    hover: { scale: shouldReduceMotion ? 1 : 1.05, transition: { duration: 0.4, ease: 'easeOut' } }
  };

  const titleVariants = {
    hover: { color: 'var(--primary)' }
  };

  const buttonVariants = {
    hover: { 
      x: shouldReduceMotion ? 0 : 5, 
      scale: 1.02, 
      backgroundColor: 'var(--primary)', 
      color: '#ffffff', 
      boxShadow: '0 4px 14px 0 rgba(37, 99, 235, 0.39)',
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.98 }
  };

  return (
    <motion.div
      className={styles.card}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className={styles.imageWrapper}>
        <motion.img 
          src={project.image} 
          alt={`${project.title} thumbnail`} 
          className={styles.thumbnail}
          loading="lazy"
          variants={imageVariants}
        />
      </div>

      <div className={styles.content}>
        <motion.div variants={childVariants} className={styles.header}>
          <span className={styles.category}>{project.category}</span>
          <motion.h3 variants={titleVariants} className={styles.title}>{project.title}</motion.h3>
        </motion.div>

        <motion.p variants={childVariants} className={styles.description}>{project.description}</motion.p>

        <motion.div variants={childVariants} className={styles.techList}>
          {project.tech.map((tech, i) => (
            <span key={i} className={styles.techBadge}>{tech}</span>
          ))}
        </motion.div>

        <motion.div variants={childVariants} className={styles.footer}>
          {project.metadata && (
            <div className={styles.metadata}>
              {getMetadataIcon(project.metadata)}
              <span>{project.metadata}</span>
            </div>
          )}
          <div className={styles.actions}>
            {project.liveDemo && project.liveDemo !== '#' && (
              <motion.a 
                href={project.liveDemo} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`${styles.actionBtn} ${styles.primaryBtn}`}
                variants={buttonVariants}
                whileTap="tap"
              >
                {project.ctaText || 'View Project'} <FiArrowRight />
              </motion.a>
            )}
            {project.liveDemo === '#' && (
               <motion.a 
                 href="#" 
                 onClick={(e) => e.preventDefault()} 
                 className={`${styles.actionBtn} ${styles.primaryBtn}`}
                 variants={buttonVariants}
                 whileTap="tap"
               >
                 {project.ctaText || 'View Project'} <FiArrowRight />
               </motion.a>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
