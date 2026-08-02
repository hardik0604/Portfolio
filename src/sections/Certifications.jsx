import { motion } from 'framer-motion';
import { FiAward } from 'react-icons/fi';
import { certifications } from '../data/portfolio';
import styles from './Certifications.module.css';

const Certifications = () => {
  return (
    <section id="certifications" className={styles.certificationsSection} aria-labelledby="certifications-title">
      <div className="container">
        <motion.h2 
          id="certifications-title"
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          Certifications
        </motion.h2>

        <div className={styles.cardsContainer}>
          {certifications.map((cert, index) => (
            <motion.div 
              key={cert.id}
              className={styles.certCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
            >
              <div className={styles.iconWrapper}>
                <FiAward />
              </div>
              <div className={styles.certInfo}>
                <h3 className={styles.certTitle}>{cert.title}</h3>
                <p className={styles.certIssuer}>{cert.issuer}</p>
                <span className={styles.certYear}>{cert.year}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
