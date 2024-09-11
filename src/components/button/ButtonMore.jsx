import React from "react";
import { BsPlusLg } from "react-icons/bs";
import styles from "./Button.module.css";

export default function ButtonMore() {
  return (
    <div className={styles.wrapBtnMore}>
      <button type="button" className={styles.btnMore}>
        <BsPlusLg className={styles.iconMore} />
      </button>
    </div>
  );
}
