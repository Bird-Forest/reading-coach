import React from "react";
import styles from "@/components/train/Train.module.css";
import TrainPanel from "@/components/train/TrainPanel";
import NavigateTrain from "@/components/info/NavigateTrain";
import FormTrain from "@/components/train/FormTrain";
import { getBooksInit } from "@/services/books";

export default async function TrainPage({ params: { id } }) {
  const booksInit = await getBooksInit(id);
  return (
    <>
      <div className={styles.wrapTrainMob}>
        <NavigateTrain />
        <FormTrain />
      </div>
      <div className={styles.wrapTrainDeck}>
        <TrainPanel booksInit={booksInit} />
      </div>
    </>
  );
}
