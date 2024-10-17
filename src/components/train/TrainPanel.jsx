"use client";

import React, { useState } from "react";
import styles from "./Train.module.css";
import { differenceInCalendarDays } from "date-fns";
import MyGoalRead from "../goal/MyGoalRead";
import TrainListBooks from "./TrainListBooks";
import FormSelect from "./FormSelect";
import FormDate from "./FormDate";
import ButtonAction from "../button/ButtonAction";
import { createCoach } from "@/services/coaches";
import { useTranslations } from "next-intl";

export default function TrainPanel() {
  const t = useTranslations("training");
  const [begin, setBegin] = useState();
  const [end, setEnd] = useState();
  const [books, setBooks] = useState([]);
  const totalDays = differenceInCalendarDays(new Date(end), new Date(begin));
  const totalBooks = books.length;
  const totalPages = books.reduce((acc, book) => {
    return acc + book.pages;
  }, 0);

  const trainingStart = (value) => {
    setBegin(value);
  };

  const trainingEnd = (value) => {
    setEnd(value);
  };

  const choosedBook = (option) => {
    setBooks((prevState) => {
      // Проверяем, есть ли уже такой элемент в массиве
      if (!prevState.includes(option)) {
        return [...prevState, option];
      }
      return prevState;
    });
  };

  const deleteBook = (id) => {
    const newBooks = books.filter((item) => item._id !== id);
    setBooks(newBooks);
  };

  const train = {
    start: begin,
    finish: end,
    books: books,
    totalDay: totalDays,
    totalPage: totalPages,
  };

  const isBooks = totalBooks > 0;
  return (
    <div className={styles.caseTrain}>
      <div className={styles.caseGoal}>
        <MyGoalRead totalDays={totalDays} totalBooks={totalBooks} />
      </div>
      <div className={styles.caseForm}>
        <div className={styles.wrapFormTrain}>
          <h2 className={styles.titleTrain}>{t("form_title")}</h2>
          <FormDate trainingStart={trainingStart} trainingEnd={trainingEnd} />
          <FormSelect choosedBook={choosedBook} />
        </div>
      </div>
      <div className={styles.caseList}>
        <TrainListBooks books={books} deleteBook={deleteBook} />
        {isBooks && (
          <ButtonAction formAction={createCoach} item={train}>
            {t("btn_training")}
          </ButtonAction>
        )}
      </div>
    </div>
  );
}
