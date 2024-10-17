import React from "react";
import styles from "./Library.module.css";
import BookItem from "../book/BookItem";
import TableHeaders from "../table/TableHeaders";
import { useTranslations } from "next-intl";

export default function ListBooksInit({ arrInit }) {
  const t = useTranslations("library");
  return (
    <div className={styles.wrapListAny}>
      <h5 className={styles.titleList}>{t("title_init")}</h5>
      <div className={styles.wrapTabList}>
        <TableHeaders />
        <ul className={styles.listStart}>
          {arrInit.map((item) => (
            <li
              key={item._id}
              className={`${styles.wrapBook} ${styles.bgBook}`}
            >
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
