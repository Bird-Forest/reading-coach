"use client";

import React from "react";
import styles from "./Button.module.css";
import Link from "next/link";

export default function ButtonLink({ path, children }) {
  return (
    <div className={styles.wrapBtnLink}>
      <Link href={path} className={styles.btnLink}>
        {children}
      </Link>
    </div>
  );
}
