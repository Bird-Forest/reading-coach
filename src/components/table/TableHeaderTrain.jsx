import React from "react";
import styles from "./Table.module.css";
import { useTranslations } from "next-intl";

export default function TableHeaderTrain() {
  const t = useTranslations("table_header");
  return (
    <div className={styles.wrapTableTrain}>
      <p className={styles.tabTrain}>{t("tab_title")}</p>
      <p className={styles.tabTrain}>{t("tab_author")}</p>
      <p className={styles.tabTrain}>{t("tab_year")}</p>
      <p className={styles.tabTrain}>{t("tab_pages")}</p>
    </div>
  );
}
