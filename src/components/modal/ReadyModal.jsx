"use client";

import React from "react";
import styles from "./Modal.module.css";
import { useTranslations } from "next-intl";
import { MdOutlineThumbUp } from "react-icons/md";

export default function ReadyModal({ closeModal }) {
  const t = useTranslations("modal");
  return (
    <div className={styles.wrapReady}>
      <div className={styles.wrapIconReady}>
        <MdOutlineThumbUp className={styles.iconReady} />
      </div>
      <p className={styles.textNotif}>
        {t.rich("redy_text", {
          br: () => <br />,
        })}
      </p>
      <button
        type="button"
        onClick={closeModal}
        className={`${styles.btnReady} ${styles.btnOrang}`}
      >
        {t("redy_btn")}
      </button>
    </div>
  );
}

/* Вітаю!
        <br /> Ще одна книга прочитана. */
