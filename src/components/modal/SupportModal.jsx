"use client";

import React from "react";
import styles from "./Modal.module.css";
import { MdOutlineThumbUp } from "react-icons/md";

export default function SupportModal({ removeBooks, closeModal }) {
  return (
    <div className={styles.wrapSupport}>
      <div className={styles.wrapIconSupport}>
        <MdOutlineThumbUp className={styles.iconSupport} />
      </div>
      <p className={styles.textNotif}>
        Ти молодчина,
        <br /> але потрібно швидше! <br />
        Наступного разу тобі все вдасться
      </p>
      <div className={styles.wrapBtnSupport}>
        <button
          type="button"
          onClick={removeBooks}
          className={`${styles.btnSupport} ${styles.btnOrang}`}
        >
          Нове тренування
        </button>
        <button
          type="button"
          onClick={closeModal}
          className={`${styles.btnSupport} ${styles.btnWhite}`}
        >
          Назад
        </button>
      </div>
    </div>
  );
}
