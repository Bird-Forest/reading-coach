"use client";

import { open_sans } from "@/app/fonts";
import React, { useCallback, useEffect, useState } from "react";
import { differenceInMilliseconds } from "date-fns";
import styles from "./Counter.module.css";

export default function CounterGoal({ coach }) {
  const [endDay, setEndDay] = useState({});
  const getTimer = useCallback(() => {
    if (!coach) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    const lastDay = coach.finish;
    const result = differenceInMilliseconds(new Date(lastDay), new Date());
    if (result > 0) {
      return {
        days: Math.floor(result / (1000 * 60 * 60 * 24)),
        hours: Math.floor((result / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((result / 1000 / 60) % 60),
        seconds: Math.floor((result / 1000) % 60),
      };
    }
  }, [coach]);
  // const getTimer = () => {
  //   const result = differenceInMilliseconds(
  //     new Date(2024, 8, 27, 0, 0, 0, 0),
  //     new Date()
  //   );
  //   let count = {};
  //   if (result > 0) {
  //     count = {
  //       days: Math.floor(result / (1000 * 60 * 60 * 24)),
  //       hours: Math.floor((result / (1000 * 60 * 60)) % 24),
  //       minutes: Math.floor((result / 1000 / 60) % 60),
  //       seconds: Math.floor((result / 1000) % 60),
  //     };
  //     return count;
  //   }
  //   return (count = {
  //     days: 0,
  //     hours: 0,
  //     minutes: 0,
  //     seconds: 0,
  //   });
  // };

  useEffect(() => {
    setEndDay(getTimer());
    const timer = setInterval(() => {
      setEndDay(getTimer());
    }, 1000);

    return () => clearInterval(timer);
  }, [getTimer]);

  // console.log(endDay);

  return (
    <div className={styles.wrapCountBox}>
      <p className={styles.wrapText}>До досягнення мети залишилось</p>
      <div className={styles.counter}>
        <div className={styles.countElem}>
          <p
            suppressHydrationWarning={true}
            className={`${open_sans.className} ${styles.countNumber}`}
          >
            {endDay.days}
          </p>
          <p className={styles.countText}>ДН</p>
        </div>
        <span className={styles.countDot}>:</span>
        <div className={styles.countElem}>
          <p
            suppressHydrationWarning={true}
            className={`${open_sans.className} ${styles.countNumber}`}
          >
            {endDay.hours}
          </p>
          <p className={styles.countText}>ГОД</p>
        </div>
        <span className={styles.countDot}>:</span>
        <div className={styles.countElem}>
          <p
            suppressHydrationWarning={true}
            className={`${open_sans.className} ${styles.countNumber}`}
          >
            {endDay.minutes}
          </p>
          <p className={styles.countText}>ХВ</p>
        </div>
        <span className={styles.countDot}>:</span>
        <div className={styles.countElem}>
          <p
            suppressHydrationWarning={true}
            className={`${open_sans.className} ${styles.countNumber}`}
          >
            {endDay.seconds}
          </p>
          <p className={styles.countText}>СЕК</p>
        </div>
      </div>
    </div>
  );
}
