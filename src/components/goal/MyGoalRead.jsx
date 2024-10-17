import React from "react";
import styles from "./Goal.module.css";
import { open_sans } from "@/app/fonts";
import { useTranslations } from "next-intl";

export default function MyGoalRead({ totalDays, totalBooks }) {
  const t = useTranslations("goal");
  return (
    <div className={styles.wrapTarget}>
      <h2 className={styles.titleGoal}>{t("title")}</h2>
      <div className={styles.countTarget}>
        <div className={styles.wrapCount}>
          <p className={`${open_sans.className} ${styles.counter}`}>
            {totalBooks || 0}
          </p>
          <p className={styles.textCounter}>{t("amount_books")}</p>
        </div>
        <div className={styles.wrapCount}>
          <p className={`${open_sans.className} ${styles.counter}`}>
            {totalDays || 0}
          </p>
          <p className={styles.textCounter}>{t("amount_days")}</p>
        </div>
      </div>
    </div>
  );
}
