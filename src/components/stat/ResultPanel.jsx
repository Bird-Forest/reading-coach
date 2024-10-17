import React from "react";
import styles from "./Result.module.css";
import ResultForm from "./ResultForm";
import ResultList from "./ResultList";
import { useTranslations } from "next-intl";

export default function ResultPanel({ coach }) {
  const t = useTranslations("statistics");
  return (
    <div className={styles.wrapResultPanel}>
      <p className={styles.titilePanel}>{t("title")}</p>
      <div className={styles.wrapResult}>
        <ResultForm coach={coach} />
        <ResultList />
      </div>
    </div>
  );
}
