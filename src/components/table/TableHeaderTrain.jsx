import React from "react";
import styles from "./Table.module.css";

export default function TableHeaderTrain() {
  return (
    <div className={styles.wrapTableTrain}>
      <p className={styles.tabTrain}>Назва книги</p>
      <p className={styles.tabTrain}>Автор</p>
      <p className={styles.tabTrain}>Рік</p>
      <p className={styles.tabTrain}>Стор.</p>
    </div>
  );
}
