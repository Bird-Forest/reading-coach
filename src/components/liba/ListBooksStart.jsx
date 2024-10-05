"use client";

import React, { useEffect, useState } from "react";
import styles from "./Library.module.css";
import TableHeaders from "../table/TableHeaders";
import BookItem from "../book/BookItem";
import useSWR from "swr";
import { bookCategory } from "@/constants/bookCategory";
import { useSession } from "next-auth/react";
import SpinnerO from "../helper/SpinnerO";
import { constructNow } from "date-fns";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ListBooksStart({ userId, arrStart }) {
  const [books, setBooks] = useState(arrStart);
  // const { data: session } = useSession();
  // const userId = session.user.id;
  const category = bookCategory.start;
  // console.log(session);

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
  // console.log("START", books);
  return (
    <>
      {isLoading ? (
        <SpinnerO />
      ) : (
        <div className={styles.wrapListAny}>
          <h5 className={styles.titleList}>Маю намір прочитати</h5>
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
