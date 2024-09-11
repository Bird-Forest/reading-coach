import React from "react";
import styles from "./Train.module.css";
import { open_sans } from "@/app/fonts";

export default function MyGoalRead() {
  return (
    <div className={styles.wrapTarget}>
      <h2 className={styles.titleGoal}>Моя мета прочитати</h2>
      <div className={styles.countTarget}>
        <div className={styles.wrapCount}>
          <p className={`${open_sans.className} ${styles.counter}`}>0</p>
          <p className={styles.textCounter}>Кількість книжок</p>
        </div>
        <div className={styles.wrapCount}>
          <p className={`${open_sans.className} ${styles.counter}`}>0</p>
          <p className={styles.textCounter}>Кількість днів</p>
        </div>
      </div>
    </div>
  );
}
