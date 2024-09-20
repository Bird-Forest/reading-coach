import React from "react";
import styles from "./Library.module.css";
import books from "@/books.json";
import BookItem from "../book/BookItem";
import TableHeaders from "../table/TableHeaders";
import { bookCategory } from "@/constants/bookCategory";

export default function ListBooksInit() {
  const arrInit = books.filter((item) => item.category === bookCategory.init);
  return (
    <div className={styles.wrapListAny}>
      <h5 className={styles.titleList}>Читаю</h5>
      <div className={styles.wrapTabList}>
        <TableHeaders />
        <ul className={styles.listStart}>
          {arrInit.map((item, i) => (
            <li key={i} className={`${styles.wrapBook} ${styles.bgBook}`}>
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
  );
}
