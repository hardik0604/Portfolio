import { motion } from 'framer-motion';
import { FiBookOpen, FiBriefcase } from 'react-icons/fi';
import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.aboutSection} aria-labelledby="about-title">
      <div className="container">
        <motion.h2 
          id="about-title"
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          About Me
        </motion.h2>

        <div className={styles.aboutContent}>
          <motion.div 
            className={styles.aboutText}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          >
            <p>
              I am a <span className={styles.highlightText}>strong designer and integrator</span> with intuitive problem-solving skills. I have always been deeply passionate about implementing and launching new projects from the ground up.
            </p>
            <p>
              My expertise lies in my ability to seamlessly translate complex business needs into efficient and scalable technical solutions. Whether it's architecting a new frontend system or refining the user experience, I thrive on delivering high-quality, pixel-perfect web applications.
            </p>
          </motion.div>

          <motion.div 
            className={styles.infoCards}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          >
            <div className={styles.infoCard}>
              <div className={styles.cardIcon}>
                <FiBriefcase />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Current Position</h3>
                <p className={styles.cardSubtitle}>Junior Front-End Developer</p>
                <p className={styles.cardDetail}>Pratyaksh Interactive Solutions</p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.cardIcon}>
                <FiBookOpen />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Education</h3>
                <p className={styles.cardSubtitle}>Bachelor of Technology</p>
                <p className={styles.cardDetail}>Computer Science Engineering</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
