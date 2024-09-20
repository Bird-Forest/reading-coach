// "use client";

import React from "react";
import styles from "./Library.module.css";
import TableHeaders from "../table/TableHeaders";
import BookItem from "../book/BookItem";

export default function ListBooksStart({ arrStart }) {
  return (
    <div className={styles.wrapListAny}>
      <h5 className={styles.titleList}>Маю намір прочитати</h5>
      <div className={styles.wrapTabList}>
        <TableHeaders />
        <ul className={styles.listStart}>
          {arrStart.map((item, i) => (
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
