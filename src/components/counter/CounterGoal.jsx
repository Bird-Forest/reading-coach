import { open_sans } from "@/app/fonts";
import React from "react";
import styles from "./Counter.module.css";

export default function CounterGoal() {
  return (
    <div className={styles.wrapCountBox}>
      <p className={styles.wrapText}>До досягнення мети залишилось</p>
      <div className={styles.counter}>
        <div className={styles.countElem}>
          <p className={`${open_sans.className} ${styles.countNumber}`}>0</p>
          <p className={styles.countText}>ДН</p>
        </div>
        <p className={styles.countDot}>:</p>
        <div className={styles.countElem}>
          <p className={`${open_sans.className} ${styles.countNumber}`}>0</p>
          <p className={styles.countText}>ГОД</p>
        </div>
        <p className={styles.countDot}>:</p>
        <div className={styles.countElem}>
          <p className={`${open_sans.className} ${styles.countNumber}`}>0</p>
          <p className={styles.countText}>ХВ</p>
        </div>
        <p className={styles.countDot}>:</p>
        <div className={styles.countElem}>
          <p className={`${open_sans.className} ${styles.countNumber}`}>0</p>
          <p className={styles.countText}>СЕК</p>
        </div>
      </div>
    </div>
  );
}
