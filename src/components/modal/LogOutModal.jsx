" use client";

import React from "react";
import styles from "./Modal.module.css";

export default function LogOutModal({ exitApplication, closeModal }) {
  return (
    <div className={styles.wrapOutModal}>
      <p className={styles.textOut}>
        Якщо Ви вийдете з програми незбережені дані будуть втрачені
      </p>
      <div className={styles.wrapBtnOut}>
        <button
          type="button"
          onClick={closeModal}
          className={`${styles.btnOut} ${styles.btnWhite}`}
        >
          Відміна
        </button>
        <button
          type="button"
          onClick={exitApplication}
          className={`${styles.btnOut} ${styles.btnOrang}`}
        >
          Вийти
        </button>
      </div>
    </div>
  );
}
