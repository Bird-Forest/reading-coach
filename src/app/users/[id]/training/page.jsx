import React from "react";
import styles from "@/components/train/Train.module.css";
import TrainPanel from "@/components/train/TrainPanel";
import { revalidatePath } from "next/cache";
import TrainMobile from "@/components/train/TrainMobile";
import MyChart from "@/components/chart/MyChart";

export default async function TrainPage({ params: { id } }) {
  revalidatePath(`/users/${id}/training`, "page");
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
