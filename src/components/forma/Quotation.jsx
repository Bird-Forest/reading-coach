import React from "react";
import { ImQuotesLeft } from "react-icons/im";
import styles from "./Form.module.css";
import { useTranslations } from "next-intl";

export default function Quotation() {
  const t = useTranslations("home");
  return (
    <div className={styles.wrapQuote}>
      <div className={styles.boxQuote}>
        <div className={styles.wrapIcon}>
          <ImQuotesLeft className={styles.iconQuote} />
        </div>
        <h4 className={styles.textQuote}>{t("quotation")}</h4>
        <div className={styles.wrapAuthor}>
          <div className={styles.lineQuote}></div>
          <h5 className={styles.authorQuote}>{t("author")}</h5>
        </div>
      </div>
    </div>
  );
}
