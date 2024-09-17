import React from "react";
import styles from "./Train.module.css";
import MyGoalRead from "./MyGoalRead";
import MyChart from "./MyChart";
import TrainListBooks from "./TrainListBooks";
import FormTrain from "./FormTrain";

export default function TrainPanel({ id, arrStart, arrInit }) {
  return (
    <div className={styles.caseTrain}>
      <div className={styles.caseForm}>
        <MyGoalRead />
        <FormTrain id={id} arrStart={arrStart} />
      </div>
      <div className={styles.wrapBlock}>
        <TrainListBooks id={id} arrInit={arrInit} />
        <MyChart />
      </div>
    </div>
  );
}
