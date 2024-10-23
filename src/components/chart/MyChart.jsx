import React from "react";
import styles from "./Chart.module.css";
import dynamic from "next/dynamic";
const LineGraph = dynamic(() => import("./LineGraph"), { ssr: false });

export default function MyChart() {
  return (
    <div className={styles.wrapChart}>
      <div className={styles.wrapTitleChart}>
        <p className={styles.textChart}>Кількість сторінок / день </p>
        <p className={styles.countChart}>0</p>
      </div>
      <LineGraph />
    </div>
  );
}
