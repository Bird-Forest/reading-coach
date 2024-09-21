import React from "react";
import styles from "./Statistic.module.css";
import TableHeaderTrain from "../table/TableHeaderTrain";
import BookItemStatist from "../book/BookItemStatist";

export default function StatListBooks({ arrInit }) {
  // const Arr = Array.isArray(arrInit) && arrInit.length > 0;
  return (
    <div className={styles.wrapListBook}>
      <TableHeaderTrain />
      <ul className={styles.wrapList}>
        {arrInit.map((item) => (
          <li key={item._id} className={styles.wrapItem}>
            <BookItemStatist item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
