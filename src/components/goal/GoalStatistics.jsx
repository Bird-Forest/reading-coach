import { open_sans } from "@/app/fonts";
import React from "react";
import styles from "./Goal.module.css";
import { bookCategory } from "@/constants/bookCategory";

export default function GoalStatistics({ coach }) {
  // console.log(coach);
  const goalBooks = coach ? coach.books.length : 0;
  const days = coach ? coach.totalDay : 0;

  const leftBooks =
    coach && coach.books.filter((book) => book.category === bookCategory.init);
  const rest = coach ? leftBooks.length : 0;
  return (
    <div className={styles.wrapGoalStat}>
      <h2 className={styles.titleGoal}>Моя мета прочитати</h2>
      <div className={styles.boxCountStat}>
        <div className={styles.countGoalStat}>
          <p className={`${open_sans.className} ${styles.countStat}`}>
            {goalBooks}
          </p>
          <p className={styles.textStat}>Кількість книжок</p>
        </div>
        <div className={styles.countGoalStat}>
          <p className={`${open_sans.className} ${styles.countStat}`}>{days}</p>
          <p className={styles.textStat}>Кількість днів</p>
        </div>
        <div className={styles.countGoalStat}>
          <p className={`${open_sans.className} ${styles.countOrang}`}>
            {rest}
          </p>
          <p className={styles.textStat}>Залишилось книжок</p>
        </div>
      </div>
    </div>
  );
}
