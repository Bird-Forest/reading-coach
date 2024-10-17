"use client";

import React, { useCallback, useEffect, useState } from "react";
import styles from "./Counter.module.css";
import { endOfYear, differenceInMilliseconds } from "date-fns";
import { open_sans } from "@/app/fonts";
import { useTranslations } from "next-intl";

export default function CounterYear() {
  const t = useTranslations("counter");
  const [endYear, setEndYear] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const getTimer = useCallback(() => {
    const year = endOfYear(new Date());
    const result = differenceInMilliseconds(new Date(year), new Date());
    if (result > 0) {
      return {
        days: Math.floor(result / (1000 * 60 * 60 * 24)),
        hours: Math.floor((result / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((result / 1000 / 60) % 60),
        seconds: Math.floor((result / 1000) % 60),
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }, []);

  useEffect(() => {
    setEndYear(getTimer());
    const timer = setInterval(() => {
      setEndYear(getTimer());
    }, 1000);

    return () => clearInterval(timer);
  }, [getTimer]);

  return (
    <div className={styles.wrapCountBox}>
      <p className={styles.wrapText}>{t("year_title")}</p>
      <div className={styles.counter}>
        <div className={styles.countElem}>
          <p
            suppressHydrationWarning={true}
            className={`${open_sans.className} ${styles.countNumber}`}
          >
            {endYear.days}
          </p>
          <p className={styles.countText}>{t("days")}</p>
        </div>
        <span className={styles.countDot}>:</span>
        <div className={styles.countElem}>
          <p
            suppressHydrationWarning={true}
            className={`${open_sans.className} ${styles.countNumber}`}
          >
            {endYear.hours}
          </p>
          <p className={styles.countText}>{t("hours")}</p>
        </div>
        <span className={styles.countDot}>:</span>
        <div className={styles.countElem}>
          <p
            suppressHydrationWarning={true}
            className={`${open_sans.className} ${styles.countNumber}`}
          >
            {endYear.minutes}
          </p>
          <p className={styles.countText}>{t("minutes")}</p>
        </div>
        <span className={styles.countDot}>:</span>
        <div className={styles.countElem}>
          <p
            suppressHydrationWarning={true}
            className={`${open_sans.className} ${styles.countNumber}`}
          >
            {endYear.seconds}
          </p>
          <p className={styles.countText}>{t("secondes")}</p>
        </div>
      </div>
    </div>
  );
}
