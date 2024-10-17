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

export default function CounterGoal() {
  const t = useTranslations("counter");
  const [coach, setCoach] = useState();

  const { data: session } = useSession();
  const id = session?.user.id;
  const shouldFetch = !!id;
  const { data } = useSWR(
    shouldFetch ? `/api/coaches?id=${id}` : null,
    fetcher,
    {
      refreshInterval: 3600,
    }
  );

  const [endDay, setEndDay] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const getTimer = useCallback(() => {
    if (!coach) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    const lastDay = coach?.finish;
    const unreadedBooks = coach?.books.filter(
      (book) => book.category === bookCategory.init
    );
    const result = differenceInMilliseconds(new Date(lastDay), new Date());
    if (result > 0 && unreadedBooks.length > 0) {
      return {
        days: Math.floor(result / (1000 * 60 * 60 * 24)),
        hours: Math.floor((result / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((result / 1000 / 60) % 60),
        seconds: Math.floor((result / 1000) % 60),
      };
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  }, [coach]);

  useEffect(() => {
    if (!data) return;
    setCoach(data);
    setEndDay(getTimer());
    const timer = setInterval(() => {
      setEndDay(getTimer());
    }, 1000);

    return () => clearInterval(timer);
  }, [getTimer, data]);

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
