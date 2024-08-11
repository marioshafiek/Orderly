//React
import { useState } from "react";
//Icons
import AddLogo from "@assets/svg/Add.svg?react";
// Styles
import styles from "./styles.module.css";

//Interface
interface Add {
  onClick: () => void;
}
const Add = ({ onClick }: Add) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 300); // Reset after animation duration
    onClick();
  };
  return (
    <button
      className={`${styles.addToCartButton} ${isClicked ? styles.clicked : ""}`}
      onClick={handleClick}
    >
      <AddLogo />
    </button>
  );
};

export default Add;
