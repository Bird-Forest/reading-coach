import React from "react";
import styles from "./Counter.module.css";
import CounterYear from "./CounterYear";
import CounterGoal from "./CounterGoal";

export default function Counter() {
  return (
    <div className={styles.wrapCounter}>
      <CounterYear />
      <CounterGoal />
    </div>
  );
}
