import React from "react";
import { ImQuotesLeft } from "react-icons/im";
import styles from "./Form.module.css";

export default function Quotation() {
  return (
    <div className={styles.wrapQuote}>
      <div className={styles.boxQuote}>
        <div className={styles.wrapIcon}>
          <ImQuotesLeft className={styles.iconQuote} />
        </div>
        <h4 className={styles.textQuote}>
          Книги - це кораблі думки, які мандрують хвилями часу і дбайливо несуть
          свій дорогоцінний вантаж від покоління до покоління.
        </h4>
        <div className={styles.wrapAuthor}>
          <div className={styles.lineQuote}></div>
          <h5 className={styles.authorQuote}>Бекон Ф.</h5>
        </div>
      </div>
    </div>
  );
}
