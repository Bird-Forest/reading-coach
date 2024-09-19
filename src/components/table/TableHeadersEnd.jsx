import React from "react";
import styles from "./Table.module.css";
export default function TableHeadersEnd() {
  return (
    <div className={styles.wrapTable}>
      <p className={styles.textTabEnd}>Назва книги</p>
      <p className={styles.textTabEnd}>Автор</p>
      <p className={styles.textTabEnd}>Рік</p>
      <p className={styles.textTabEnd}>Стор.</p>
      <p className={styles.textTabEnd}>Рейтинг</p>
    </div>
  );
}
