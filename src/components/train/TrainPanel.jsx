import React from "react";
import styles from "./Train.module.css";
import MyGoalRead from "./MyGoalRead";
import MyChart from "./MyChart";
import TrainListBooks from "./TrainListBooks";
import FormTrain from "./FormTrain";

export default function TrainPanel({ booksInit }) {
  return (
    <div className={styles.caseTrain}>
      <MyGoalRead />
      <div className={styles.wrapBlock}>
        <FormTrain />
        <TrainListBooks booksInit={booksInit} />
        <MyChart />
      </div>
    </div>
  );
}
