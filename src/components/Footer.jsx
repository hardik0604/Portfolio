import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';
import { personalInfo } from '../data/portfolio';
import styles from './Footer.module.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.copyright}>
            &copy; 2026 {personalInfo.name}. All rights reserved.
          </div>
          
          <div className={styles.socialLinks}>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="GitHub">
              <FiGithub />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
              <FiLinkedin />
            </a>
            <a href={`mailto:${personalInfo.email}`} className={styles.socialLink} aria-label="Email">
              <FiMail />
            </a>
          </div>

          <button onClick={scrollToTop} className={styles.backToTop} aria-label="Back to top">
            Back to Top <FiArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
