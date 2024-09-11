import React from "react";
import styles from "@/components/train/Train.module.css";
// import MyTraining from "@/components/train/MyTraining";
// import MyGoalRead from "@/components/train/MyGoalRead";
// import MyListBooks from "@/components/train/MyListBooks";
import TrainPanel from "@/components/train/TrainPanel";
import NavigateTrain from "@/components/info/NavigateTrain";
import FormTrain from "@/components/train/FormTrain";

export default function TrainPage() {
  return (
    <>
      <div className={styles.wrapTrainMob}>
        <NavigateTrain />
        <FormTrain />
      </div>
      <div className={styles.wrapTrainDeck}>
        <TrainPanel />
      </div>
    </>
  );
}
