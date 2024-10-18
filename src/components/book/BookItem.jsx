import React from "react";
import { MdMenuBook } from "react-icons/md";
import styles from "./Book.module.css";
import { useTranslations } from "next-intl";
import { bookCategory } from "@/constants/bookCategory";

export default function BookItem(item) {
  const t = useTranslations("book");
  return (
    <div key={item._id} className={styles.wrapBox}>
      <div className={styles.wrapTitleBook}>
        <div className={styles.wrapIcon} key={item.category}>
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
        <p className={styles.keyBook}>{t("author")}</p>
        <p className={styles.textBook}>{item.author}</p>
      </div>
      <div className={styles.wrapTextBook}>
        <p className={styles.keyBook}>{t("year")}</p>
        <p className={styles.textBook}>{item.year}</p>
      </div>
      <div className={styles.wrapTextBook}>
        <p className={styles.keyBook}>{t("pages")}</p>
        <p className={styles.textBook}>{item.pages}</p>
      </div>
    </div>
  );
}
