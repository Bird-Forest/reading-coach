import React from "react";
import { MdMenuBook } from "react-icons/md";
import styles from "./Book.module.css";

export default function BookItemEmpty() {
  return (
    <div className={styles.wrapEmpty}>
      <div className={styles.wrapTitleEmpty}>
        <div className={styles.wrapIcon}>
          <MdMenuBook className={styles.iconBook} />
        </div>
        <p className={styles.textBook}>...</p>
      </div>
      <div className={styles.wrapTextEmpty}>
        <p className={styles.textEmpty}>
          Автор:<span>...</span>
        </p>
        <p className={styles.textEmpty}>
          Рік:<span>...</span>
        </p>
        <p className={styles.textEmpty}>
          Стор.:<span>...</span>
        </p>
      </div>
    </div>
  );
}
