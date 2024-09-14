import React from "react";
import styles from "./Train.module.css";
import TableHeaders from "../liba/TableHeaders";
import BookItem from "../book/BookItem";
import { BiSolidTrash } from "react-icons/bi";
import { MdMenuBook } from "react-icons/md";

export default function TrainListBooks({ booksInit }) {
  return (
    <div className={styles.wrapListBook}>
      <div className={styles.wrapTitleTable}>
        <TableHeaders />
      </div>
      <ul className={styles.listBook}>
        {booksInit.map((item, i) => (
          <li key={i} className={styles.wrapItemTrain}>
            <BookItem
              title={item.title}
              author={item.author}
              pages={item.pages}
              category={item.category}
              year={item.year}
            />
            <button type="button" className={styles.btnTrash}>
              <BiSolidTrash className={styles.iconTrash} />
            </button>
          </li>
        ))}
        <div className={styles.wrapEmptyItem}>
          <div className={styles.wrapIcon}>
            <MdMenuBook className={styles.iconBook} />
          </div>
          <p className={styles.textBook}>...</p>
        </div>
      </ul>
    </div>
  );
}
