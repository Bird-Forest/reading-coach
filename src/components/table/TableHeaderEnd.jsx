import React from "react";
import styles from "./Table.module.css";
import { useTranslations } from "next-intl";

export default function TableHeaderEnd() {
  const t = useTranslations("table_header");
  return (
    <div className={styles.wrapTabEnd}>
      <p className={styles.textTabEnd}>{t("tab_title")}</p>
      <p className={styles.textTabEnd}>{t("tab_author")}</p>
      <p className={styles.textTabEnd}>{t("tab_year")}</p>
      <p className={styles.textTabEnd}>{t("tab_pages")}</p>
      <p className={styles.textTabEnd}>{t("tab_rating")}</p>
    </div>
  );
}
