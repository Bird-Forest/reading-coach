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
    <>
      <div className={styles.wrapMobile}>
        <Counter />
        <GoalStatistics />
        <StatListBooks arrInit={data} />
        <MyChart />
        <ResultPanel />
      </div>
      <div className={styles.wrapDesck}>
        <Counter />
        <GoalStatistics />
        <StatListBooks arrInit={data} />
        <MyChart />
        <ResultPanel />
      </div>
    </>
  );
}
