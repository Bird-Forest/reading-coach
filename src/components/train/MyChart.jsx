import React from "react";
import styles from "./Train.module.css";

export default function MyChart() {
  return (
    <div className={styles.wrapChart}>
      <div className={styles.wrapTitleChart}>
        <p className={styles.textChart}>Кількість сторінок / день </p>
        <p className={styles.countChart}>0</p>
      </div>
    </div>
  );
}
