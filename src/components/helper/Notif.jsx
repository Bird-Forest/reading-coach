"use client";

import React, { useEffect } from "react";
import styles from "./Util.module.css";

export default function Notif({ message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [onClose]);
  return (
    <>
      <p className={styles.textMess}>{message}</p>
    </>
  );
}
