import React from "react";
import styles from "@/components/train/Train.module.css";
import TrainPanel from "@/components/train/TrainPanel";
import NavigateTrain from "@/components/info/NavigateTrain";
import FormTrain from "@/components/train/FormTrain";
import { getBooksInit, getBooksStart } from "@/services/books";
import { revalidatePath } from "next/cache";

export default async function TrainPage({ params: { id } }) {
  const booksStart = getBooksStart(id);
  const booksInit = getBooksInit(id);
  const [arrStart, arrInit] = await Promise.all([booksStart, booksInit]);
  revalidatePath(`/users//${id}/training`, "page");
  return (
    <>
      <div className={styles.wrapTrainMob}>
        <NavigateTrain />
        <FormTrain />
      </div>
      <div className={styles.wrapTrainDeck}>
        <TrainPanel id={id} arrStart={arrStart} arrInit={arrInit} />
      </div>
    </>
  );
}
