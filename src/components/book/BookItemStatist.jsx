import React from "react";
import { MdMenuBook } from "react-icons/md";
import { BsSquare } from "react-icons/bs";
import styles from "./Book.module.css";
import { bookCategory } from "@/constants/bookCategory";
import { LuSquare, LuCheckSquare } from "react-icons/lu";

export default function BookItemStatist(item) {
  return (
    <div key={item._id} className={styles.wrapBox}>
      <div className={styles.wrapTitleBook}>
        <div className={styles.wrapIcon}>
          <LuSquare className={styles.iconBook} />
          <LuCheckSquare className={styles.iconBook} />
          <BsSquare className={styles.iconBook} />
          <MdMenuBook
            className={
              item.category === bookCategory.init
                ? styles.iconBookOrang
                : styles.iconBook
            }
          />
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
    </div>
  );
}
