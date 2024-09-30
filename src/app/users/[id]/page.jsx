import Counter from "@/components/counter/Counter";
import GoalStatistics from "@/components/goal/GoalStatistics";
import React from "react";
import styles from "@/components/stat/Statistic.module.css";
import MyChart from "@/components/chart/MyChart";
import ResultPanel from "@/components/stat/ResultPanel";
import StatListBooks from "@/components/stat/StatListBooks";
import { getLastCoach } from "@/services/coaches";
import { revalidatePath } from "next/cache";

export default async function StatisticPage({ params: { id } }) {
  const coach = await getLastCoach(id);
  if (!id) {
    notFound();
  }
  revalidatePath(`/users/${id}`, "page");

  return (
    <div className={styles.caseStatist}>
      <div className={styles.counter}>
        <Counter coach={coach} />
      </div>
      <div className={styles.goal}>
        <GoalStatistics coach={coach} />
      </div>
      <div className={styles.books}>
        <StatListBooks />
      </div>
      <div className={styles.chart}>
        <MyChart coach={coach} />
      </div>
      <div className={styles.result}>
        <ResultPanel coach={coach} />
      </div>
    </div>
  );
}
