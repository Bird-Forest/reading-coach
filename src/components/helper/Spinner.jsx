"use client";

import React from "react";
import BeatLoader from "react-spinners/BeatLoader";
import styles from "./Util.module.css";

export default function Spinner() {
  return (
    <div className={styles.wrapSpin}>
      <BeatLoader color="#ffffff" />
    </div>
  );
}
