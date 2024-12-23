"use client";

import React from "react";
import styles from "./Book.module.css";
import { bookCategory } from "@/constants/bookCategory";
import { LuSquare, LuCheckSquare } from "react-icons/lu";
import { useTranslations } from "next-intl";

export default function BookItemStatist({ item, updateProgress }) {
  const t = useTranslations("book");
  const endCategory = item.category === bookCategory.end;

  return (
    <div key={item._id} className={styles.wrapBox}>
      <div className={styles.wrapTitleBook}>
        <div className={styles.wrapIcon}>
          <button
            type="button"
            // onClick={updateProgress}
            onClick={() => updateProgress(item)}
            className={styles.btnStat}
          >
            {endCategory ? (
              <LuCheckSquare
                style={{
                  width: "20px",
                  height: "20px",
                  stroke: "rgb(255, 107, 8)",
                }}
              />
            ) : (
              <LuSquare
                style={{
                  width: "20px",
                  height: "20px",
                  stroke: "rgb(166, 171, 185)",
                }}
              />
            )}
          </button>
        </div>
        <h6 className={styles.titleBook}>{item.title}</h6>
      </div>
      <div className={styles.wrapTextBook}>
        <p className={styles.keyBook}>{t("author")}</p>
        <p className={styles.textBook}>{item.author}</p>
      </div>
      <div className={styles.wrapTextBook}>
        <p className={styles.keyBook}>{t("year")}</p>
        <p className={`${styles.textBook} ${styles.position}`}>{item.year}</p>
      </div>
      <div className={styles.wrapTextBook}>
        <p className={styles.keyBook}>{t("pages")}</p>
        <p className={`${styles.textBook} ${styles.position}`}>{item.pages}</p>
      </div>
    </div>
  );
}
