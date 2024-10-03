"use client";

import React, { useEffect, useState } from "react";
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
import { usePathname } from "next/navigation";
import SpinnerO from "../helper/SpinnerO";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function StatListBooks() {
  const pathname = usePathname();
  const segments = pathname.split("/");
  const id = segments[2];

  const shouldFetch = !!id;
  const { data, isLoading } = useSWR(
    shouldFetch ? `/api/coaches?id=${id}` : null,
    fetcher,
    {
      refreshInterval: 3600,
    }
  );

  // const arrBooks = data?.books || [];
  // const coachId = data?._id || " ";

  const [isModal, setIsModal] = useState(false);
  const [arrBooks, setArrBooks] = useState([]);
  const [coachId, setCoachId] = useState("");

  useEffect(() => {
    if (data) {
      setArrBooks(data.books);
      setCoachId(data._id);
    }
  }, [data]);

  const closeModal = () => {
    setIsModal(false);
  };

  const updateProgress = async (item) => {
    const newBooks = arrBooks.map((el) => {
      if (el._id === item._id) {
        el.category = bookCategory.end;
      }
      return el;
    });
    const update = {
      ...data,
      books: newBooks,
    };
    const res = await updateBooksCoach(coachId, update);
    setIsModal(true);
  };

  const Arr = Array.isArray(arrBooks) && arrBooks.length > 0;

  return (
    <>
      {isLoading ? (
        <SpinnerO />
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
