import { motion, useReducedMotion } from 'framer-motion';
import { FiArrowRight, FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import styles from './Hero.module.css';
import { personalInfo } from '../data/portfolio';

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: shouldReduceMotion ? 0 : 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const codeIllustration = (
    <div className={styles.codeEditor}>
      <div className={styles.editorHeader}>
        <div className={styles.macButtons}>
          <span className={`${styles.macBtn} ${styles.close}`}></span>
          <span className={`${styles.macBtn} ${styles.minimize}`}></span>
          <span className={`${styles.macBtn} ${styles.maximize}`}></span>
        </div>
      </div>
      <div className={styles.editorBody}>
        <span className={styles.codeLine}><span className={styles.keyword}>const</span> <span className={styles.function}>developer</span> = {'{'}</span>
        <span className={styles.codeLine}>&nbsp;&nbsp;name: <span className={styles.string}>'Hardik Prakash'</span>,</span>
        <span className={styles.codeLine}>&nbsp;&nbsp;role: <span className={styles.string}>'Front-End Developer'</span>,</span>
        <span className={styles.codeLine}>&nbsp;&nbsp;skills: [<span className={styles.string}>'React'</span>, <span className={styles.string}>'JavaScript'</span>, <span className={styles.string}>'CSS'</span>],</span>
        <span className={styles.codeLine}>&nbsp;&nbsp;passionate: <span className={styles.keyword}>true</span>,</span>
        <span className={styles.codeLine}>&nbsp;&nbsp;<span className={styles.function}>buildApp</span>: <span className={styles.keyword}>function</span>() {'{'}</span>
        <span className={styles.codeLine}>&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.keyword}>return</span> <span className={styles.tag}>&lt;AmazingUI /&gt;</span>;</span>
        <span className={styles.codeLine}>&nbsp;&nbsp;{'}'}</span>
        <span className={styles.codeLine}>{'}'};</span>
        <br/>
        <span className={styles.codeLine}><span className={styles.comment}>// Let's build something incredible together!</span></span>
      </div>
    </div>
  );

  return (
    <section id="hero" className={styles.hero}>
      <div className="container">
        <motion.div 
          className={styles.heroContent}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className={styles.textContent}>
            <motion.span variants={itemVariants} className={styles.greeting}>
              Hi there! I am
            </motion.span>
            
            <motion.h1 variants={itemVariants} className={styles.title}>
              Hardik Prakash
            </motion.h1>
            
            <motion.h2 variants={itemVariants} className={styles.subtitle}>
              Front-End Developer
            </motion.h2>
            
            <motion.p variants={itemVariants} className={styles.description}>
              Build modern, responsive and scalable web applications with React and JavaScript.
            </motion.p>
            
            <div className={styles.actionGroup}>
              <motion.div variants={itemVariants} className={styles.ctaGroup}>
                <motion.a 
                  href="/resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.primaryBtn}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FiDownload /> Download Resume
                </motion.a>
                <motion.a 
                  href="#projects" 
                  className={styles.secondaryBtn}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Projects <FiArrowRight />
                </motion.a>
              </motion.div>
              
              <motion.div variants={itemVariants} className={styles.socialLinks}>
                <motion.a 
                  href={personalInfo.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.socialLink} 
                  aria-label="GitHub"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FiGithub />
                </motion.a>
                <motion.a 
                  href={personalInfo.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.socialLink} 
                  aria-label="LinkedIn"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FiLinkedin />
                </motion.a>
                <motion.a 
                  href={`mailto:${personalInfo.email}`} 
                  className={styles.socialLink} 
                  aria-label="Email"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FiMail />
                </motion.a>
              </motion.div>
            </div>
          </div>

          <motion.div variants={itemVariants} className={styles.illustrationContainer}>
            {codeIllustration}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
