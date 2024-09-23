"use client";

import React, { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { HiArrowLongLeft } from "react-icons/hi2";
import styles from "./TrainMobile.module.css";
import FormDate from "./FormDate";
import MyGoalRead from "../goal/MyGoalRead";
import FormSelect from "./FormSelect";
import TrainListBooks from "./TrainListBooks";
import ButtonAction from "../button/ButtonAction";
import MyChart from "../chart/MyChart";
import { bookCategory } from "@/constants/bookCategory";
import { differenceInCalendarDays } from "date-fns";
import { createCoach } from "@/services/coaches";
import BookItemEmpty from "../book/BookItemEmpty";

export default function TrainMobile() {
  const [isForm, setIsForm] = useState(true);

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
    <div className={styles.wrapPage}>
      {isForm ? (
        <div className={styles.wrapForm}>
          <div className={styles.wrapBtnLeft}>
            <button
              type="button"
              onClick={() => setIsForm(false)}
              className={styles.btnLeft}
            >
              <HiArrowLongLeft className={styles.iconNav} />
            </button>
          </div>
          <div className={styles.wrapFormTrain}>
            <h2 className={styles.titleTrain}>Моє тренування</h2>
            <FormDate trainingStart={trainingStart} trainingEnd={trainingEnd} />
            <FormSelect choosedBook={choosedBook} />
          </div>
        </div>
      ) : (
        <div className={styles.wrapList}>
          <MyGoalRead totalDays={totalDays} totalBooks={totalBooks} />
          {isBooks ? (
            <TrainListBooks books={books} deleteBook={deleteBook} />
          ) : (
            <BookItemEmpty />
          )}
          {isBooks && (
            <ButtonAction formAction={createCoach} item={train}>
              Почати тренування
            </ButtonAction>
          )}
          <MyChart />
          <div className={styles.wrapBtnMore}>
            <button
              type="button"
              onClick={() => setIsForm(true)}
              className={styles.btnMore}
            >
              <BsPlusLg className={styles.iconMore} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
