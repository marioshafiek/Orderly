import React from "react";
import StartButton from "@components/common/StartButton/StartButton";
import styles from "./styles.module.css";

const Home = () => {
  return (
    <>
      <div className={styles.container}>
        <StartButton />
        <p className={styles.content}>OneOrder Task</p>
      </div>
    </>
  );
};

export default Home;
