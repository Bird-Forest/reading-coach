import React from "react";
import styles from "./Result.module.css";
import ResultForm from "./ResultForm";
import ResultList from "./ResultList";

export default function ResultPanel() {
  return (
    <div className={styles.wrapResultPanel}>
      <p className={styles.titilePanel}>Результати</p>
      <div className={styles.wrapResult}>
        <ResultForm />
        <ResultList />
      </div>
    </div>
  );
}
