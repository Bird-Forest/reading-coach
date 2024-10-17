import React from "react";
import { MdMenuBook } from "react-icons/md";
import styles from "./Book.module.css";
import { useTranslations } from "next-intl";

export default function BookItemEmpty() {
  const t = useTranslations("book");
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
          {t("author")}
          <span>...</span>
        </p>
        <p className={styles.textEmpty}>
          {t("year")}
          <span>...</span>
        </p>
        <p className={styles.textEmpty}>
          {t("pages")}
          <span>...</span>
        </p>
      </div>
    </div>
  );
}
