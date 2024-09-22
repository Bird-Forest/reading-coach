import React from "react";
import styles from "@/components/train/Train.module.css";
import TrainPanel from "@/components/train/TrainPanel";
import { revalidatePath } from "next/cache";
import TrainMobaile from "@/components/train/TrainMobaile";

export default async function TrainPage({ params: { id } }) {
  revalidatePath(`/users/${id}/training`, "page");
  return (
    <>
      <div className={styles.wrapTrainMob}>
        <TrainMobaile />
      </div>
      <div className={styles.wrapTrainDeck}>
        <TrainPanel />
      </div>
    </>
  );
}
