import React from "react";
import styles from "./Table.module.css";
import { useTranslations } from "next-intl";

export default function TableHeaders() {
  const t = useTranslations("table_header");
  return (
    <div className={styles.wrapTable}>
      <p className={styles.textTab}>{t("tab_title")}</p>
      <p className={styles.textTab}>{t("tab_author")}</p>
      <p className={styles.textTab}>{t("tab_year")}</p>
      <p className={styles.textTab}>{t("tab_pages")}</p>
    </div>
  );
}
