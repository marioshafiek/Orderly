//Styles
import styles from "./styles.module.css";
//Images
import errorImage from "@assets/Images/Error.png";

const Error = () => {
  return (
    <div className={styles.errorPage}>
      <div className={styles.content}>
        <h1 className={styles.title}>Oops!</h1>
        <img src={errorImage} alt="Error" className={styles.image} />
        <p className={styles.message}>
          HIRE ME &#128549; TO COMPLETE THIS PAGE
        </p>
        <p className={styles.message}>@OneOrder Task</p>
        <a href="/" className={styles.homeLink}>
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default Error;
