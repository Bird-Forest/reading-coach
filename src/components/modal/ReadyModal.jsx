"use client";

import React from "react";
import styles from "./Modal.module.css";

import { MdOutlineThumbUp } from "react-icons/md";

export default function ReadyModal({ closeModal }) {
  return (
    <div className={styles.wrapReady}>
      <div className={styles.wrapIconReady}>
        <MdOutlineThumbUp className={styles.iconReady} />
      </div>
      <p className={styles.textNotif}>
        Вітаю!
        <br /> Ще одна книга прочитана.
      </p>
      <button type="button" onClick={closeModal} className={styles.btnReady}>
        Готово
      </button>
    </div>
  );
}
