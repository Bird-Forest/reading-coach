import Counter from "@/components/counter/Counter";
import GoalStatistics from "@/components/goal/GoalStatistics";
import React from "react";
import styles from "@/components/stat/Statistic.module.css";
import MyChart from "@/components/chart/MyChart";
import ResultPanel from "@/components/stat/ResultPanel";
import StatListBooks from "@/components/stat/StatListBooks";
import { getLastCoach } from "@/services/coaches";
import { revalidatePath } from "next/cache";
import { auth } from "@/configs/auth";

export default async function StatisticPage() {
  const session = await auth();
  if (!session) return null;
  // console.log("STAT", session);
  const id = session ? session.user.id : "";
  // console.log("ID COACH", id);
  const coach = await getLastCoach(id);
  // console.log(coach);

  revalidatePath(`/user`, "page");

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
