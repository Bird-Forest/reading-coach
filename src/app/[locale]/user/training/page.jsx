import React from "react";
import styles from "@/components/train/Train.module.css";
import TrainPanel from "@/components/train/TrainPanel";
import { revalidatePath } from "next/cache";
import TrainMobile from "@/components/train/TrainMobile";
import MyChart from "@/components/chart/MyChart";
import { unstable_setRequestLocale } from "next-intl/server";

export default async function TrainPage({ params: { locale } }) {
  unstable_setRequestLocale(locale);
  revalidatePath(`/user/training`, "page");

  return (
    <>
      <div className={styles.wrapTrainMob}>
        <TrainMobile />
      </div>
      <div className={styles.wrapTrainDeck}>
        <TrainPanel />
        <MyChart />
      </div>
    </>
  );
}
