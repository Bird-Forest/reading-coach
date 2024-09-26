"use client";

import React, { useState } from "react";
import styles from "./Statistic.module.css";
import TableHeaderTrain from "../table/TableHeaderTrain";
import BookItemStatist from "../book/BookItemStatist";
import StartSteps from "../modal/StartSteps";
import { bookCategory } from "@/constants/bookCategory";
import { updateBooksCoach } from "@/services/coaches";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function StatListBooks({ id }) {
  const { data } = useSWR(`/api/coaches?id=${id}`, fetcher, {
    refreshInterval: 3600,
  });
  const coach = data;
  const arrBooks = coach && coach.books;

  const updateProgress = async (item) => {
    const newBooks = coach.books.map((el) => {
      if (el._id === item._id) {
        el.category = bookCategory.end;
      }
      return el;
    });
    const update = {
      ...coach,
      books: newBooks,
    };
    const res = await updateBooksCoach(id, update);
  };

  const Arr = Array.isArray(arrBooks) && arrBooks.length > 0;
  return (
    <>
      {Arr ? (
        <div className={styles.wrapListBook}>
          <TableHeaderTrain />
          <ul className={styles.wrapList}>
            {arrBooks.map((item) => (
              <li key={item._id} className={styles.wrapItem}>
                <BookItemStatist
                  updateProgress={() => updateProgress(item)}
                  item={item}
                />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <StartSteps />
      )}
    </>
  );
}

// const books = coach.books.reduce((acc, el) => {
//   if (el._id === item._id) {
//     el.categoty = bookCategory.end;
//   }
//   acc.push(el);
//   return acc;
// }, []);
