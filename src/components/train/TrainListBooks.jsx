"use client";

import React from "react";
import styles from "./Train.module.css";
import BookItem from "../book/BookItem";
import { BiSolidTrash } from "react-icons/bi";
import { MdMenuBook } from "react-icons/md";
import TableHeaderTrain from "../table/TableHeaderTrain";

export default function TrainListBooks({ books, deleteBook }) {
  const Arr = Array.isArray(books) && books.length > 0;
  return (
    <div className={styles.wrapListBook}>
      <TableHeaderTrain />
      <ul className={styles.listBook}>
        {Arr &&
          books.map((item, i) => (
            <li key={i} className={styles.wrapItemTrain}>
              <BookItem
                title={item.title}
                author={item.author}
                pages={item.pages}
                category={item.category}
                year={item.year}
              />
              <button
                type="button"
                onClick={() => deleteBook(item._id)}
                className={styles.btnTrash}
              >
                <BiSolidTrash className={styles.iconTrash} />
              </button>
            </li>
          ))}
        <li className={styles.wrapEmptyItem}>
          <div className={styles.wrapIcon}>
            <MdMenuBook className={styles.iconBook} />
          </div>
          <p className={styles.textBook}>...</p>
        </li>
      </ul>
    </div>
  );
}
