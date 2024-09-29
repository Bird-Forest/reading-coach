import React from "react";
import Link from "next/link";
import styles from "./Util.module.css";

export default function NotPage() {
  return (
    <div className={styles.bg1}>
      <div className={styles.bg2}>
        <div className={styles.wrapNotFound}>
          <h2 className={styles.titleNotFound}>404</h2>
          <p className={styles.textNotFound}>Сторінку не знайдено</p>
          <Link href="/" className={styles.linkNotFound}>
            Повернутись на головну
          </Link>
        </div>
      </div>
    </div>
  );
}
