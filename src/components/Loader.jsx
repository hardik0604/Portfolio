import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.loaderContainer} role="status" aria-label="Loading content">
      <div className={styles.spinner}></div>
    </div>
  );
};

export default Loader;
