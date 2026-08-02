import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';
import { personalInfo } from '../data/portfolio';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validate()) {
      setIsSubmitting(true);
      setSubmitSuccess(false);
      setSubmitError('');
      
      try {
        const payload = new FormData(e.target);
        payload.append("access_key", "72defe8d-871a-4b68-a162-a521e64fedf2");

        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: payload
        });

        const data = await response.json();
        
        if (data.success) {
          setSubmitSuccess(true);
          setFormData({ name: '', email: '', message: '' });
          
          // Hide success message after 5 seconds
          setTimeout(() => {
            setSubmitSuccess(false);
          }, 5000);
        } else {
          setSubmitError(data.message || 'Submission failed. Please try again.');
        }
      } catch (err) {
        setSubmitError('An error occurred while sending your message. Please try again later.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section id="contact" className={styles.contactSection} aria-labelledby="contact-title">
      <div className="container">
        <motion.h2 
          id="contact-title"
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          Get In Touch
        </motion.h2>

        <div className={styles.contactContainer}>
          <motion.div 
            className={styles.contactInfo}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          >
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>
                <FiMail />
              </div>
              <div className={styles.infoContent}>
                <span className={styles.infoLabel}>Email</span>
                <a href={`mailto:${personalInfo.email}`} className={styles.infoValue}>
                  {personalInfo.email}
                </a>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>
                <FiPhone />
              </div>
              <div className={styles.infoContent}>
                <span className={styles.infoLabel}>Phone</span>
                <a href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`} className={styles.infoValue}>
                  {personalInfo.phone}
                </a>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>
                <FiGithub />
              </div>
              <div className={styles.infoContent}>
                <span className={styles.infoLabel}>GitHub</span>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className={styles.infoValue}>
                  Hardik's GitHub
                </a>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>
                <FiLinkedin />
              </div>
              <div className={styles.infoContent}>
                <span className={styles.infoLabel}>LinkedIn</span>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className={styles.infoValue}>
                  Hardik's LinkedIn
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          >
            <form onSubmit={handleSubmit} className={styles.contactForm} noValidate>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.formLabel}>Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`${styles.formInput} ${errors.name ? styles.error : ''}`}
                  placeholder="Enter Your Name"
                />
                {errors.name && <span className={styles.errorText}>{errors.name}</span>}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.formLabel}>Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`${styles.formInput} ${errors.email ? styles.error : ''}`}
                  placeholder="Enter Your Email"
                />
                {errors.email && <span className={styles.errorText}>{errors.email}</span>}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.formLabel}>Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`${styles.formTextarea} ${errors.message ? styles.error : ''}`}
                  placeholder="Hello, I'd like to talk about..."
                />
                {errors.message && <span className={styles.errorText}>{errors.message}</span>}
              </div>

              {submitSuccess && (
                <div className={styles.successMessage}>
                  Thank you! Your message has been sent successfully.
                </div>
              )}
              {submitError && (
                <div className={styles.errorMessage}>
                  {submitError}
                </div>
              )}

              <button 
                type="submit" 
                className={styles.submitBtn}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    Send Message <FiSend />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
