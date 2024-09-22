// "use cclient";

import React from "react";
import ListBooksEnd from "./ListBooksEnd";
import ListBooksInit from "./ListBooksInit";
import ListBooksStart from "./ListBooksStart";
import styles from "@/components/liba/Library.module.css";
import StartSteps from "../modal/StartSteps";
import ButtonLink from "../button/ButtonLink";

export default function BookCategories({ userId, arrStart, arrInit, arrEnd }) {
  const booksEnd = Array.isArray(arrEnd) && arrEnd.length > 0;
  const booksInit = Array.isArray(arrInit) && arrInit.length > 0;
  const booksStart = Array.isArray(arrStart) && arrStart.length > 0;

  const isBtnTrain = arrStart.length > 0 && arrInit.length === 0;

  return (
    <div className={styles.wrapAllList}>
      {booksEnd ? <ListBooksEnd /> : []}
      {booksInit ? <ListBooksInit arrInit={arrInit} /> : []}
      {booksStart ? (
        <ListBooksStart userId={userId} arrStart={arrStart} />
      ) : (
        <StartSteps />
      )}
      {isBtnTrain && (
        <ButtonLink path={`/users/${userId}/training`}>
          Моє тренування
        </ButtonLink>
      )}
    </div>
  );
}
