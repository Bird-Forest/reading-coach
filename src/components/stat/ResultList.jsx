"use client";

import React from "react";
import styles from "./Result.module.css";
import { format } from "date-fns";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ResultList({ id }) {
  const { data } = useSWR(`/api/coaches?id=${id}`, fetcher, {
    refreshInterval: 3600,
  });
  // console.log(data);
  const coach = data;

  const results = coach ? coach.progress : [];

  return (
    <div className={styles.wrapListResult}>
      <p className={styles.titleList}>
        <span>СТАТИСТИКА</span>
      </p>
      <ul className={styles.wrapList}>
        {results.map((result) => (
          <li key={result._id} className={styles.wrapItem}>
            <p className={styles.deep}>
              {format(new Date(result.date), "dd.MM.yyyy")}
            </p>
            <p className={styles.grey}>
              {format(new Date(result.date), "HH.mm.ss")}
            </p>
            <p className={styles.deep}>
              {result.pagesRead}
              <span className={styles.grey}>стор.</span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
