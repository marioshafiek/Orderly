import React from "react";
import styles from "./styles.module.css";

const SkeletonProduct = () => {
  return (
    <div className={styles.skeletonCard}>
      <div className={styles.imageSkeleton}></div>
      <div className={styles.textSkeleton}></div>
      <div className={styles.textSkeleton}></div>
      <div className={styles.textSkeleton}></div>
    </div>
  );
};

export default SkeletonProduct;
