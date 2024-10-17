"use client";

import React from "react";
import styles from "./Modal.module.css";
import { MdOutlineThumbUp } from "react-icons/md";
import { useTranslations } from "next-intl";

export default function SupportModal({ removeBooks, closeModal }) {
  const t = useTranslations("modal");
  return (
    <div className={styles.wrapSupport}>
      <div className={styles.wrapIconSupport}>
        <MdOutlineThumbUp className={styles.iconSupport} />
      </div>
      <p className={styles.textNotif}>
        {t.rich("supp_text", {
          br: () => <br />,
        })}
      </p>
      <div className={styles.wrapBtnSupport}>
        <button
          type="button"
          onClick={removeBooks}
          className={`${styles.btnSupport} ${styles.btnOrang}`}
        >
          {t("supp_train")}
        </button>
        <button
          type="button"
          onClick={closeModal}
          className={`${styles.btnSupport} ${styles.btnWhite}`}
        >
          {t("supp_back")}
        </button>
      </div>
    </div>
  );
}

// Ти молодчина,
//         <br /> але потрібно швидше! <br />
//         Наступного разу тобі все вдасться
