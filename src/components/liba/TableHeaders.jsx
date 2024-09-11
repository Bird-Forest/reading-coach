import React from "react";
import styles from "./Library.module.css";

export default function TableHeaders() {
  return (
    <div className={styles.wrapTitleTable}>
      <p className={styles.textTab}>Назва книги</p>
      <p className={styles.textTab}>Автор</p>
      <p className={styles.textTab}>Рік</p>
      <p className={styles.textTab}>Стор.</p>
    </div>
  );
}
