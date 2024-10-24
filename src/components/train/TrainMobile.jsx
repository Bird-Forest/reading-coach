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
import { differenceInCalendarDays } from "date-fns";
import BookItemEmpty from "../book/BookItemEmpty";
import { useTranslations } from "next-intl";

export default function TrainMobile() {
  const t = useTranslations("training");
  const [isForm, setIsForm] = useState(true);

  const [begin, setBegin] = useState("");
  const [end, setEnd] = useState("");
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
            <h2 className={styles.titleTrain}>{t("form_title")}</h2>
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
            <ButtonAction item={train}>{t("btn_training")}</ButtonAction>
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
