import React from "react";
import { MdMenuBook } from "react-icons/md";
import styles from "./Book.module.css";
import { BiSolidTrash } from "react-icons/bi";

export default function BookItemTrain(item) {
  return (
    <li key={item._id} className={styles.wrapBook}>
      <div className={styles.wrapTitleBook}>
        <div className={styles.wrapIcon}>
          <MdMenuBook className={styles.iconBook} />
        </div>
        <h6 className={styles.titleBook}>{item.title}</h6>
      </div>
      <div className={styles.wrapTextBook}>
        <p className={styles.keyBook}>Автор:</p>
        <p className={styles.textBook}>{item.author}</p>
      </div>
      <div className={styles.wrapTextBook}>
        <p className={styles.keyBook}>Рік:</p>
        <p className={styles.textBook}>{item.year}</p>
      </div>
      <div className={styles.wrapTextBook}>
        <p className={styles.keyBook}>Стор.:</p>
        <p className={styles.textBook}>{item.pages}</p>
      </div>
      <button type="button" className={styles.btnTrash}>
        <BiSolidTrash className={styles.iconTrash} />
      </button>
    </li>
  );
}
