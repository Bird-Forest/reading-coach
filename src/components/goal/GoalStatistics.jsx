"use client";

import { open_sans } from "@/app/fonts";
import React, { useEffect, useState } from "react";
import styles from "./Goal.module.css";
import { bookCategory } from "@/constants/bookCategory";
import useSWR from "swr";
import { useSession } from "next-auth/react";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function GoalStatistics({ train }) {
  const [coach, setCoach] = useState(train);

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

  const [goalBooks, setGoalBooks] = useState(0);
  const [allDays, setAllDays] = useState(0);
  const [rest, setRest] = useState(0);

  useEffect(() => {
    if (!coach) return;
    setCoach(data);
    const selectedBooks = coach.books;
    if (!selectedBooks) return;
    const result = selectedBooks.length;
    setGoalBooks(result);
    setAllDays(coach.totalDay);
    const readedBooks = selectedBooks.filter(
      (book) => book.category === bookCategory.end
    );
    const left = goalBooks - readedBooks.length;
    setRest(left);
  }, [coach, goalBooks, data]);

  return (
    <div className={styles.wrapGoalStat}>
      <h2 className={styles.titleGoal}>Моя мета прочитати</h2>
      <div className={styles.boxCountStat}>
        <div className={styles.countGoalStat}>
          <p className={`${open_sans.className} ${styles.countStat}`}>
            {goalBooks}
          </p>
          <p className={styles.textStat}>Кількість книжок</p>
        </div>
        <div className={styles.countGoalStat}>
          <p className={`${open_sans.className} ${styles.countStat}`}>
            {allDays}
          </p>
          <p className={styles.textStat}>Кількість днів</p>
        </div>
        <div className={styles.countGoalStat}>
          <p className={`${open_sans.className} ${styles.countOrang}`}>
            {rest}
          </p>
          <p className={styles.textStat}>Залишилось книжок</p>
        </div>
      </div>
    </div>
  );
}
