"use client";

import React from "react";
import styles from "./Button.module.css";

export default function ButtonSubmit({ children }) {
  return (
    <div className={styles.wrapBtn}>
      <button type="submit" className={styles.submitBtn}>
        {children}
      </button>
    </div>
  );
}
