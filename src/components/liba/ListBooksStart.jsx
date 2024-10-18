"use client";

import React, { useEffect, useState } from "react";
import styles from "./Library.module.css";
import TableHeaders from "../table/TableHeaders";
import BookItem from "../book/BookItem";
import useSWR from "swr";
import { bookCategory } from "@/constants/bookCategory";
import SpinnerO from "../helper/SpinnerO";
import StartSteps from "../modal/StartSteps";
import { useTranslations } from "next-intl";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ListBooksStart({ userId, arrStart }) {
  const t = useTranslations("library");
  const [books, setBooks] = useState(arrStart || []);

  const category = bookCategory.start;
  const shouldFetch = !!userId;

  const { data, isLoading } = useSWR(
    shouldFetch ? `/api/books?category=${category}&id=${userId}` : null,
    fetcher,
    { refreshInterval: 3600 }
  );

  useEffect(() => {
    if (!data) return;
    setBooks(data);
  }, [data]);

  return (
    <>
      {isLoading ? (
        <SpinnerO />
      ) : (
        <div className={styles.wrapListAny}>
          <h5 className={styles.titleList}>{t("title_start")}</h5>
          <div className={styles.wrapTabList}>
            <TableHeaders />
            <ul className={styles.listStart}>
              {books.map((item) => (
                <li
                  key={item._id}
                  className={`${styles.wrapBook} ${styles.bgBook}`}
                >
                  <BookItem
                    title={item.title}
                    author={item.author}
                    pages={item.pages}
                    category={item.category}
                    year={item.year}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
