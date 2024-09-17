"use client";

import React, { useState } from "react";
import styles from "./Train.module.css";
import MyGoalRead from "./MyGoalRead";
import MyChart from "./MyChart";
import TrainListBooks from "./TrainListBooks";
import FormSelect from "./FormSelect";
import FormDate from "./FormDate";

export default function TrainPanel({ arrStart }) {
  const [begin, setBegin] = useState("");
  const [end, setEnd] = useState("");
  const [books, setBooks] = useState([]);

  const trainingStart = (value) => {
    setBegin(value);
  };
  console.log(begin);

  const trainingEnd = (value) => {
    setEnd(value);
  };
  console.log(end);

  const choosedBook = (option) => {
    setBooks((prevState) => [...prevState, option]);
  };

  console.log(books);
  return (
    <div className={styles.caseTrain}>
      <div className={styles.caseForm}>
        <MyGoalRead />
        <div className={styles.wrapFormTrain}>
          <h2 className={styles.titleTrain}>Моє тренування</h2>
          <FormDate trainingStart={trainingStart} trainingEnd={trainingEnd} />
          <FormSelect choosedBook={choosedBook} arrStart={arrStart} />
        </div>
      </div>
      <div className={styles.wrapBlock}>
        <TrainListBooks books={books} />
        <MyChart />
      </div>
    </div>
  );
}
