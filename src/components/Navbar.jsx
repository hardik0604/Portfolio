import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Navbar.module.css';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' }
];

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const toggleMenu = () => setIsMobileOpen(!isMobileOpen);
  const closeMenu = () => setIsMobileOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      // Handle transparent to solid transition
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Handle active section highlight
      const sections = navLinks.map(link => link.href.substring(1));
      let currentSection = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust offset based on navbar height
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
            break;
          }
        }
      }
      
      if (window.scrollY === 0) {
        currentSection = 'hero';
      }
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        <a href="#hero" className={styles.logo} onClick={closeMenu}>
          Hardik Prakash
        </a>
        
        <div className={styles.desktopNavLinks}>
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className={`${styles.navLink} ${activeSection === link.href.substring(1) ? styles.active : ''}`}
            >
              {link.name}
              {activeSection === link.href.substring(1) && (
                <motion.div
                  layoutId="activeSection"
                  className={styles.activeIndicator}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </div>

        <button className={styles.mobileMenuBtn} onClick={toggleMenu} aria-label="Toggle menu">
          {isMobileOpen ? <FiX /> : <FiMenu />}
        </button>

        <AnimatePresence>
          {isMobileOpen && (
            <motion.div 
              className={styles.mobileNavLinks}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href} 
                  className={`${styles.navLink} ${activeSection === link.href.substring(1) ? styles.active : ''}`}
                  onClick={closeMenu}
                >
                  {link.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
