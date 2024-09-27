"use client";

import React, { useState } from "react";
import styles from "./Statistic.module.css";
import TableHeaderTrain from "../table/TableHeaderTrain";
import BookItemStatist from "../book/BookItemStatist";
import StartSteps from "../modal/StartSteps";
import { bookCategory } from "@/constants/bookCategory";
import { updateBooksCoach } from "@/services/coaches";
import useSWR from "swr";
import Loading from "../helper/Loading";
import { createPortal } from "react-dom";
import OverlayModal from "../modal/OverlayModal";
import ReadyModal from "../modal/ReadyModal";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function StatListBooks({ id }) {
  const shouldFetch = !!id;
  const { data, isLoading } = useSWR(
    shouldFetch ? `/api/coaches?id=${id}` : null,
    fetcher,
    {
      refreshInterval: 3600,
    }
  );
  const coach = data;
  const arrBooks = coach && coach.books;

  const [isModal, setIsModal] = useState(false);

  const closeModal = () => {
    setIsModal(false);
  };

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
    setIsModal(true);
  };

  const Arr = Array.isArray(arrBooks) && arrBooks.length > 0;
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className={styles.wrapListBook}>
          {Arr ? (
            <>
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
            </>
          ) : (
            <StartSteps />
          )}
        </div>
      )}
      {isModal &&
        createPortal(
          <OverlayModal content={<ReadyModal closeModal={closeModal} />} />,
          document.body
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
