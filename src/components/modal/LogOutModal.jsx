" use client";

import React from "react";
import styles from "./Modal.module.css";
import { useTranslations } from "next-intl";

export default function LogOutModal({ exitApplication, closeModal }) {
  const t = useTranslations("modal");
  return (
    <div className={styles.wrapOutModal}>
      <p className={styles.textOut}>{t("exit_text")}</p>
      <div className={styles.wrapBtnOut}>
        <button
          type="button"
          onClick={closeModal}
          className={`${styles.btnOut} ${styles.btnWhite}`}
        >
          {t("exit_cancel")}
        </button>
        <button
          type="button"
          onClick={exitApplication}
          className={`${styles.btnOut} ${styles.btnOrang}`}
        >
          {t("exit_leave")}
        </button>
      </div>
    </div>
  );
}
