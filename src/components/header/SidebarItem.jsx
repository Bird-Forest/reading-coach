"use client";

import Link from "next/link";
import React from "react";
import styles from "./Header.module.css";

export default function SidebarItem({ current, pathname, children }) {
  return (
    <div className={styles.wrapSideItem}>
      <Link
        href={pathname}
        className={current ? styles.wrapIconActiv : styles.wrapIcon}
      >
        {children}
      </Link>
    </div>
  );
}
