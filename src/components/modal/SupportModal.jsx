"use client";

import React from "react";
import styles from "./Modal.module.css";
import { MdOutlineThumbUp } from "react-icons/md";
import Link from "next/link";

export default function SupportModal({ pathTrain, closeModal }) {
  console.log(pathTrain);
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
        <Link
          href={pathTrain}
          className={`${styles.btnSupport} ${styles.btnOrang}`}
        >
          Нове тренування
        </Link>
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
