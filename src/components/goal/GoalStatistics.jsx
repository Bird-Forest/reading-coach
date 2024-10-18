"use client";

import { open_sans } from "@/app/fonts";
import React, { useEffect, useState } from "react";
import styles from "./Goal.module.css";
import { bookCategory } from "@/constants/bookCategory";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useTranslations } from "next-intl";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function GoalStatistics({ train, id }) {
  const t = useTranslations("goal");
  const [coach, setCoach] = useState(train);

  // const { data: session } = useSession();
  // const id = session?.user.id;
  const shouldFetch = !!id;
  const { data } = useSWR(
    shouldFetch ? `/api/coaches?id=${id}` : null,
    fetcher,
    {
      refreshInterval: 3600,
    }
  );

  const [goalBooks, setGoalBooks] = useState(0);
  const [allDays, setAllDays] = useState(0);
  const [rest, setRest] = useState(0);

  useEffect(() => {
    if (!data) return;
    setCoach(data);
    const selectedBooks = coach.books;
    if (!selectedBooks) return;

    setGoalBooks(selectedBooks.length);

    setAllDays(coach.totalDay);

    const readBooks = selectedBooks.filter(
      (book) => book.category === bookCategory.init
    );
    setRest(readBooks.length);
  }, [coach, goalBooks, data]);

  return (
    <div className={styles.wrapGoalStat}>
      <h2 className={styles.titleGoal}>{t("title")}</h2>
      <div className={styles.boxCountStat}>
        <div className={styles.countGoalStat}>
          <p className={`${open_sans.className} ${styles.countStat}`}>
            {goalBooks}
          </p>
          <p className={styles.textStat}>{t("amount_books")}</p>
        </div>
        <div className={styles.countGoalStat}>
          <p className={`${open_sans.className} ${styles.countStat}`}>
            {allDays}
          </p>
          <p className={styles.textStat}>{t("amount_days")}</p>
        </div>
        <div className={styles.countGoalStat}>
          <p className={`${open_sans.className} ${styles.countOrang}`}>
            {rest}
          </p>
          <p className={styles.textStat}>{t("books_left")}</p>
        </div>
      </div>
    </div>
  );
}
