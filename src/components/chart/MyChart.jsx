import React from "react";
import styles from "./Chart.module.css";
import dynamic from "next/dynamic";
const LineGraph = dynamic(() => import("./LineGraph"), { ssr: false });
import { useTranslations } from "next-intl";

export default function MyChart() {
  const t = useTranslations("chart");
  return (
    <div className={styles.wrapChart}>
      <div className={styles.wrapTitleChart}>
        <p className={styles.textChart}>{t("text")}</p>
        <p className={styles.countChart}>0</p>
      </div>
      <LineGraph />
    </div>
  );
}
