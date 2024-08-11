//Styles
import styles from "./styles.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.logoContainer}>
          <a href="#" className={styles.logo}>
            Orderly
          </a>
        </div>
        <div className={styles.footerContent}>
          <p>© 2024 Orderly. OneOrder Task.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
