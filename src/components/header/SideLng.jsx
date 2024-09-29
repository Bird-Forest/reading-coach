import React from "react";
import styles from "./Header.module.css";
import { GrLanguage } from "react-icons/gr";

export default function SideLng() {
  return (
    <div className={styles.wrapSideItem}>
      <button type="button">
        <GrLanguage className={styles.iconSide} />
      </button>
    </div>
  );
}
