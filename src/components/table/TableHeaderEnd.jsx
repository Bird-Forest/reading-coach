"use client";

import React from "react";
import styles from "./Table.module.css";
export default function TableHeaderEnd() {
  return (
    <div className={styles.wrapTabEnd}>
      <p className={styles.textTabEnd}>Назва книги</p>
      <p className={styles.textTabEnd}>Автор</p>
      <p className={styles.textTabEnd}>Рік</p>
      <p className={styles.textTabEnd}>Стор.</p>
      <p className={styles.textTabEnd}>Рейтинг книги</p>
    </div>
  );
}
