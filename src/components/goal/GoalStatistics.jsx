import { open_sans } from "@/app/fonts";
import React from "react";
import styles from "./Goal.module.css";

export default function GoalStatistics() {
  return (
    <div className={styles.wrapGoalStat}>
      <h2 className={styles.titleGoal}>Моя мета прочитати</h2>
      <div className={styles.boxCountStat}>
        <div className={styles.countGoalStat}>
          <p className={`${open_sans.className} ${styles.countStat}`}>{0}</p>
          <p className={styles.textStat}>Кількість книжок</p>
        </div>
        <div className={styles.countGoalStat}>
          <p className={`${open_sans.className} ${styles.countStat}`}>{0}</p>
          <p className={styles.textStat}>Кількість днів</p>
        </div>
        <div className={styles.countGoalStat}>
          <p className={`${open_sans.className} ${styles.countOrang}`}>{0}</p>
          <p className={styles.textStat}>Залишилось книжок</p>
        </div>
      </div>
    </div>
  );
}
