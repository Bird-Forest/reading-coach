import React from "react";
import styles from "./Counter.module.css";
import CounterYear from "./CounterYear";
import CounterGoal from "./CounterGoal";

export default function Counter({ coach }) {
  return (
    <div className={styles.wrapCounter}>
      <CounterYear />
      <CounterGoal coach={coach} />
    </div>
  );
}
