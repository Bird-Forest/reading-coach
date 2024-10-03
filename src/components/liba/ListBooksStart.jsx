"use client";

import React from "react";
import styles from "./Library.module.css";
import TableHeaders from "../table/TableHeaders";
import BookItem from "../book/BookItem";
import useSWR from "swr";
import { bookCategory } from "@/constants/bookCategory";
import Loading from "../helper/Loading";
import { useSession } from "next-auth/react";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ListBooksStart() {
  const { data: session } = useSession();
  const userId = session?.user.id;
  const category = bookCategory.start;

  const { data, isLoading } = useSWR(
    `/api/books?category=${category}&id=${userId}`,
    fetcher,
    { refreshInterval: 3600 }
  );
  // console.log(data);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className={styles.wrapListAny}>
          <h5 className={styles.titleList}>Маю намір прочитати</h5>
          <div className={styles.wrapTabList}>
            <TableHeaders />
            <ul className={styles.listStart}>
              {data.map((item) => (
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
