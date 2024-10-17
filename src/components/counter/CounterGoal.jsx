"use client";

import { open_sans } from "@/app/fonts";
import React, { useCallback, useEffect, useState } from "react";
import { differenceInMilliseconds } from "date-fns";
import styles from "./Counter.module.css";
import { useSession } from "next-auth/react";
import { bookCategory } from "@/constants/bookCategory";
import useSWR from "swr";
import { useTranslations } from "next-intl";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function CounterGoal({ id }) {
  const t = useTranslations("counter");

  const shouldFetch = !!id;
  const { data: coach } = useSWR(
    shouldFetch ? `/api/coaches?id=${id}` : null,
    fetcher,
    {
      refreshInterval: 3600,
    }
  );
  const [lastDay, setLastDay] = useState(new Date());
  const [length, setLength] = useState(0);
  const [endDay, setEndDay] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    if (!coach) return;
    setLastDay(coach.finish);
    const arr = coach.books
      ? coach.books.filter((book) => book.category === bookCategory.init)
      : [];
    setLength(arr.length);
  }, [coach]);

  const getTimer = useCallback(() => {
    // if (!coach || !coach.books)
    //   return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    const result = differenceInMilliseconds(new Date(lastDay), new Date());
    if (result > 0 && length > 0) {
      return {
        days: Math.floor(result / (1000 * 60 * 60 * 24)),
        hours: Math.floor((result / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((result / 1000 / 60) % 60),
        seconds: Math.floor((result / 1000) % 60),
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }, [lastDay, length]);

  useEffect(() => {
    if (!coach) return;
    setEndDay(getTimer());
    const timer = setInterval(() => {
      setEndDay(getTimer());
    }, 1000);
    return () => clearInterval(timer);
  }, [getTimer, coach]);

  return (
    <div className={styles.wrapCountBox}>
      <p className={styles.wrapText}>{t("goals_title")}</p>
      <div className={styles.counter}>
        <div className={styles.countElem}>
          <p
            suppressHydrationWarning={true}
            className={`${open_sans.className} ${styles.countNumber}`}
          >
            {endDay.days}
          </p>
          <p className={styles.countText}>{t("days")}</p>
        </div>
        <span className={styles.countDot}>:</span>
        <div className={styles.countElem}>
          <p
            suppressHydrationWarning={true}
            className={`${open_sans.className} ${styles.countNumber}`}
          >
            {endDay.hours}
          </p>
          <p className={styles.countText}>{t("hours")}</p>
        </div>
        <span className={styles.countDot}>:</span>
        <div className={styles.countElem}>
          <p
            suppressHydrationWarning={true}
            className={`${open_sans.className} ${styles.countNumber}`}
          >
            {endDay.minutes}
          </p>
          <p className={styles.countText}>{t("minutes")}</p>
        </div>
        <span className={styles.countDot}>:</span>
        <div className={styles.countElem}>
          <p
            suppressHydrationWarning={true}
            className={`${open_sans.className} ${styles.countNumber}`}
          >
            {endDay.seconds}
          </p>
          <p className={styles.countText}>{t("secondes")}</p>
        </div>
      </div>
    </div>
  );
}
