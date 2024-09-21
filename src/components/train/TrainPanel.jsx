"use client";

import React, { useState } from "react";
import styles from "./Train.module.css";
import { differenceInCalendarDays } from "date-fns";
import MyGoalRead from "../goal/MyGoalRead";
import MyChart from "../chart/MyChart";
import TrainListBooks from "./TrainListBooks";
import FormSelect from "./FormSelect";
import FormDate from "./FormDate";
import ButtonAction from "../button/ButtonAction";
import { bookCategory } from "@/constants/bookCategory";
import { createCoach } from "@/services/coaches";
import FormTrain from "./FormTrain";

export default function TrainPanel() {
  const [begin, setBegin] = useState("");
  const [end, setEnd] = useState("");
  const [books, setBooks] = useState([]);

  const totalDays = differenceInCalendarDays(new Date(end), new Date(begin));
  const totalBooks = books.length;

  const trainingStart = (value) => {
    setBegin(value);
  };

  const trainingEnd = (value) => {
    setEnd(value);
  };

  const choosedBook = (option) => {
    setBooks((prevState) => [...prevState, option]);
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
    totalPage: totalBooks,
    category: bookCategory.init,
  };
  const isBooks = totalBooks > 0;
  return (
    <div className={styles.caseTrain}>
      <div className={styles.caseForm}>
        <MyGoalRead totalDays={totalDays} totalBooks={totalBooks} />
        <div className={styles.wrapFormTrain}>
          <h2 className={styles.titleTrain}>Моє тренування</h2>
          <FormDate trainingStart={trainingStart} trainingEnd={trainingEnd} />
          <FormSelect choosedBook={choosedBook} />
        </div>
      </div>
      <div className={styles.wrapBlock}>
        <TrainListBooks books={books} deleteBook={deleteBook} />
        {isBooks && (
          <ButtonAction formAction={createCoach} item={train}>
            Почати тренування
          </ButtonAction>
        )}
        <MyChart />
      </div>
    </div>
  );
}
