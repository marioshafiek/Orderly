import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const StartButton: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/shop");
  };

  return (
    <div className={styles.container}>
      <button className={styles.startButton} onClick={handleClick}>
        Start
      </button>
    </div>
  );
};

export default StartButton;
