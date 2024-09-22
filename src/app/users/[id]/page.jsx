import Counter from "@/components/counter/Counter";
import GoalStatistics from "@/components/goal/GoalStatistics";
import React from "react";
import styles from "@/components/stat/Statistic.module.css";
import { getBooksInit } from "@/services/books";
import MyChart from "@/components/chart/MyChart";
import ResultPanel from "@/components/stat/ResultPanel";
import StatListBooks from "@/components/stat/StatListBooks";

export default async function StatisticPage({ params: { id } }) {
  const data = await getBooksInit(id);
  // console.log(data);
  return (
    <div className={styles.caseStatist}>
      <div className={styles.counter}>
        <Counter />
      </div>
      <div className={styles.goal}>
        <GoalStatistics />
      </div>
      <div className={styles.books}>
        <StatListBooks arrInit={data} />
      </div>
      <div className={styles.chart}>
        <MyChart />
      </div>
      <div className={styles.result}>
        <ResultPanel />
      </div>
    </div>
  );
}
