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
import { unstable_setRequestLocale } from "next-intl/server";

export default async function StatisticPage({ params: { locale } }) {
  unstable_setRequestLocale(locale);
  const session = await auth();
  // if (session === null) return null;
  const id = session ? session.user.id : "";
  const coach = await getLastCoach(id);

  revalidatePath(`/user`, "page");
  // console.log("USER", locale);

  return (
    <div className={styles.caseStatist}>
      <div className={styles.counter}>
        <Counter coach={coach} id={id} />
      </div>
      <div className={styles.goal}>
        <GoalStatistics train={coach} />
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
