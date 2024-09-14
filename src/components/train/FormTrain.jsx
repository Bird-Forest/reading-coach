import React from "react";
import { RxCalendar } from "react-icons/rx";
import { IoMdArrowDropdown } from "react-icons/io";
import styles from "./Train.module.css";

export default function FormTrain() {
  return (
    <div className={styles.wrapFormTrain}>
      <h2 className={styles.titleTrain}>Моє тренування</h2>
      <form className={styles.formAddBook}>
        <label className={styles.labelDate}>
          <input
            type="text"
            className={styles.inputDate}
            placeholder="Початок"
          />
          <div className={styles.wrapIconCldr}>
            <RxCalendar className={styles.iconCldr} />
          </div>

          <button type="button" className={styles.btnOpen}>
            <IoMdArrowDropdown className={styles.iconOpen} />
          </button>
        </label>
        <label className={styles.labelDate}>
          <input
            type="text"
            className={styles.inputDate}
            placeholder="Завершення"
          />
          <div className={styles.wrapIconCldr}>
            <RxCalendar className={styles.iconCldr} />
          </div>
          <button type="button" className={styles.btnOpen}>
            <IoMdArrowDropdown className={styles.iconOpen} />
          </button>
        </label>
        <label className={styles.labelSelect}>
          <input
            type="text"
            className={styles.inputSelect}
            placeholder="Обрати книги з бібліотеки"
          />
          <button type="button" className={styles.btnOpen}>
            <IoMdArrowDropdown className={styles.iconOpen} />
          </button>
        </label>
        <div className={styles.wrapBtnAdd}>
          <button type="submit" className={styles.btnCreate}>
            Додати
          </button>
        </div>
      </form>
    </div>
  );
}

{
  /* <IoMdArrowDropdown className={styles.iconOpen} /> */
}
