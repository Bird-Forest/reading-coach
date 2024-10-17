"use client";

import React, { useEffect, useState } from "react";
import styles from "./Library.module.css";
import BookItem from "../book/BookItem";
import TableHeaders from "../table/TableHeaders";
import { useTranslations } from "next-intl";
import { bookCategory } from "@/constants/bookCategory";
import SpinnerO from "../helper/SpinnerO";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ListBooksInit({ userId, getLengthInit }) {
  const t = useTranslations("library");
  const [books, setBooks] = useState([]);

  const category = bookCategory.init;
  const shouldFetch = !!userId;

  const { data, isLoading } = useSWR(
    shouldFetch ? `/api/books?category=${category}&id=${userId}` : null,
    fetcher,
    { refreshInterval: 3600 }
  );

  useEffect(() => {
    if (!data) return;
    setBooks(data);
    getLengthInit(data);
  }, [data, getLengthInit]);

  const Arr = Array.isArray(books) && books.length > 0;
  console.log(books);
  return (
    <>
      {isLoading ? (
        <SpinnerO />
      ) : (
        <div className={styles.wrapListAny}>
          <h5 className={styles.titleList}>{t("title_init")}</h5>
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
